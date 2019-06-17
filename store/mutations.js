export default {
  fixerRates(state, content) {
    state.home.fixerRates = content;
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
