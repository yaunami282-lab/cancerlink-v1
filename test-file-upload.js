// 测试文件上传到 Google Drive
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

const DRIVE_FOLDER_ID = envVars.GOOGLE_DRIVE_FOLDER_ID;
const SERVICE_ACCOUNT_JSON = JSON.parse(envVars.GOOGLE_SERVICE_ACCOUNT_JSON);

console.log('=== Testing File Upload to Google Drive ===\n');
console.log('Drive Folder ID:', DRIVE_FOLDER_ID);
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
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  
  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    throw new Error(`Failed to get access token: ${tokenRes.status} ${err}`);
  }
  
  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

async function uploadTestFile() {
  try {
    const token = await getAccessToken([
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/drive',
    ]);
    console.log('✓ Access token obtained');
    
    // 创建一个测试文件内容
    const testContent = '这是一个测试文件，用于验证 Google Drive 上传功能。\n测试时间: ' + new Date().toISOString();
    const fileName = 'test-upload-' + Date.now() + '.txt';
    
    // 准备 FormData
    const form = new FormData();
    
    const metadata = {
      name: fileName,
      parents: [DRIVE_FOLDER_ID],
    };
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', new Blob([testContent], { type: 'text/plain' }), fileName);
    
    console.log('\nUploading test file:', fileName);
    
    const res = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      }
    );
    
    console.log('Response status:', res.status);
    
    if (!res.ok) {
      const errText = await res.text();
      console.error('Error response:', errText);
      throw new Error(`Drive API failed: ${res.status}`);
    }
    
    const result = await res.json();
    console.log('✓ File uploaded successfully!');
    console.log('  File ID:', result.id);
    console.log('  View Link:', result.webViewLink);
    
    return result.webViewLink;
    
  } catch (error) {
    console.error('✗ Upload test failed:', error);
    throw error;
  }
}

uploadTestFile();
