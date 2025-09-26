// Cloudflare Worker for Edge-Side Optimizations
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle HTTP/3 and modern protocols
    if (request.headers.get('accept')?.includes('application/signed-exchange')) {
      return new Response('HTTP/3 not supported', { status: 400 });
    }

    // Add performance headers
    const response = await fetch(request);
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...response.headers,
        // HTTP/3 support
        'Alt-Svc': 'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
        // Performance headers
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        // Cache optimization
        'Cache-Control': url.pathname.startsWith('/assets/') 
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=3600',
        // Compression
        'Vary': 'Accept-Encoding',
        // Security
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
      }
    });

    return newResponse;
  }
};
