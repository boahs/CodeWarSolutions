function highAndLow(numbers) {
  const toNum = numbers.split(" ").map(Number);
  const large = Math.max(...toNum);
  const low = Math.min(...toNum);
  return `${large} ${low}`;
}
