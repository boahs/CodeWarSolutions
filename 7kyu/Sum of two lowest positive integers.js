function sumTwoSmallestNumbers(numbers) {
  const number = numbers.sort((a, b) => a - b);
  return number[0] + number[1];
}
