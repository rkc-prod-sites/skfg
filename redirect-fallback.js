/*
 * Fallback redirects for old WordPress URLs (pre-2026 site).
 * Loaded only by 404.html. If the missing URL contains a known keyword,
 * the visitor is forwarded to the closest matching page on the new site.
 * Order matters: more specific keywords are listed before general ones.
 */
(function () {
  var path = window.location.pathname.toLowerCase();
  if (path === '/' || path.indexOf('404') !== -1) return;

  var rules = [
    ['mortgage-protection', 'insurance.html#mortgage-protection'],
    ['income-protection',   'insurance.html#income-protection'],
    ['trauma',              'insurance.html#trauma'],
    ['tpd',                 'insurance.html#tpd'],
    ['disability',          'insurance.html#tpd'],
    ['health',              'insurance.html#health'],
    ['life',                'insurance.html#life'],
    ['insurance',           'insurance.html'],
    ['first-home',          'mortgage.html#first-home-buyer'],
    ['refinanc',            'mortgage.html#refinance'],
    ['development',         'mortgage.html#development'],
    ['investment',          'mortgage.html#investment-property'],
    ['bridging',            'mortgage.html#bridging-finance'],
    ['low-deposit',         'mortgage.html#low-deposit'],
    ['commercial',          'mortgage.html#commercial-lending'],
    ['business',            'mortgage.html#business-lending'],
    ['construction',        'mortgage.html#loan-to-build'],
    ['build',               'mortgage.html#loan-to-build'],
    ['renovat',             'mortgage.html#renovation'],
    ['top-up',              'mortgage.html#top-up'],
    ['rates',               'mortgage.html#rates'],
    ['mortgage',            'mortgage.html'],
    ['broker',              'index.html'],
    ['contact',             'contact.html'],
    ['about',               'about.html'],
    ['disclosure',          'disclosure.html'],
    ['privacy',             'disclosure.html#privacy'],
    ['blog',                'blog.html']
  ];

  for (var i = 0; i < rules.length; i++) {
    if (path.indexOf(rules[i][0]) !== -1) {
      window.location.replace('/' + rules[i][1]);
      return;
    }
  }
})();
