// 测试完整的表单提交流程
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 读取环境变量
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

const SHEET_ID = envVars.GOOGLE_SHEET_ID;
const DRIVE_FOLDER_ID = envVars.GOOGLE_DRIVE_FOLDER_ID;
const SERVICE_ACCOUNT_JSON = JSON.parse(envVars.GOOGLE_SERVICE_ACCOUNT_JSON);

console.log('=== Testing Full Submission ===\n');
console.log('Sheet ID:', SHEET_ID);
console.log('Drive Folder ID:', DRIVE_FOLDER_ID || '(not set)');
console.log('Service Account:', SERVICE_ACCOUNT_JSON.client_email);

async function getAccessToken(scopes) {
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: SERVICE_ACCOUNT_JSON.client_email,
    scope: scopes.join(' '),
    aud: SERVICE_ACCOUNT_JSON.token_uri,
    exp: now + 3600,
    iat: now,
  };

  const header = { alg: 'RS256', typ: 'JWT' };
  
  const base64url = (obj) => 
    btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  
  const unsigned = `${base64url(header)}.${base64url(claim)}`;
  
  const privateKey = SERVICE_ACCOUNT_JSON.private_key;
  const signature = crypto.sign('sha256', Buffer.from(unsigned), privateKey);
  const sigBase64 = signature.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  
  const jwt = `${unsigned}.${sigBase64}`;
  
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

async function testAppendToSheet() {
  console.log('\n=== Testing Google Sheets Append ===');
  
  try {
    const token = await getAccessToken(['https://www.googleapis.com/auth/spreadsheets']);
    console.log('✓ Access token obtained');
    
    const serviceType = 'report-analysis';
    const range = 'A:P';
    const worksheetName = encodeURIComponent(serviceType);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${worksheetName}!${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    
    console.log('Request URL:', url);
    
    const testRow = [
      new Date().toISOString(),
      'Test User',
      '男',
      '30',
      'Test Location',
      '1234567890',
      'lung',
      '2024-01-01',
      'yes',
      'chemotherapy',
      'hypertension',
      'Test description',
      '',
      '',
      '',
      ''
    ];
    
    const body = { values: [testRow] };
    
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    console.log('Response status:', res.status);
    
    if (!res.ok) {
      const errText = await res.text();
      console.error('Error response:', errText);
      throw new Error(`Sheets API failed: ${res.status}`);
    }
    
    const result = await res.json();
    console.log('✓ Success! Result:', JSON.stringify(result, null, 2));
    
  } catch (error) {
    console.error('✗ Sheets test failed:', error);
  }
}

async function testDriveAccess() {
  if (!DRIVE_FOLDER_ID) {
    console.log('\n=== Google Drive not configured, skipping ===');
    return;
  }
  
  console.log('\n=== Testing Google Drive Access ===');
  
  try {
    const token = await getAccessToken([
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/drive'
    ]);
    console.log('✓ Access token obtained');
    
    const url = `https://www.googleapis.com/drive/v3/files/${DRIVE_FOLDER_ID}`;
    console.log('Request URL:', url);
    
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    console.log('Response status:', res.status);
    
    if (!res.ok) {
      const errText = await res.text();
      console.error('Error response:', errText);
      throw new Error(`Drive API failed: ${res.status}`);
    }
    
    const folder = await res.json();
    console.log('✓ Success! Folder:', JSON.stringify(folder, null, 2));
    
  } catch (error) {
    console.error('✗ Drive test failed:', error);
  }
}

async function runAllTests() {
  await testAppendToSheet();
  await testDriveAccess();
  console.log('\n=== All tests complete ===');
}

runAllTests();
