function diff(s1, s2) {
  const dif = new Set(s1);
  for (let elem of s2) {
    dif.delete(elem);
  }
  return dif;
}
