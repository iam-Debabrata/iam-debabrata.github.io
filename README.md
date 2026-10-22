# DP / Obsidian — Personal Portfolio

**Author:** Debabrata Panda (DP) · © 2026.  
**Theme:** Obsidian Black / Chrome Glow · lightweight, responsive, accessible.

A complete **static portfolio** built with original HTML, CSS and vanilla JavaScript. No frameworks, packages, API keys, paid hosting, or build steps.

## Launch locally

1. Extract this ZIP and open **`index.html`** in Chrome/Edge/Firefox.
2. Or from this folder run `python -m http.server 8000` and open `http://localhost:8000/`.
3. Click project filters and project summaries; test mobile navigation and the résumé download.

## Publish at your FREE GitHub Pages URL

GitHub username: **`iam-Debabrata`**. To get a personal root URL, use a repository named **`iam-debabrata.github.io`** (lowercase; GitHub username matching is case-insensitive).

1. Visit https://github.com/new and create a **PUBLIC** repository with name **`iam-debabrata.github.io`**. Leave it empty (do not add a README).
2. Upload the *contents* of this extracted portfolio folder (including `index.html`, `styles.css`, `script.js`, `assets/`, and `.nojekyll` if Git preserves it). Do **not** upload the ZIP file itself. Browser upload can skip empty hidden files harmlessly.
3. Commit files to the `main` branch. On the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, branch **`main`**, folder **`/(root)`**, and **Save**.
5. Once GitHub reports deployment complete, visit **https://iam-debabrata.github.io/**. This URL is a *planned address*, **not live until you publish**.

**Alternative (Git):** `git init && git add . && git commit -m "Launch Obsidian portfolio" && git branch -M main && git remote add origin https://github.com/iam-Debabrata/iam-debabrata.github.io.git && git push -u origin main` (authenticate with GitHub). Then enable Pages as above.

**If the repo already exists:** don't overwrite blindly; merge/update it carefully.

## Domain terminology

`iam-debabrata.github.io` is a *free GitHub Pages subdomain*. GitHub does not give you ownership of a separate vanity domain like `debabrata.dev`. You can connect a domain you already own later in **Settings → Pages → Custom domain**, with DNS at its registrar. Verify domain ownership before DNS configuration. A separate domain registration can cost money.

## Files

- `index.html` — all content, structured metadata, accessible markup
- `styles.css` — custom black/chrome visual theme, responsiveness, reduced-motion support
- `script.js` — interactive project filters, mobile menu, progress, reveals, email copy
- `assets/debabrata-portrait.webp` — optimized uploaded headshot (no AI facial edits)
- `assets/debabrata-portrait-mobile.webp` — smaller mobile portrait
- `assets/Debabrata_Panda_Public_Resume.pdf` — uploaded resume **with phone number redacted for public publishing**
- `assets/favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll`

## Source content & privacy

- Career, education, skill claims, and selected estimates were taken from the supplied résumé.
- Two research-project summaries were checked against the connected private GitHub repository READMEs (VERITY//LAB and TILT-Agents). The repositories remain private. This site does **not** reveal code, secrets, private URLs, private data, or copyrighted employer material.
- PMP fraud-detection summary is based on earlier project discussions, but the repository was **not accessible** for re-verification. No performance claim or public repository link is supplied.
- Public contact includes email and LinkedIn. The uploaded résumé contained a phone number; this deployable copy removes it. Replace the public PDF deliberately only if you want the phone shared with the world.
- Profile links are extracted from embedded PDF hyperlinks; verify your LinkedIn profile before publishing.
- `contact` uses a `mailto:` link, not a fake contact form or an email API.
- No trackers, analytics, cookies, external fonts, or CDNs.

## Update the site

Edit text in `index.html`. To change the accent, edit `--ice`, `--accent`, and `--soft` near the top of `styles.css`. To change GitHub account/domain, update links in `index.html`, `README.md`, `robots.txt`, and `sitemap.xml`. New project cards can reuse `<article class="project-card" data-category="ai">` or `data-category="software"`.

## Before public launch

- Verify career metrics, wording, project ownership/attribution, LinkedIn and email.
- Confirm you are comfortable publishing the professional portrait and résumé (without phone).
- Confirm the site title and user-site repository name have no conflicts.
- Do not publish confidential code or research data from private repositories.

**DP original portfolio code.** This does not imply ownership of third-party models, algorithms, university materials, or employer IP.
