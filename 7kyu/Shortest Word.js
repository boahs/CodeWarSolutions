function findShort(s) {
  const arr = s.split(" ");
  const smallestWord = Math.min(...arr.map(({ length }) => length));
  return smallestWord;
}
