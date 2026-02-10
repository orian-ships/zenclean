import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "leads.json");

async function readLeads(): Promise<unknown[]> {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET() {
  const leads = await readLeads();
  return NextResponse.json(leads);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, clinicName, clinicType, message, source } = body;

    if (!name || !email || !clinicType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const lead = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      clinicName,
      clinicType,
      message,
      source: source || "form",
      createdAt: new Date().toISOString(),
      status: "new",
    };

    // Persist to local JSON file
    const leads = await readLeads();
    leads.push(lead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.log("=== NEW LEAD ===");
    console.log(JSON.stringify(lead, null, 2));
    console.log("================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
