import { GUARDIAN_API_KEY, FOREX_API_KEY } from "~/assets/keys";

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

export default {
  async getForexQuotes({ commit, dispatch, state }, list) {
    await dispatch("getHomeTopRatedContent");

    const response = await this.$axios.$get(getForexQuotesUrl(list));
    const content = response;
    commit("forexQuotes", content);
  },

  async getHomeTopRatedContent({ commit, state }) {
    const response = await this.$axios.$get(getHomeTopRatedContentUrl());
    const content = response.response.results;
    commit("homeTopRated", content);
  },

  async getHomeContent({ commit, state }, arg) {
    const response = await this.$axios.$get(
      getHomeContentUrl(arg.section, arg.size)
    );
    const data = {
      content: response.response.results,
      section: arg.section
    };
    commit("home", data);
  },

  async getSectionContent({ commit, dispatch, state }, section) {
    await dispatch("getSectionTags", section);

    const response = await this.$axios.$get(getSectionContentUrl(section));
    const data = {
      content: response.response.results,
      section
    };
    commit("content", data);
  },

  async getSectionTags({ commit, state }, section) {
    const response = await this.$axios.$get(getSectionTagsUrl(section));
    const data = {
      content: response.response.results,
      section
    };
    commit("tags", data);
  },

  async getSearchResults({ commit, state }, query) {
    const response = await this.$axios.$get(getSearchResultsUrl(query));
    const content = response.response.results;
    commit("searchResults", content);
  }
};
