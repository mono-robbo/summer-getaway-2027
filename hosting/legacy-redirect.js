// Redirect the former Workers address while preserving paths and shared selections.
addEventListener('fetch', event => {
  const target = new URL(event.request.url);
  target.protocol = 'https:';
  target.host = 'summer-getaway-2027.pages.dev';
  event.respondWith(Response.redirect(target.href, 301));
});
