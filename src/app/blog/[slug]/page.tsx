import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Simple markdown-like rendering for the content
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i}>{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("### ")) {
        return <h3 key={i}>{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i}>
            {items.map((item, j) => (
              <li key={j}>{item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
            ))}
          </ul>
        );
      }
      // Handle inline bold and links
      const html = block
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
      return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
    });
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            author: { "@type": "Organization", name: "ZenClean" },
            publisher: { "@type": "Organization", name: "ZenClean" },
            datePublished: post.publishedAt,
            keywords: post.keywords.join(", "),
          }),
        }}
      />

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-teal-200 hover:text-white text-sm inline-flex items-center gap-1 mb-6 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full font-medium">{post.category}</span>
            <span className="text-xs text-teal-200">{new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          {renderContent(post.content)}
        </div>
      </article>

      {/* CTA */}
      <section className="bg-teal-50 border-t border-teal-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Need Specialist Healthcare Cleaning?</h3>
          <p className="text-gray-600 mb-6">Get a transparent quote for your practice — free assessment, no obligation.</p>
          <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link href={`/blog/${rp.slug}`} key={rp.slug} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all">
                  <div className="h-1.5 bg-gradient-to-r from-teal-700 to-accent" />
                  <div className="p-6">
                    <span className="text-xs bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full font-medium">{rp.category}</span>
                    <h4 className="font-heading text-base font-bold text-gray-900 mt-3 mb-2 group-hover:text-teal-700 transition-colors leading-snug">{rp.title}</h4>
                    <span className="text-teal-700 font-semibold text-sm">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
