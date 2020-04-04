const arrayMadness = (a, b) =>
  a.reduce((total, number) => total + number ** 2, 0) >
  b.reduce((total, number) => total + number ** 3, 0)