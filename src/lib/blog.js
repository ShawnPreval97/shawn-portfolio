/**
 * Blog post discovery and validation.
 *
 * Published posts live in src/content/blog/*.mdx (excluding _template.mdx).
 * Each file should export:
 *
 *   export const meta = {
 *     title: "Post title",
 *     slug: "post-slug",
 *     date: "YYYY-MM-DD",
 *     excerpt: "Short description.",
 *     tags: ["Tag"],
 *     published: true
 *   }
 */

const modules = import.meta.glob("../content/blog/**/*.mdx", { eager: true });

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidMeta(meta) {
  if (!meta || typeof meta !== "object") return false;
  if (!isNonEmptyString(meta.title)) return false;
  if (!isNonEmptyString(meta.slug) || !SLUG_PATTERN.test(meta.slug)) return false;
  if (!isNonEmptyString(meta.date) || !DATE_PATTERN.test(meta.date)) return false;
  if (!isNonEmptyString(meta.excerpt)) return false;
  if (!Array.isArray(meta.tags)) return false;
  if (!meta.tags.every((tag) => isNonEmptyString(tag))) return false;
  if (typeof meta.published !== "boolean") return false;
  return true;
}

function fileNameFromPath(path) {
  const parts = path.split("/");
  return parts[parts.length - 1] || "";
}

/**
 * Returns published blog posts, newest first.
 * Skips templates, drafts, and malformed files without throwing.
 */
export function getPublishedPosts() {
  const posts = [];

  for (const [path, module] of Object.entries(modules)) {
    try {
      const fileName = fileNameFromPath(path);
      if (fileName.startsWith("_")) continue;

      const meta = module?.meta;
      if (!isValidMeta(meta)) continue;
      if (meta.published !== true) continue;
      if (typeof module.default !== "function") continue;

      posts.push({
        ...meta,
        Content: module.default,
      });
    } catch {
      // Ignore one bad file so the rest of the site still loads.
    }
  }

  return posts.sort((a, b) => {
    if (a.date === b.date) return a.title.localeCompare(b.title);
    return a.date < b.date ? 1 : -1;
  });
}

export function getPostBySlug(slug) {
  if (!isNonEmptyString(slug)) return null;
  return getPublishedPosts().find((post) => post.slug === slug) || null;
}

export function getBlogHash(slug) {
  return `#blog/${slug}`;
}

export function parseBlogHash(hash) {
  const value = String(hash || "").replace(/^#/, "");

  if (value === "blog") {
    return { view: "list" };
  }

  if (value.startsWith("blog/")) {
    const slug = value.slice("blog/".length).trim();
    if (!slug) return { view: "list" };
    return { view: "post", slug };
  }

  return null;
}

export const SITE_TITLE =
  "Shawn Preval | Solutions Consulting, Client Strategy & Marketing Technology";
