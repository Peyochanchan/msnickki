require("babel-register")({
  presets: ["es2015", "react"]
});

require.extensions['.css'] = function () {
  return null;
};

const router = require('./index').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('http://www.msnickki.com')
        .save('./public/sitemap.xml')
);
