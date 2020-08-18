function union(s1, s2) {
  const s3 = new Set(s1);
  for (let x of s2) {
    s3.add(x);
  }
  return s3;
}
