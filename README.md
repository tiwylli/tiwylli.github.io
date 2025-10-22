```markdown
- 👋 Hi, I’m Wylliam
- 👀 I’m interested in finance, the great outdoors and anime
- 🌱 I’m currently learning about Computer Vision and Graphics applied to 3D Reconstruction
- 💞️ I’m interning at Kyushu University in the CV&G Lab
- 📫 You can reach me via email : wylliam.cantin.charawi@gmail.com

<!---
tiwylli/tiwylli is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
- 🌱 I’m currently learning HTML5
- - 💞️ I’m looking to collaborate on building eCommerce website
--->

```

## Portfolio (GitHub Pages)

The `portfolio/` folder contains a Next.js + HeroUI app. To publish it on GitHub Pages as the site served from this repository (instead of the root `index.html`), export it as static files and copy them into the repo `docs/` folder:

```bash
cd portfolio
npm install
npm run export:docs
git add ../docs && git commit -m "Add exported portfolio for GitHub Pages" && git push
```

After pushing, go to your repository Settings -> Pages and set the source to "main branch" and the folder to `/docs`.

If you'd prefer an automated deploy, consider using a GitHub Actions workflow or the `gh-pages` package to publish to the `gh-pages` branch instead.
