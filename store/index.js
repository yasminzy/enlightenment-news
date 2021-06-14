import {
  getHomeContentUrl,
  getHomeTopRatedContentUrl,
  getSearchResultsUrl,
  getSectionContentUrl,
  getSectionTagsUrl
} from "@/assets/js/functions";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};

export const state = () => ({
  home: {
    business: [],
    fashion: [],
    film: [],
    food: [],
    games: [],
    music: [],
    science: [],
    technology: [],
    topRated: []
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

export const getters = {
  home: state => {
    return state.home;
  },
  content: state => {
    const route = state.route.path.replace("/", "");
    return state.content[route];
  },
  tags: state => {
    const route = state.route.path.replace("/", "");
    return state.tags[route];
  },
  searchQuery: state => {
    return state.search.query;
  },
  searchResults: state => {
    return state.search.results;
  }
};

export const mutations = {
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

export const actions = {
  async getHomeContent({ commit }, arg) {
    const response = await this.$axios.$get(
      getHomeContentUrl(arg.section, arg.size),
      config
    );
    const data = {
      content: response.response.results,
      section: arg.section
    };
    commit("home", data);
  },

  async getHomeTopRatedContent({ commit }) {
    const response = await this.$axios.$get(
      getHomeTopRatedContentUrl(),
      config
    );
    const content = response.response.results;
    commit("homeTopRated", content);
  },

  async getSearchResults({ commit }, query) {
    const response = await this.$axios.$get(getSearchResultsUrl(query), config);
    const content = response.response.results;
    commit("searchResults", content);
  },

  async getSectionContent({ commit, dispatch }, section) {
    await dispatch("getSectionTags", section);

    const response = await this.$axios.$get(
      getSectionContentUrl(section),
      config
    );
    const data = {
      content: response.response.results,
      section
    };
    commit("content", data);
  },

  async getSectionTags({ commit }, section) {
    const response = await this.$axios.$get(getSectionTagsUrl(section), config);
    const data = {
      content: response.response.results,
      section
    };
    commit("tags", data);
  }
};
