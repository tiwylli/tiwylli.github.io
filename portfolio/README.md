# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/heroui/next-app-template)

```markdown
# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

---

## Quick: Export for GitHub Pages

This project is configured for static export so you can host the portfolio on GitHub Pages.

Steps to build and publish to the repository `docs/` folder:

1. Install dependencies:

```bash
cd portfolio
npm install
```

2. Export and copy to repo `docs/`:

```bash
npm run export:docs
```

3. Commit and push the generated `docs/` folder to GitHub, then set Pages source to "main branch" -> `/docs`.

If your site will be served from a repo subpath (e.g. `https://username.github.io/repo/`) and assets 404, set `basePath` and `assetPrefix` in `next.config.js` to `'/repo'` and re-run the export.

---

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/next-app-template)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

## GitHub Actions automated deploy

This repository contains a workflow at `.github/workflows/deploy-portfolio.yml` that builds the `portfolio` app and publishes the generated `portfolio/out` folder to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

Behavior:
- Runs on push to `main`.
- Installs dependencies inside `portfolio/`, runs `npm run export` and publishes `portfolio/out` to the `gh-pages` branch.

After the workflow completes successfully, go to GitHub Settings -> Pages and set the Source to the `gh-pages` branch. Alternatively, if you prefer the `/docs` folder on `main`, modify the workflow to copy `portfolio/out` into `docs/` and commit instead of publishing to `gh-pages`.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).

```
