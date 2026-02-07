import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    clinicName: v.optional(v.string()),
    clinicType: v.union(v.literal("dental"), v.literal("medical"), v.literal("surgical"), v.literal("gp"), v.literal("other")),
    message: v.optional(v.string()),
    source: v.union(v.literal("form"), v.literal("blog")),
    createdAt: v.number(),
    status: v.union(v.literal("new"), v.literal("contacted"), v.literal("qualified"), v.literal("converted")),
  }).index("by_status", ["status"])
    .index("by_clinicType", ["clinicType"])
    .index("by_createdAt", ["createdAt"]),

  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.string(),
    author: v.string(),
    publishedAt: v.number(),
    metaDescription: v.string(),
    keywords: v.array(v.string()),
    category: v.string(),
  }).index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_publishedAt", ["publishedAt"]),
});
