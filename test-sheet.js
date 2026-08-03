// 临时测试脚本：检查 Google Sheet 是否能访问以及包含哪些分页
const fs = require('fs');
const path = require('path');

// 读取环境变量
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

// 解析环境变量
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

const SHEET_ID = envVars.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_JSON = JSON.parse(envVars.GOOGLE_SERVICE_ACCOUNT_JSON);

console.log('Sheet ID:', SHEET_ID);
console.log('Service Account Email:', SERVICE_ACCOUNT_JSON.client_email);

// 简单的 JWT 签名函数（仅用于测试）
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: SERVICE_ACCOUNT_JSON.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: SERVICE_ACCOUNT_JSON.token_uri,
    exp: now + 3600,
    iat: now,
  };

  const header = { alg: 'RS256', typ: 'JWT' };
  
  const base64url = (obj) => 
    btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  
  const unsigned = `${base64url(header)}.${base64url(claim)}`;
  
  // 在浏览器环境中使用 crypto.subtle，但在 Node.js 中我们需要用 node:crypto
  const crypto = require('crypto');
  const privateKey = SERVICE_ACCOUNT_JSON.private_key;
  
  const signature = crypto.sign('sha256', Buffer.from(unsigned), privateKey);
  const sigBase64 = signature.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  
  const jwt = `${unsigned}.${sigBase64}`;
  
  // 获取 access token
  const tokenRes = await fetch(SERVICE_ACCOUNT_JSON.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  
  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    throw new Error(`Failed to get access token: ${tokenRes.status} ${err}`);
  }
  
  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

// 测试获取 Sheet 信息
async function testSheetAccess() {
  try {
    const token = await getAccessToken();
    console.log('\nAccess token obtained successfully');
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    if (!res.ok) {
      const err = await res.text();
      console.error('\nError accessing Sheet:', res.status);
      console.error('Response:', err);
      return;
    }
    
    const data = await res.json();
    console.log('\nSheet found! Title:', data.properties.title);
    console.log('\nWorksheets in this Sheet:');
    data.sheets.forEach((sheet, index) => {
      console.log(`  ${index + 1}. ${sheet.properties.title} (ID: ${sheet.properties.sheetId})`);
    });
    
    const requiredSheets = ['report-analysis', 'genetic-testing', 'cancer-companion'];
    const existingSheetTitles = data.sheets.map(s => s.properties.title);
    
    console.log('\nChecking required worksheets:');
    requiredSheets.forEach(title => {
      const exists = existingSheetTitles.includes(title);
      console.log(`  ${title}: ${exists ? '✓ Found' : '✗ Missing'}`);
    });
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testSheetAccess();
