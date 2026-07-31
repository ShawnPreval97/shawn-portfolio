# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Blog posts

The site has a personal **Blog** that is separate from **Published Work & Conversations** (external Keypoint Intelligence / WhatTheyThink / Emerson features).

Blog posts live in `src/content/blog/` as MDX files. Start from `_template.mdx`.

### Create a post

1. Duplicate `src/content/blog/_template.mdx`.
2. Rename the file to match the slug, for example `my-post.mdx`.
3. Fill in `meta`: `title`, `slug`, `date` (`YYYY-MM-DD`), `excerpt`, `tags`, and keep `published: false` while drafting.
4. Write or paste the article body below the metadata export.
5. Set `published: true` when ready to show the post on the site.
6. Preview with `npm run dev`, then open `#blog` (and `#blog/your-slug` for the full post).
7. Run `npm run build` before committing.
8. Commit and deploy through the existing Vercel workflow.

### Edit a post

Open the corresponding `.mdx` file in `src/content/blog/`, update metadata or body, then rebuild.

### Unpublish a post

Set `published: false` in that file’s `meta` (or delete the file), run `npm run build`, and deploy. Drafts and `_template.mdx` never appear on the live site.
