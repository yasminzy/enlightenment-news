import { acceptHMRUpdate, defineStore } from "pinia"
import { useChangeCase } from "@vueuse/integrations/useChangeCase"

export const useStore = defineStore("search", {
  state: () => ({
    prevQuery: "",
    query: "",
    results: []
  }),

  getters: {
    paramCaseQuery: (state) => useChangeCase(state.query, "paramCase").value
  },

  actions: {
    async getSearchResults(key) {
      const response = await $fetch(
        `https://content.guardianapis.com/search?q=${this.paramCaseQuery}&page-size=18&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${key}`
      )
      this.results = response.response.results
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
