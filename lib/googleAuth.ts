/**
 * Google API 認證模組 — 使用 Service Account 認證
 *
 * 環境變數：
 *   GOOGLE_SERVICE_ACCOUNT_JSON — Service Account 的 JSON 憑證（整段 JSON 字串）
 */

const CREDENTIALS_JSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON || "";

type CachedToken = { access_token: string; expires_at: number };
const cachedTokens = new Map<string, CachedToken>();

let dnsInit: Promise<void> | null = null;
async function ensureIpv4First(): Promise<void> {
  if (dnsInit) return dnsInit;
  dnsInit = (async () => {
    try {
      const dns = await import("node:dns");
      if ("setDefaultResultOrder" in dns && typeof dns.setDefaultResultOrder === "function") {
        dns.setDefaultResultOrder("ipv4first");
      }
    } catch {
      return;
    }
  })();
  return dnsInit;
}

function scopeKey(scopes: string[]): string {
  return Array.from(new Set(scopes)).sort().join(" ");
}

/**
 * 獲取 Service Account 的 access token
 * @param scopes 需要的 API 權限範圍
 */
export async function getAccessToken(
  scopes: string[]
): Promise<string> {
  await ensureIpv4First();

  const key = scopeKey(scopes);
  const cached = cachedTokens.get(key);
  if (cached && Date.now() < cached.expires_at - 60000) {
    return cached.access_token;
  }

  if (!CREDENTIALS_JSON) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON environment variable");
  }

  const creds = JSON.parse(CREDENTIALS_JSON);
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: creds.client_email,
    scope: scopes.join(" "),
    aud: creds.token_uri,
    exp: now + 3600,
    iat: now,
  };

  // Sign JWT
  const encoder = new TextEncoder();
  const base64url = (obj: object) =>
    btoa(JSON.stringify(obj)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const unsigned = `${base64url(header)}.${base64url(claim)}`;

  // Import private key
  const keyData = creds.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\n/g, "");
  const keyBytes = Uint8Array.from(atob(keyData), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyBytes,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    encoder.encode(unsigned)
  );
  const sigBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const jwt = `${unsigned}.${sigBase64}`;

  let tokenRes: Response | null = null;
  let lastErr: unknown = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      tokenRes = await fetch(creds.token_uri, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
      });
      break;
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
    }
  }

  if (!tokenRes) {
    throw lastErr instanceof Error ? lastErr : new Error("Failed to get access token");
  }

  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    throw new Error(`Failed to get access token: ${tokenRes.status} ${err}`);
  }

  const tokenData = await tokenRes.json();
  cachedTokens.set(key, {
    access_token: tokenData.access_token,
    expires_at: Date.now() + tokenData.expires_in * 1000,
  });
  return tokenData.access_token;
}
