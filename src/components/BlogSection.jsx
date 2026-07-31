import React from "react";
import { getBlogHash } from "../lib/blog.js";

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function BlogSection({ posts, onOpenPost }) {
  return (
    <section id="blog" className="border-t border-line bg-muted-surface">
      <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Blog
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Blog</h2>

          <p className="mt-6 text-base leading-8 text-ink/85">
            Personal writing about technology, work, culture, marketing, and
            ideas I am still trying to understand.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-sm leading-7 text-muted">First post coming soon.</p>
        ) : (
          <div className="border-t border-line">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10"
              >
                <p className="text-xs uppercase tracking-[0.1em] text-muted md:pt-1">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>

                <div>
                  <h3 className="font-serif text-2xl leading-tight">
                    <a
                      href={getBlogHash(post.slug)}
                      onClick={(event) => {
                        event.preventDefault();
                        onOpenPost(post.slug);
                      }}
                      className="underline-offset-4 hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                    {post.excerpt}
                  </p>

                  {post.tags?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                      {post.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs uppercase tracking-[0.08em] text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <a
                    href={getBlogHash(post.slug)}
                    onClick={(event) => {
                      event.preventDefault();
                      onOpenPost(post.slug);
                    }}
                    className="mt-5 inline-block text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Read post
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
