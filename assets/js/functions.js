// API docs
// http://open-platform.theguardian.com/documentation/tag
// https://exchangeratesapi.io/

export function getHomeContentUrl(section, size) {
  return `https://content.guardianapis.com/search?section=${section}&page-size=${size}&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`;
}

export function getHomeTopRatedContentUrl() {
  return `https://content.guardianapis.com/search?star-rating=5&page-size=5&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`;
}

export function getLatestExchangeRateUrl(options) {
  return `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?${options}`;
}

export function getSearchResultsUrl(query) {
  return `https://content.guardianapis.com/search?q=${query}&page-size=20&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`;
}

export function getSectionContentUrl(section) {
  return `https://content.guardianapis.com/search?section=${section}&page-size=20&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`;
}

export function getSectionTagsUrl(section) {
  return `https://content.guardianapis.com/tags?section=${section}&page-size=5&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`;
}

export function toKebabCase(str) {
  return typeof str === "string"
    ? str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join("-")
    : str;
}
