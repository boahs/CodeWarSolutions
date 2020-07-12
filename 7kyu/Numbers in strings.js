function solve(s) {
  let number = s.match(/\d+/g);
  return Math.max(...number);
}
