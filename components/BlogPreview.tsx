import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlaceholderCard({ i }: { i: number }) {
  return (
    <div className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-[10px] text-[var(--muted)] bg-[var(--bg)] border border-[var(--border)] px-2 py-0.5 rounded">
          Coming soon
        </span>
      </div>
      <div className="h-4 bg-[var(--border)] rounded w-3/4 mb-2 animate-pulse" />
      <div className="h-3 bg-[var(--border)] rounded w-full mb-1 animate-pulse" />
      <div className="h-3 bg-[var(--border)] rounded w-2/3 animate-pulse" />
    </div>
  );
}

export default async function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  const hasPosts = posts.length > 0;

  return (
    <section id="writing" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
          Writing
        </h2>
        <div className="flex items-end justify-between mb-12">
          <h3 className="text-3xl font-semibold text-[var(--fg)]">
            Thoughts on AI, testing,
            <br className="hidden sm:block" /> and building in public.
          </h3>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
          >
            View all posts
            <span className="group-hover:translate-x-0.5 transition-transform">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hasPosts
            ? posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-hover)] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      {post.date}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[var(--fg)] mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2 py-0.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              ))
            : [0, 1, 2].map((i) => <PlaceholderCard key={i} i={i} />)}
        </div>

        <Link
          href="/blog"
          className="sm:hidden mt-6 flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          View all posts <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
