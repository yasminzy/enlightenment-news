import {
  getForexQuotesUrl,
  getHomeTopRatedContentUrl,
  getHomeContentUrl,
  getSectionContentUrl,
  getSectionTagsUrl,
  getSearchResultsUrl
} from "~/assets/functions";

export default {
  async getForexQuotes({ commit, dispatch }, list) {
    await dispatch("getHomeTopRatedContent");

    const response = await this.$axios.$get(getForexQuotesUrl(list));
    const content = response;
    commit("forexQuotes", content);
  },

  async getHomeTopRatedContent({ commit }) {
    const response = await this.$axios.$get(getHomeTopRatedContentUrl());
    const content = response.response.results;
    commit("homeTopRated", content);
  },

  async getHomeContent({ commit }, arg) {
    const response = await this.$axios.$get(
      getHomeContentUrl(arg.section, arg.size)
    );
    const data = {
      content: response.response.results,
      section: arg.section
    };
    commit("home", data);
  },

  async getSectionContent({ commit, dispatch }, section) {
    await dispatch("getSectionTags", section);

    const response = await this.$axios.$get(getSectionContentUrl(section));
    const data = {
      content: response.response.results,
      section
    };
    commit("content", data);
  },

  async getSectionTags({ commit }, section) {
    const response = await this.$axios.$get(getSectionTagsUrl(section));
    const data = {
      content: response.response.results,
      section
    };
    commit("tags", data);
  },

  async getSearchResults({ commit }, query) {
    const response = await this.$axios.$get(getSearchResultsUrl(query));
    const content = response.response.results;
    commit("searchResults", content);
  }
};
