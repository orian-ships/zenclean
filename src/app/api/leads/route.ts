import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, clinicName, clinicType, message, source } = body;

    if (!name || !email || !clinicType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log lead to console (webhook placeholder)
    console.log("=== NEW LEAD ===");
    console.log(JSON.stringify({
      name,
      email,
      phone,
      clinicName,
      clinicType,
      message,
      source: source || "form",
      createdAt: new Date().toISOString(),
      status: "new",
    }, null, 2));
    console.log("================");

    // TODO: Submit to Convex when deployment is connected
    // const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    // await convex.mutation(api.leads.create, { ... });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
