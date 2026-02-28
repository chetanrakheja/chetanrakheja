"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1L13 7L7 13M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-12"
        >
          <span>←</span> Back home
        </Link>

        <h1 className="text-4xl font-semibold text-[var(--fg)] mb-3">Writing</h1>
        <p className="text-[var(--muted)] mb-10">
          Thoughts on AI engineering, testing, and building in public.
        </p>

        {/* Tag filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                activeTag === null
                  ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--fg)]"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                  activeTag === tag
                    ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--fg)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Posts list */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <p className="text-[var(--muted)] py-8 text-center">No posts yet — coming soon.</p>
          ) : (
            filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-hover)] transition-all"
              >
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-[var(--fg)] mb-1 group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--muted)] mb-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      {post.date}
                    </span>
                    <span className="text-[var(--border)]">·</span>
                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      {post.readTime}
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors mt-1 shrink-0">
                  <ArrowIcon />
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
