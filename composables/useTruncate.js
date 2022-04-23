export function useTruncate(string, maxLength) {
  return string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string
}
