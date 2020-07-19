function randomCase(x) {
  return x
    .split("")
    .map((y) => (Math.round(Math.random()) ? y.toUpperCase() : y.toLowerCase()))
    .join("");
}
