function areEqual(s1, s2) {
  return s1.size === s2.size && [...s1].every((value) => s2.has(value));
}

function notEqual(s1, s2) {
  return s1.size === s2.size && [...s1].every((value) => s2.has(value))
    ? false
    : true;
}
