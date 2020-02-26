/**
 * Config
 */

const package = require(`${process.env.PWD}/package.json`);
const version = process.env.V || package.version;

/**
 * Config
 */

const site = {
  versions: {
    package: version
  },
  urls: {
    production: 'https://cityofnewyork.github.io/nyco-patterns-framework',
    cdn: '"https://cdn.jsdelivr.net/gh/CityOfNewYork/nyco-patterns-framework@v' + version + '/dist"'
  },
  prettier: {
    parser: 'html',
    printWidth: 2000,
    singleQuote: true,
    jsxBracketSameLine: true,
    htmlWhitespaceSensitivity: 'ignore'
  },
  whitelist: [
    'partials',
    'layouts',
    'section'
  ]
};

module.exports = site;
