export default {
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
