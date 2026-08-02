# RajatDhiman.com portfolio

A responsive, static portfolio site for an SAP Ariba integration and procurement technology professional. It has no build step: open `index.html` locally or deploy the four site files as-is.

## Before publishing

1. In `script.js`, replace `hello@rajatdhiman.com` with Rajat's professional email address. The enquiry form then opens the visitor's mail app with their details filled in.
2. Review the experience labels and wording against the source CV. The site intentionally does not display date of birth, family details, home address, phone number, or unverified project claims.
3. Optional: add a professional headshot or logo, a social link, and a real form provider if email-app-only enquiries are not suitable.

## Free hosting: GitHub Pages (recommended)

1. Create a GitHub account and a new **public** repository, for example `rajatdhiman-site`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to its top level and commit the changes.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. GitHub supplies a temporary address such as `https://username.github.io/rajatdhiman-site/`.
5. In **Settings → Pages → Custom domain**, enter `rajatdhiman.com`. GitHub will show the current DNS record requirements. Add exactly those records in the DNS panel where the domain is registered, then enable **Enforce HTTPS** when it becomes available.

## Free hosting: Cloudflare Pages (excellent DNS and HTTPS option)

1. Create free GitHub and Cloudflare accounts. Push these four files to a GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**. Select the repository.
3. Choose **No framework**, leave the build command blank, and set the output directory to `/` if prompted. Deploy.
4. Open the Pages project’s **Custom domains** tab and add `rajatdhiman.com` and `www.rajatdhiman.com`.
5. If the domain’s DNS is managed by Cloudflare, records and HTTPS are configured automatically. Otherwise, follow the exact DNS instructions displayed by Cloudflare.

## Domain notes

- Keep the domain registration active; hosting can be free but the domain itself normally has an annual renewal cost.
- Choose one canonical address (`https://rajatdhiman.com` is set in this site) and redirect `www` to it in the hosting provider’s domain settings.
- DNS changes can take from a few minutes up to 24–48 hours to settle globally.
