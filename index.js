export default {
  async fetch(request, env, ctx) {
    const allowedOrigin = env.ALLOWED_ORIGIN || "https://z4ayn.github.io";
    const origin = request.headers.get("Origin") || "";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": origin === allowedOrigin ? origin : allowedOrigin,
      "Vary": "Origin",
      "X-Content-Type-Options": "nosniff"
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (request.method !== "GET") return new Response(JSON.stringify({ error: "GET only" }), { status: 405, headers });
    if (!env.IG_ACCESS_TOKEN) return new Response(JSON.stringify({ error: "IG_ACCESS_TOKEN secret is not configured" }), { status: 503, headers });
    try {
      const url = new URL("https://graph.instagram.com/me/media");
      url.searchParams.set("fields", "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp");
      url.searchParams.set("limit", "12");
      url.searchParams.set("access_token", env.IG_ACCESS_TOKEN);
      const upstream = await fetch(url.toString(), { headers: { "Accept": "application/json" }, cf: { cacheTtl: 300, cacheEverything: true } });
      const body = await upstream.json();
      if (!upstream.ok || body.error) return new Response(JSON.stringify({ error: "Instagram API request failed", details: body.error?.message || "Check token, permissions and account setup" }), { status: 502, headers });
      return new Response(JSON.stringify({ data: body.data || [] }), { status: 200, headers });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Could not contact Instagram API" }), { status: 502, headers });
    }
  }
};
