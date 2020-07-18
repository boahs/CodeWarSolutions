function reverseLetter(str) {
  let unwanted = str.replace(/[^a-zA-Z]+/g, "");
  return unwanted.split("").reverse().join("");
}
