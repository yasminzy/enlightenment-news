import {
  getLatestExchangeRateUrl,
  getHomeTopRatedContentUrl,
  getHomeContentUrl,
  getSectionContentUrl,
  getSectionTagsUrl,
  getSearchResultsUrl
} from "@/assets/functions";

export const state = () => ({
  home: {
    exchangeRates: [],
    topRated: [],
    business: [],
    fashion: [],
    film: [],
    food: [],
    games: [],
    music: [],
    science: [],
    technology: []
  },
  content: {
    business: [],
    fashion: [],
    film: [],
    food: [],
    games: [],
    music: [],
    science: [],
    technology: [],
    world: []
  },
  tags: {
    business: [],
    fashion: [],
    film: [],
    food: [],
    games: [],
    music: [],
    science: [],
    technology: [],
    world: []
  },
  search: {
    query: "",
    results: []
  }
});

export const actions = {
  async getLatestExchangeRate({ commit, dispatch }, options) {
    await dispatch("getHomeTopRatedContent");

    const response = await this.$axios.$get(getLatestExchangeRateUrl(options));
    const content = {
      base: response.base,
      rates: Object.entries(response.rates)
    };
    commit("exchangeRates", content);
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

export const mutations = {
  exchangeRates(state, content) {
    state.home.exchangeRates = content;
  },
  homeTopRated(state, content) {
    state.home.topRated = content;
  },
  home(state, payload) {
    state.home[payload.section] = payload.content;
  },
  content(state, payload) {
    state.content[payload.section] = payload.content;
  },
  tags(state, payload) {
    state.tags[payload.section] = payload.content;
  },
  updateQuery(state, newQuery) {
    state.search.query = newQuery;
  },
  searchResults(state, results) {
    state.search.results = results;
  }
};

export const getters = {
  home(state) {
    return state.home;
  },
  content(state) {
    const route = state.route.path.replace("/", "");
    return state.content[route];
  },
  tags(state) {
    const route = state.route.path.replace("/", "");
    return state.tags[route];
  },
  searchQuery(state) {
    return state.search.query;
  },
  searchResults(state) {
    return state.search.results;
  }
};
