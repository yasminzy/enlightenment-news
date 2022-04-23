import { acceptHMRUpdate, defineStore } from "pinia"

export const useStore = defineStore("home", {
  state: () => ({
    featured: [],
    topRated: []
  }),

  actions: {
    async getHomeContent({ section, size, key }) {
      const response = await $fetch(
        `https://content.guardianapis.com/search?section=${section}&page-size=${size}&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${key}`
      )
      this.featured.push(response.response.results[0])
    },

    async getHomeTopRatedContent(key) {
      const response = await $fetch(
        `https://content.guardianapis.com/search?star-rating=5&page-size=6&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${key}`
      )
      this.topRated = response.response.results
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
