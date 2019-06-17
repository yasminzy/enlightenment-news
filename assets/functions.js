// API docs
// https://exchangeratesapi.io/
// http://open-platform.theguardian.com/documentation/search
// http://open-platform.theguardian.com/documentation/tag

function urlize(input) {
  return input
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^-a-z0-9A-Z_]/g, "");
}

function getLatestExchangeRateUrl(options) {
  return `https://api.exchangeratesapi.io/latest?${options}`;
}

function getHomeTopRatedContentUrl() {
  return `https://content.guardianapis.com/search?star-rating=5&page-size=5&api-key=${process.env.VUE_APP_GUARDIAN_API_KEY}`;
}

function getHomeContentUrl(section, size) {
  return `https://content.guardianapis.com/search?section=${section}&page-size=${size}&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.VUE_APP_GUARDIAN_API_KEY}`;
}

function getSectionContentUrl(section) {
  return `https://content.guardianapis.com/search?section=${section}&page-size=20&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.VUE_APP_GUARDIAN_API_KEY}`;
}

function getSectionTagsUrl(section) {
  return `https://content.guardianapis.com/tags?section=${section}&page-size=5&api-key=${process.env.VUE_APP_GUARDIAN_API_KEY}`;
}

function getSearchResultsUrl(query) {
  return `https://content.guardianapis.com/search?q=${query}&page-size=20&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.VUE_APP_GUARDIAN_API_KEY}`;
}

export {
  urlize,
  getLatestExchangeRateUrl,
  getHomeTopRatedContentUrl,
  getHomeContentUrl,
  getSectionContentUrl,
  getSectionTagsUrl,
  getSearchResultsUrl
};
