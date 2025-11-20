# WORK IN PROGRESS DONT JUDGE YET XD 



## Portfolio (GitHub Pages)

The `portfolio/` folder contains a Next.js + HeroUI app that is automatically deployed to GitHub Pages.

### Automatic Deployment

This repository uses GitHub Actions to automatically build and deploy the portfolio app:

- **Workflow**: `.github/workflows/nextjs.yml`
- **Trigger**: Automatically runs on every push to the `main` branch
- **Deployment**: Uses GitHub Pages official deployment action

### Setup Instructions

1. **Enable GitHub Pages** in your repository settings:

   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch**: The workflow will automatically build and deploy your app

3. **Access your site**: Your portfolio will be available at `https://tiwylli.github.io/`

### Local Development

To run the portfolio app locally:

```bash
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` to see your app.

### Manual Build

To manually build and export the static site:

```bash
cd portfolio
npm install
npm run export
```

The static files will be generated in `portfolio/out/`.
