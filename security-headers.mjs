// Browser traffic is restricted to this app, its configured API, and Coinbase forms.
export function securityHeaders() {
  const raw = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const api = new URL(raw);
  if (api.username || api.password || api.pathname !== '/' || api.search || api.hash) throw new Error('NEXT_PUBLIC_API_URL must be a bare origin');
  const local = ['localhost','127.0.0.1'].includes(api.hostname);
  if (api.protocol !== 'https:' && !(local && api.protocol === 'http:')) throw new Error('API origin must use HTTPS');
  const ws = api.origin.replace(/^http/, 'ws');
  const policy = [
    "default-src 'self'", "base-uri 'self'", "object-src 'none'", "frame-ancestors 'none'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'", "font-src 'self'", "img-src 'self' data: blob:",
    `connect-src 'self' ${api.origin} ${ws}`, "form-action 'self' https://login.coinbase.com",
    "frame-src 'none'", "worker-src 'self' blob:"
  ].join('; ');
  return [{key:'Content-Security-Policy',value:policy},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'X-Content-Type-Options',value:'nosniff'},{key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'}];
}
