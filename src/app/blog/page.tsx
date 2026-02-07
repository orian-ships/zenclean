import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, categories } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Healthcare Cleaning Guides & Insights",
  description:
    "Expert guides on CQC compliance, infection control, dental cleaning standards, and healthcare cleaning best practices from ZenClean.",
};

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-xl text-teal-100 max-w-2xl">
            Expert guides on CQC compliance, infection control standards, and healthcare cleaning best practices.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            <span className="bg-teal-700 text-white px-4 py-1.5 rounded-full text-sm font-medium">All</span>
            {categories.map((cat) => (
              <span key={cat} className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                {/* Colored header bar */}
                <div className="h-2 bg-gradient-to-r from-teal-700 to-accent" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full font-medium">{post.category}</span>
                    <span className="text-xs text-gray-400">{new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </div>
                  <h2 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-teal-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
