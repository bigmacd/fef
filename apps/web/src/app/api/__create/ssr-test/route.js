// Minimal SSR test route: no routes imported to avoid build errors
export async function GET(request) {
  const results = [];
  return Response.json({ results });
}
