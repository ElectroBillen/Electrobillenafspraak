export async function POST(req) {
  const body = await req.json();

  console.log("Nieuwe afspraak:", body);

  return Response.json({ success: true });
}
