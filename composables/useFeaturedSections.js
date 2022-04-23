export function useFeaturedSections() {
  return useState("featuredSections", () => [
    "business",
    "environment",
    "food",
    "money",
    "science",
    "technology",
    "travel",
    "world"
  ])
}
