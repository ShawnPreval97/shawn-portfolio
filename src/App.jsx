import React, { useEffect, useState } from "react";
import BlogSection from "./components/BlogSection.jsx";
import BlogPost from "./components/BlogPost.jsx";
import {
  getPostBySlug,
  getPublishedPosts,
  parseBlogHash,
  SITE_TITLE,
} from "./lib/blog.js";

function publicationYear(dateString) {
  const match = String(dateString).match(/(\d{4})/);
  return match ? match[1] : dateString;
}

export default function ShawnPortfolioHomepage() {
  const blogPosts = getPublishedPosts();
  const [activeBlogSlug, setActiveBlogSlug] = useState(null);

  useEffect(() => {
    const syncFromHash = () => {
      const parsed = parseBlogHash(window.location.hash);

      if (parsed?.view === "post") {
        const post = getPostBySlug(parsed.slug);
        if (post) {
          setActiveBlogSlug(post.slug);
          return;
        }

        setActiveBlogSlug(null);
        window.history.replaceState(null, "", "#blog");
        return;
      }

      setActiveBlogSlug(null);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [blogPosts.length]);

  useEffect(() => {
    const post = activeBlogSlug ? getPostBySlug(activeBlogSlug) : null;
    document.title = post ? `${post.title} | Shawn Preval` : SITE_TITLE;
  }, [activeBlogSlug]);

  const openBlogPost = (slug) => {
    window.location.hash = `blog/${slug}`;
  };

  const returnToBlog = () => {
    window.location.hash = "blog";
    window.requestAnimationFrame(() => {
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const activeBlogPost = activeBlogSlug
    ? getPostBySlug(activeBlogSlug)
    : null;

  if (activeBlogPost) {
    return <BlogPost post={activeBlogPost} onBack={returnToBlog} />;
  }

  const approach = [
    {
      number: "01",
      title: "Lead Discovery",
      body: "Ask the questions that uncover the real customer objective, operational constraint, decision process, and definition of success.",
    },
    {
      number: "02",
      title: "Translate Complexity",
      body: "Explain analytics, CRM, attribution, automation, and data systems in language that executives, marketers, and technical teams can act on.",
    },
    {
      number: "03",
      title: "Shape the Solution",
      body: "Connect customer requirements to practical platform capabilities, workflows, implementation considerations, and measurable outcomes.",
    },
    {
      number: "04",
      title: "Build Confidence and Momentum",
      body: "Develop presentations, recommendations, and business cases that align stakeholders and help opportunities move from interest to decision and adoption.",
    },
  ];

  const secondaryProjects = [
    {
      number: "02",
      title: "Cross-Functional Reporting Transformation",
      body: "Led stakeholder discovery and translated conflicting reporting needs into a shared measurement approach, coordinating business requirements, technical implementation, and executive communication.",
      focus:
        "Discovery, requirements translation, stakeholder alignment, implementation",
    },
    {
      number: "03",
      title: "Attribution Solution Design",
      body: "Diagnosed measurement gaps across disconnected acquisition and fundraising systems, clarified what could and could not be measured, and designed an attribution framework stakeholders could use for decisions.",
      focus:
        "Problem diagnosis, solution design, technical translation, decision support",
    },
    {
      number: "04",
      title: "Emerson College App Redesign",
      body: "Collaborated with Emerson College’s web-services team and fellow students to translate focus-group research and firsthand user feedback into a more practical, student-centered mobile experience. The team reorganized app features around everyday student needs, improved feature visibility, and helped communicate how the product could fit into students’ daily lives.",
      focus: "Product Discovery • User Experience • Adoption Strategy",
      sourceTitle: "New Emerson App Puts Campus in Students’ Hands",
      sourcePublisher: "Emerson Today",
      sourceDate: "September 19, 2018",
      linkHref:
        "https://today.emerson.edu/2018/09/19/new-emerson-app-puts-campus-in-students-hands/",
      linkLabel: "Read the Emerson Today feature",
    },
    {
      number: "05",
      title: "Client Advisory and Delivery",
      body: "Supported approximately $700K in consulting engagements during one month by managing concurrent projects, developing executive-ready recommendations, and responding directly to client business questions.",
      focus:
        "Client communication, consulting delivery, presentations, recommendations",
      metric: "Approximately $700K",
      metricNote:
        "Client consulting engagements supported during a single month as part of the Keypoint Intelligence delivery team.",
    },
  ];

  const publications = [
    {
      type: "Article",
      title:
        "AI’ve Seen the Future: Streamline Your Workflow Like The Jetsons",
      publisher: "Keypoint Intelligence",
      date: "July 29, 2024",
      credit: "Author: Shawn Preval",
      body: "An examination of artificial-intelligence adoption, workflow automation, and how organizations can introduce emerging tools strategically while preserving human judgment and higher-value work.",
      href: "https://keypointintelligence.com/keypoint-blogs/aive-seen-the-future-streamline-your-workflow-like-the-jetsons",
      linkLabel: "Read article",
    },
    {
      type: "Co-authored Article",
      title: "Consumer Perspective of Artificial Intelligence",
      publisher: "Keypoint Intelligence",
      date: "February 25, 2024",
      credit: "Authors: Gabriel Alers and Shawn Preval",
      body: "A research-based examination of generative-AI adoption across demographic groups and the differences in awareness and usage among consumers.",
      href: "https://keypointintelligence.com/keypoint-blogs/consumer-perspective-of-artificial-intelligence",
      linkLabel: "Read article",
    },
    {
      type: "Article",
      title:
        "Looking at Another Statistic from Keypoint Intelligence’s Ongoing Analysis of the Future of Work",
      publisher: "Keypoint Intelligence",
      date: "January 30, 2023",
      credit: "Author: Shawn Preval",
      body: "An analysis of generational differences in workplace print behavior and how hybrid work affected employees’ use of printed and digital information.",
      href: "https://keypointintelligence.com/keypoint-blogs/looking-at-another-statistic-from-keypoint-intelligence-s-ongoing-analysis-of-the-future-of-work",
      linkLabel: "Read article",
    },
    {
      type: "Published Industry Article",
      title:
        "Streamlining Your Workflow with AI: Lessons from The Jetsons",
      publisher: "WhatTheyThink",
      date: "September 19, 2024",
      credit: "Author: Shawn Preval",
      body: "A practical discussion of AI adoption, customer experience, workflow efficiency, and why organizations should introduce artificial intelligence as a tool supporting human creativity and problem-solving.",
      href: "https://whattheythink.com/articles/121193-streamlining-your-workflow-ai-lessons-jetsons/",
      linkLabel: "Read article",
    },
    {
      type: "Podcast Guest",
      title: "AI Everywhere — Therapy and the Resource on the Other End",
      publisher: "The Key Point Podcast / Keypoint Intelligence",
      date: "June 25, 2025",
      credit: "Participants: Alexia Morgan, Lindsey Naples, and Shawn Preval",
      body: "A conversation about whether artificial intelligence can help address gaps in access to mental-health support, including the human limitations, ethical questions, and social implications of relying on technology for care.",
      href: "https://podcasts.apple.com/us/podcast/ai-everywhere-therapy-and-the-resource-on-the-other-end/id1450312663?i=1000714508355",
      linkLabel: "Listen to episode",
    },
  ].slice().sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    return bTime - aTime;
  });

  return (
    <main className="min-h-screen bg-page text-ink">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 border-b border-line px-8 py-7">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Shawn Preval.
        </a>

        <div className="flex flex-wrap items-center justify-end gap-5 text-sm md:gap-8">
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#writing">Writing</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* A. Hero */}
      <section id="top" className="mx-auto max-w-7xl px-8 pb-20 pt-12 md:pt-16">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-8">
          <div className="border border-line bg-surface p-8 md:p-12 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Solutions Consulting • Client Strategy • Marketing Technology
            </p>

            <h1 className="mt-8 max-w-2xl font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
              I help clients turn complex marketing technology into clear
              decisions and working solutions.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              I combine consulting, analytics, and hands-on MarTech experience
              to lead discovery, clarify business needs, explain technical
              tradeoffs, and shape solutions that stakeholders can understand
              and support.
            </p>

            <p className="mt-6 max-w-xl leading-7 text-ink/80">
              My background includes client advisory work, executive
              presentations, market research, CRM, attribution, reporting, and
              automation—giving me the technical credibility to discuss
              implementation without losing sight of the customer, commercial
              objective, or business outcome.
            </p>

            <p className="mt-10 text-sm">
              <a href="#projects" className="font-medium underline-offset-4 hover:underline">
                Selected work
              </a>
              <span className="mx-3 text-line">|</span>
              <a href="#contact" className="font-medium underline-offset-4 hover:underline">
                Contact
              </a>
            </p>
          </div>

          <div className="lg:-mb-6 lg:translate-y-2">
            <div className="overflow-hidden border border-line bg-muted-surface">
              <img
                src="/Images/shawn-headshot.png"
                alt="Shawn Preval"
                className="aspect-[4/5] h-auto w-full object-cover grayscale md:max-h-[34rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* B. Approach */}
      <section
        id="approach"
        className="border-y border-line bg-muted-surface"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-8 py-16 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:gap-20 md:py-20">
          <div className="md:pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Approach
            </p>
            <h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight md:text-5xl">
              Client conversations, clear decisions, working solutions.
            </h2>
          </div>

          <ol className="space-y-0 border-t border-line">
            {approach.map((item) => (
              <li
                key={item.number}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5 border-b border-line py-7 md:gap-8"
              >
                <span className="pt-1 font-serif text-sm text-muted">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About + $3M callout */}
      <section id="about" className="mx-auto max-w-7xl px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              About
            </p>
            <h2 className="mt-5 max-w-xs font-serif text-3xl leading-tight md:text-4xl">
              Between business questions and technical answers.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-base leading-8 text-ink/85">
            <p>
              My career has consistently placed me between business questions
              and technical answers. I began in media planning, where I learned
              how clients evaluate marketing investments. Independent consulting
              and market research strengthened my ability to ask questions,
              analyze unfamiliar problems, develop recommendations, and present
              findings clearly.
            </p>

            <aside className="flex gap-5 border-l border-ink py-1 pl-5">
              <div>
                <p className="font-serif text-3xl tracking-tight md:text-4xl">
                  Up to $3M
                </p>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                  Media budgets managed and analyzed while supporting client
                  campaign planning and optimization.
                </p>
              </div>
            </aside>

            <p>
              My more recent work has given me hands-on experience with the
              systems behind those conversations, including CRM, attribution,
              reporting, analytics, automation, and data platforms. That
              experience allows me to understand both what a customer wants to
              accomplish and what implementation actually requires.
            </p>

            <p>
              I am at my best when I am speaking with stakeholders, clarifying an
              unclear problem, explaining competing options, and helping people
              develop confidence in a practical path forward.
            </p>

            <p>
              I have also authored research-driven technology commentary and
              appeared in podcast discussions, experience that strengthened my
              ability to explain unfamiliar ideas clearly, develop a point of
              view, and engage audiences outside a formal presentation.
            </p>
          </div>
        </div>
      </section>

      {/* C. Featured Work */}
      <section id="projects" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
          <div className="mb-12 max-w-xl md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Featured Work
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Selected Projects
            </h2>
          </div>

          <article className="border border-line p-8 md:p-12 lg:p-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  01 · CRM Growth Solution
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted">
                  Stakeholder collaboration, solution design, CRM automation,
                  execution, revenue impact
                </p>

                <h3 className="mt-8 font-serif text-3xl leading-tight md:text-4xl">
                  CRM Growth Solution
                </h3>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Situation
                    </p>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-ink/85">
                      Partnered with fundraising stakeholders to shape an
                      automated lead-nurture concept.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Contribution
                    </p>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-ink/85">
                      Translated the idea into audience rules and CRM workflows,
                      and executed a solution that generated approximately $7K
                      in new fundraising revenue.
                    </p>
                  </div>
                </div>
              </div>

              <aside className="flex flex-col justify-end border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="font-serif text-4xl tracking-tight md:text-5xl">
                  Approximately $7K
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  New fundraising revenue generated by a CRM lead-nurture
                  solution Shawn helped conceptualize, built, and executed.
                </p>
              </aside>
            </div>
          </article>

          <div className="mt-4 border-t border-line">
            {secondaryProjects.map((project) => (
              <article
                key={project.title}
                className="grid grid-cols-1 gap-4 border-b border-line py-9 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8"
              >
                <p className="font-serif text-sm text-muted">{project.number}</p>

                <div>
                  <h3 className="font-serif text-2xl leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted">
                    {project.focus}
                  </p>
                </div>

                <div>
                  <p className="text-sm leading-7 text-muted">{project.body}</p>

                  {project.metric ? (
                    <aside className="mt-6 flex gap-4 border-l border-ink pl-4">
                      <div>
                        <p className="font-serif text-2xl tracking-tight">
                          {project.metric}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-muted">
                          {project.metricNote}
                        </p>
                      </div>
                    </aside>
                  ) : null}

                  {project.linkHref ? (
                    <div className="mt-5">
                      <p className="text-xs leading-6 text-muted">
                        {project.sourceTitle} · {project.sourcePublisher} ·{" "}
                        {project.sourceDate}
                      </p>
                      <a
                        href={project.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium underline-offset-4 hover:underline"
                      >
                        {project.linkLabel}
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E. Published Work */}
      <section id="writing" className="border-t border-line bg-page">
        <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
          <div className="mb-12 max-w-3xl md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Published Work & Conversations
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Research, commentary, and conversations
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/85">
              I have authored research-driven articles and participated in
              podcast conversations exploring artificial intelligence, consumer
              behavior, workplace technology, and the relationship between
              emerging tools and real human needs. This work reflects my ability
              to interpret research, develop a point of view, and explain complex
              subjects to broader business audiences.
            </p>
          </div>

          <div className="border-t border-line">
            <div className="hidden border-b border-line py-4 text-xs uppercase tracking-[0.12em] text-muted md:grid md:grid-cols-[5rem_11rem_minmax(0,1fr)] md:gap-8">
              <span>Year</span>
              <span>Type</span>
              <span>Title and publisher</span>
            </div>

            {publications.map((item) => (
              <article
                key={item.title}
                className="grid grid-cols-1 gap-3 border-b border-line py-7 md:grid-cols-[5rem_11rem_minmax(0,1fr)] md:gap-8"
              >
                <p className="font-serif text-sm text-muted md:pt-1">
                  {publicationYear(item.date)}
                </p>

                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted md:pt-1">
                  {item.type}
                </p>

                <div>
                  <h3 className="max-w-3xl font-serif text-xl leading-snug md:text-2xl">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {item.publisher}
                    <span className="mx-2 text-line">·</span>
                    {item.date}
                  </p>
                  <p className="mt-2 text-xs text-muted">{item.credit}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                    {item.body}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium underline-offset-4 hover:underline"
                  >
                    {item.linkLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* F. Blog */}
      <BlogSection posts={blogPosts} onOpenPost={openBlogPost} />

      {/* G. Contact */}
      <footer id="contact" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Contact
              </p>
              <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight md:text-4xl">
                Let’s turn complex marketing technology into clear decisions.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted">
                Open to conversations involving solutions consulting, client
                strategy, and marketing technology—discovery, clear decisions,
                stakeholder confidence, and working solutions.
              </p>
            </div>

            <div className="space-y-8 text-sm md:pt-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Email
                </p>
                <a
                  href="mailto:ShawnPreval2020@outlook.com"
                  className="mt-2 inline-block underline-offset-4 hover:underline"
                >
                  ShawnPreval2020@outlook.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/shawn-preval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block underline-offset-4 hover:underline"
                >
                  linkedin.com/in/shawn-preval
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Location
                </p>
                <p className="mt-2">Greater New York City Area</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Website
                </p>
                <a
                  href="https://shawnpreval.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block underline-offset-4 hover:underline"
                >
                  shawnpreval.org
                </a>
              </div>
            </div>
          </div>

          <p className="mt-16 border-t border-line pt-8 text-xs text-muted">
            © 2026 Shawn Preval. Solutions Consulting • Client Strategy •
            Marketing Technology.
          </p>
        </div>
      </footer>
    </main>
  );
}
