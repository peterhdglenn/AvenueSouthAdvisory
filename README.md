# Avenue South Advisory

Static consulting site for Avenue South Advisory. The site is intentionally self-contained: plain HTML, CSS, JavaScript, and local favicon assets only.

## View locally

From the repo root, run a simple static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. The site deploys automatically on push to `main` via GitHub's built-in Pages deployment workflow (GitHub Actions).
3. GitHub Pages serves the root of the repository and publishes the static site without changing the app runtime.

The repo includes a root-level `.nojekyll` file so GitHub Pages serves the static files directly without Jekyll processing.

## Included assets

- `index.html` - site content and structure
- `styles.css` - site styling
- `script.js` - contact form behavior
- `favicon.svg`, `favicon-32.svg`, `favicon-16.svg` - local favicon set