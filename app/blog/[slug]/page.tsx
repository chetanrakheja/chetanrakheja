import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Chetan Rakheja`,
    description: post.excerpt,
  };
}

const options = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          keepBackground: true,
        },
      ],
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-12"
        >
          <span>←</span> Back to writing
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[var(--muted)]">{post.date}</span>
            <span className="text-[var(--border)]">·</span>
            <span className="font-mono text-xs text-[var(--muted)]">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--fg)] leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Divider */}
        <div className="border-t border-[var(--border)] mb-12" />

        {/* Content */}
        <article className="prose">
          {/* @ts-expect-error async RSC */}
          <MDXRemote source={post.content} options={options} />
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <span>←</span> Back to writing
          </Link>
        </div>
      </div>
    </div>
  );
}
