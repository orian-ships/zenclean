import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    clinicName: v.optional(v.string()),
    clinicType: v.union(
      v.literal("dental"),
      v.literal("medical"),
      v.literal("surgical"),
      v.literal("gp"),
      v.literal("other")
    ),
    message: v.optional(v.string()),
    source: v.optional(v.union(v.literal("form"), v.literal("blog"))),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", {
      ...args,
      source: args.source ?? "form",
      status: "new",
      createdAt: Date.now(),
    });
  },
});

export const list = query({
  args: {
    status: v.optional(
      v.union(
        v.literal("new"),
        v.literal("contacted"),
        v.literal("qualified"),
        v.literal("converted")
      )
    ),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("leads")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("leads").order("desc").collect();
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("leads"),
    status: v.union(
      v.literal("new"),
      v.literal("contacted"),
      v.literal("qualified"),
      v.literal("converted")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});
