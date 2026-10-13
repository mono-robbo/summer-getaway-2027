# The January Escape

A mobile-friendly NSW getaway guide for three Summer Hill families with children aged 6–13.

**Public source repository:** https://github.com/mono-robbo/summer-getaway-2027

The complete website is in `docs/`. **Live guide:** https://summer-getaway-2027.mono-pools.workers.dev/

Dates: 4–6 January 2027 (two nights), or 8–11 January 2027 (three nights).
Seven destinations, 35 illustrated activity highlights, accommodation links, expandable indicative budgets, filters, favourites and sharing.

## Publishing

This is a static website. No build step, package installation or application server is needed. Cloudflare Workers Static Assets hosts the contents of `docs/` on the default `workers.dev` address, with no custom-domain routing. To deploy an update, use `npx wrangler deploy` from this repository after pushing changes to GitHub.

GitHub Pages is disabled for this repository to avoid inheriting the account user-site custom domain.

To preview locally, serve `docs/` with any static file server, for example `python3 -m http.server 8000 --directory docs`.

## Images and planning assumptions

Photos retain their individual Wikimedia Commons licences and attribution. Credits appear in the website and in `docs/assets/credits.json` and `docs/assets/activity-photo-credits.json`. Representative and archival photos are labelled.

Accommodation ranges are estimates; January 2027 availability, prices and activities are not confirmed. Favourites are saved on each person's device; shared links can carry selected destinations and dates.
