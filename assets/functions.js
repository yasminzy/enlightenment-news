function urlize(input) {
  return input
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^-a-z0-9A-Z_]/g, "");
}

export { urlize };
