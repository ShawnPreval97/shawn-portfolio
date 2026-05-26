import React from "react";

export default function ShawnPortfolioHomepage() {
  const cards = [
    {
      icon: "▮",
      title: "Consumer Insights",
      body: "Research, audience analysis, and behavioral interpretation that turn customer signals into clearer strategic decisions.",
    },
    {
      icon: "◈",
      title: "Marketing Analytics",
      body: "Dashboards, reporting systems, and performance analysis built to connect marketing activity to measurable business outcomes.",
    },
    {
      icon: "✦",
      title: "Systems Strategy",
      body: "AI-assisted workflows, process design, and structured thinking that help teams move from scattered data to repeatable intelligence.",
    },
  ];

  const projects = [
    {
      label: "Marketing Analytics",
      title: "Marketing Performance Dashboard",
      body: "A reporting system designed to track campaign performance, clarify ROI, and make marketing decisions easier to explain.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "AI-Assisted Workflows",
      title: "Research Workflow Automation",
      body: "A workflow concept for reducing manual reporting time while preserving analytical judgment and strategic interpretation.",
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Consumer Insights",
      title: "Audience Segmentation Study",
      body: "A consumer research and segmentation framework for identifying audience behaviors, needs, and strategic opportunities.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Media Strategy",
      title: "Media Planning Intelligence",
      body: "A data-informed approach to media planning that connects audience insight, channel strategy, and performance measurement.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const posts = [
    {
      date: "MAY 12, 2026",
      title: "AI-Assisted Analysis Without Losing Human Judgment",
      body: "How AI tools can strengthen research, reporting, and strategic interpretation when the analyst still owns the reasoning.",
    },
    {
      date: "APR 28, 2026",
      title: "Systems Thinking in Marketing Intelligence",
      body: "Why better marketing decisions come from seeing campaigns, customers, data, and operations as one connected system.",
    },
    {
      date: "APR 10, 2026",
      title: "Turning Research Into Decision Infrastructure",
      body: "A practical framework for moving from raw findings to repeatable business intelligence and clearer strategic action.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#111111]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Shawn Preval.
        </a>

        <div className="hidden items-center gap-10 text-sm md:flex">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>

          <a
            href="#contact"
            className="rounded-sm bg-black px-6 py-3 text-white"
          >
            Let’s Connect
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-8 pb-20 pt-10 md:grid-cols-2 md:items-center"
      >
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Shawn Preval · Marketing Intelligence · Systems Strategy
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Marketing Intelligence <br />& Systems Strategy
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-neutral-600">
            Consumer insights, analytics, and AI-assisted workflows for modern
            decision-making.
          </p>

          <p className="mt-8 max-w-md leading-7 text-neutral-700">
            I help turn research, marketing data, and operational signals into
            clear strategic intelligence—connecting consumer insight,
            analytics, media strategy, and systems thinking.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <a
              href="#projects"
              className="rounded-sm bg-black px-7 py-4 text-sm font-medium text-white"
            >
              View My Work
            </a>

            <a href="#about" className="text-sm font-medium">
              About Me →
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-sm bg-neutral-200 shadow-sm">
            <img
              src="/Images/shawn-headshot.png"
              alt="Shawn Preval"
              className="h-[430px] w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-neutral-200 bg-[#faf9f6]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-14 md:grid-cols-[1fr_2.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              What I Do
            </p>

            <h2 className="mt-5 max-w-xs font-serif text-3xl leading-tight">
              Bridging insight, analytics, and systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-sm border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-10 text-2xl">{card.icon}</div>

                <h3 className="text-lg font-semibold">{card.title}</h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {card.body}
                </p>

                <a
                  href="#projects"
                  className="mt-6 inline-block text-sm font-medium"
                >
                  See related work →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-8 py-16"
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Featured Work
            </p>

            <h2 className="mt-4 font-serif text-4xl">
              Selected Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title}>
              <img
                src={project.img}
                alt={project.title}
                className="h-40 w-full rounded-sm object-cover grayscale"
              />

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                {project.label}
              </p>

              <h3 className="mt-2 font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {project.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="writing"
        className="border-t border-neutral-200 bg-[#faf9f6]"
      >
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Writing & Insights
            </p>

            <h2 className="mt-4 font-serif text-4xl">
              Marketing Intelligence Notes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-sm border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.1em] text-neutral-500">
                  {post.date}
                </p>

                <h3 className="mt-5 max-w-sm font-serif text-2xl leading-tight">
                  {post.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-neutral-600">
                  {post.body}
                </p>

                <a href="#" className="mt-7 inline-block text-sm font-medium">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#111111] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-[1.2fr_1.2fr_1fr_1fr]">
          <div>
            <h2 className="font-serif text-3xl leading-tight">
              Let’s build clearer intelligence from complex signals.
            </h2>
          </div>

          <div>
            <p className="max-w-sm text-sm leading-7 text-neutral-300">
              Open to projects, conversations, and opportunities involving
              marketing intelligence, consumer insights, analytics,
              AI-assisted workflows, and systems strategy.
            </p>

            <a
              href="mailto:shawnpreval2020@outlook.com"
              className="mt-7 inline-block rounded-sm border border-neutral-500 px-6 py-3 text-sm"
            >
              Get In Touch
            </a>
          </div>

          <div className="space-y-8 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Email
              </p>

              <p className="mt-3">shawnpreval2020@outlook.com</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                LinkedIn
              </p>

              <p className="mt-3">
                linkedin.com/in/shawn-preval
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Location
              </p>

              <p className="mt-3">Greater New York City Area</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Resume
              </p>

              <p className="mt-3">Download PDF ↓</p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 pb-10 text-xs text-neutral-500">
          <p>
            © 2026 Shawn Preval. Marketing Intelligence & Systems Strategy.
          </p>

          <a href="#top">↑</a>
        </div>
      </footer>
    </main>
  );
}