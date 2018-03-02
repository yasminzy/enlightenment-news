export default {
  home(state) {
    return state.home;
  },
  content(state) {
    let route = state.route.path.replace("/", "");
    return state.content[route];
  },
  tags(state) {
    let route = state.route.path.replace("/", "");
    return state.tags[route];
  },
  searchQuery(state) {
    return state.search.query;
  },
  searchResults(state) {
    return state.search.results;
  }
};
