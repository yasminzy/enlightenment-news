// API docs
// https://1forge.com/forex-data-api/api-documentation#quotes
// http://open-platform.theguardian.com/documentation/search
// http://open-platform.theguardian.com/documentation/tag

import { GUARDIAN_API_KEY, FOREX_API_KEY } from "~/assets/keys";

function urlize(input) {
  return input
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^-a-z0-9A-Z_]/g, "");
}

function getForexQuotesUrl(list) {
  return `https://forex.1forge.com/1.0.3/quotes?pairs=${list}&api_key=${FOREX_API_KEY}`;
}

function getHomeTopRatedContentUrl(section, size) {
  return `https://content.guardianapis.com/search?star-rating=5&page-size=5&api-key=${GUARDIAN_API_KEY}`;
}

function getHomeContentUrl(section, size) {
  return `https://content.guardianapis.com/search?section=${section}&page-size=${size}&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${GUARDIAN_API_KEY}`;
}

function getSectionContentUrl(section) {
  return `https://content.guardianapis.com/search?section=${section}&page-size=20&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${GUARDIAN_API_KEY}`;
}

function getSectionTagsUrl(section) {
  return `https://content.guardianapis.com/tags?section=${section}&page-size=5&api-key=${GUARDIAN_API_KEY}`;
}

function getSearchResultsUrl(query) {
  return `https://content.guardianapis.com/search?q=${query}&page-size=20&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${GUARDIAN_API_KEY}`;
}

export {
  urlize,
  getForexQuotesUrl,
  getHomeTopRatedContentUrl,
  getHomeContentUrl,
  getSectionContentUrl,
  getSectionTagsUrl,
  getSearchResultsUrl
};
