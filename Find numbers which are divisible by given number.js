const divisibleBy = (numbers, divisor) =>
       numbers.filter(num => num % divisor === 0)

module.exports = divisibleBy