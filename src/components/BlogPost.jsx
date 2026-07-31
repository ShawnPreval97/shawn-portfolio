import React from "react";

const proseLinkClass =
  "underline underline-offset-2 decoration-line hover:decoration-ink";

export const blogMdxComponents = {
  h2: (props) => (
    <h2
      className="mt-10 font-serif text-3xl leading-tight tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold leading-tight" {...props} />
  ),
  p: (props) => (
    <p className="mt-5 text-base leading-8 text-ink/85" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-6 text-base leading-8 text-ink/85"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 text-base leading-8 text-ink/85"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l border-line pl-5 text-muted italic"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  em: (props) => <em {...props} />,
  a: ({ href = "", children, ...props }) => {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={proseLinkClass}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
};

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function BlogPost({ post, onBack }) {
  const Content = post.Content;

  return (
    <main className="min-h-screen bg-page text-ink">
      <div className="mx-auto max-w-3xl px-8 py-10">
        <nav aria-label="Blog navigation">
          <button type="button" onClick={onBack} className="text-sm font-medium">
            ← Back to Blog
          </button>
        </nav>

        <article className="mt-10">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Blog
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>

            {post.tags?.length ? (
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
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
          </header>

          <div className="mt-10 border-t border-line pt-2">
            <Content components={blogMdxComponents} />
          </div>
        </article>

        <div className="mt-14 border-t border-line pt-8">
          <button type="button" onClick={onBack} className="text-sm font-medium">
            ← Back to Blog
          </button>
        </div>
      </div>
    </main>
  );
}
