// Cloudflare Pages Function for GitHub API optimization
export async function onRequest(context) {
  const { request, env } = context;
  
  // CORS headers for API
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'public, max-age=3600, s-maxage=3600'
  };

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    // Fetch from GitHub API with caching
    const response = await fetch('https://api.github.com/users/mattverlee/repos?per_page=100', {
      headers: {
        'User-Agent': 'Matt-VerLee-Portfolio',
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    const publicRepos = repos.filter(repo => !repo.fork && !repo.private);
    
    return new Response(JSON.stringify({
      count: publicRepos.length,
      repos: publicRepos.slice(0, 6) // Only return first 6 for performance
    }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('GitHub API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch repos' }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }
}
