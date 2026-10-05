# Yongxiang Lei — academic website

A complete static website prepared for **https://www.yongxianglei.com/** and
the existing **YongxiangLei/yongxianglei.github.io** repository.

The package includes the original portrait, responsive research portfolio,
searchable and filterable publications, a downloadable CV and BibTeX citations,
academic profile links, and domain-specific search and sharing metadata.
No npm installation, build step, server, API key, or paid hosting is required.

## Preview locally

From this extracted folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/. Stop the server with Ctrl+C.

## Recommended deployment: publish from the repository branch

1. Extract the ZIP. Upload **the contents of this folder**, rather than the
   enclosing folder, to the root of
   https://github.com/YongxiangLei/yongxianglei.github.io on `main`.
   Replace the existing `index.html` with this version. Include `assets/`,
   `styles.css`, `app.js`, `CNAME`, `.nojekyll`, `robots.txt`, and `sitemap.xml`.
   Keep the existing `Figs/`, `Files/`, and `LICENSE` so old links remain available.
   `.nojekyll` is a hidden empty file: make sure it is included. If your file
   picker hides it, create an empty file named `.nojekyll` in the repository.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**,
   select **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
   This site uses plain HTML, CSS, and JavaScript; `.nojekyll` bypasses Jekyll.
3. Set **Custom domain** to `www.yongxianglei.com` and Save. The included root
   `CNAME` file contains exactly that domain.
4. Check the DNS record below. After GitHub confirms the domain and provisions
   its certificate, enable **Enforce HTTPS** in Settings → Pages.
5. Wait for the Pages deployment to finish, then visit
   https://www.yongxianglei.com/.

Committing these files to a branch that already publishes Pages can immediately
replace the live homepage. The package itself has not changed your public site.

### Domain record

At the DNS provider for `yongxianglei.com`, the `www` record should be:

| Type | Name / host | Value / target |
| --- | --- | --- |
| CNAME | www | yongxianglei.github.io |

The target is the GitHub Pages hostname, with no `https://` prefix, repository
path, or trailing slash. If the existing record already has this value, retain
it. Avoid conflicting A, AAAA, or other CNAME records for the same `www` host.
The repository's `CNAME` file declares the custom domain; it does not configure
DNS at your registrar. DNS and certificate changes may take time to propagate.

### Optional: publish with GitHub Actions instead

Use this route only if you prefer a workflow to branch publishing:

1. Copy `deployment/deploy-pages.yml` to
   `.github/workflows/deploy-pages.yml` in the repository.
2. Select **GitHub Actions** as the source in **Settings → Pages**.
3. Keep **Custom domain** set to `www.yongxianglei.com` in Settings → Pages.
   GitHub Actions deployment does not use `CNAME` to set this option.
4. Commit the workflow and site files to `main`, or run the workflow manually
   from **Actions → Deploy academic website to GitHub Pages → Run workflow**.

The workflow stages only the website and any existing `Figs/` and `Files/`
directories. It deploys on pushes to `main` and supports manual runs. The
workflow supplied in `deployment/` is an inactive template until copied to
`.github/workflows/`.

## Editing the website

- `index.html`: biography, research, publications, education, service, and links.
- `styles.css`: visual style and responsive layout.
- `app.js`: research themes, publication filtering and search, mobile menu,
  and email copying.
- `assets/yongxiang-lei.jpg`: original portrait.
- `assets/Yongxiang_Lei_CV_2026.pdf`: supplied CV, unchanged.
- `assets/selected-publications.bib`: selected citations.
- `assets/favicon.svg`: favicon.
- `CNAME`, `robots.txt`, `sitemap.xml`, and the metadata in `index.html`: domain
  configuration; update all together if changing domains.

The website uses your current SIMTech role; the supplied CV remains the original
document. Update the CV asset when a revised document is available.

## Check after deployment

Open the homepage on desktop and mobile, try the topic filters and publication
search, open a paper link, download the CV and citations, and test the navigation.
Confirm the address uses HTTPS and the intended custom domain. If a stale page
appears, inspect the latest deployment and refresh the browser cache.

To roll back, revert the website commit in GitHub and let Pages redeploy.

## Official deployment documentation

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically
