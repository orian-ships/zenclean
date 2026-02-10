import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

http.route({
  path: "/api/leads",
  method: "OPTIONS",
  handler: httpAction(async () => {
    return new Response(null, { status: 204, headers: corsHeaders });
  }),
});

http.route({
  path: "/api/leads",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const { name, email, phone, clinicName, clinicType, message, source } = body;

      if (!name || !email || !clinicType) {
        return new Response(
          JSON.stringify({ error: "Missing required fields: name, email, clinicType" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const validTypes = ["dental", "medical", "surgical", "gp", "other"];
      if (!validTypes.includes(clinicType)) {
        return new Response(
          JSON.stringify({ error: "Invalid clinicType" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      await ctx.runMutation(api.leads.submit, {
        name,
        email,
        phone: phone || undefined,
        clinicName: clinicName || undefined,
        clinicType,
        message: message || undefined,
        source: source === "blog" ? "blog" : "form",
      });

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch (e) {
      return new Response(
        JSON.stringify({ error: "Internal error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  }),
});

http.route({
  path: "/api/leads",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const leads = await ctx.runQuery(api.leads.list, {});
    return new Response(JSON.stringify(leads), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }),
});

export default http;
