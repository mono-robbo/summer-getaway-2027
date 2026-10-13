# The January Escape

A mobile-friendly NSW getaway guide for three Summer Hill families with children aged 6–13.

**Public source repository:** https://github.com/mono-robbo/summer-getaway-2027

The complete website is in `docs/`. **Live guide:** https://summer-getaway-2027.pages.dev/

Dates: 4–6 January 2027 (two nights), or 8–11 January 2027 (three nights).
Seven destinations, 35 activity highlights with illustrated guides, accommodation links, expandable indicative budgets, filters, favourites and sharing.

## Publishing

This is a static website. No build step, package installation or application server is needed. Cloudflare Pages hosts the contents of `docs/` at `summer-getaway-2027.pages.dev`. To deploy an update after pushing changes to GitHub, run `npx wrangler pages deploy docs --project-name summer-getaway-2027` with an authenticated Cloudflare Pages connection. You can also upload the contents of `docs/` through the Cloudflare Pages dashboard.

The previous Workers address redirects to this Pages address.

GitHub Pages is disabled for this repository to avoid inheriting the account user-site custom domain.

To preview locally, serve `docs/` with any static file server, for example `python3 -m http.server 8000 --directory docs`.

## Images and planning assumptions

Wikimedia Commons photos retain their individual licences and attribution. The Jamberoo section embeds two images from the park’s current official galleries, credits the park, and links to each source; no Creative Commons licence is claimed for those images. Credits appear in the website and in `docs/assets/credits.json` and `docs/assets/activity-photo-credits.json`. Representative and archival photos are labelled.

Accommodation ranges are estimates; January 2027 availability, prices and activities are not confirmed. Favourites are saved on each person's device; shared links can carry selected destinations and dates.
