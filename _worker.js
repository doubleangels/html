// Cloudflare Worker for Security and Performance Headers
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle HTTP/3 and modern protocols
    if (request.headers.get('accept')?.includes('application/signed-exchange')) {
      return new Response('HTTP/3 not supported', { status: 400 });
    }

    // Add security and performance headers
    const response = await fetch(request);
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...response.headers,
        // HTTP/3 support
        'Alt-Svc': 'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
        // Security headers
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        // Compression
        'Vary': 'Accept-Encoding',
        // Security
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
      }
    });

    return newResponse;
  }
};
