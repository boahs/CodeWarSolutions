const calculate = str =>
  String(
    str
      .split('plus')
      .join(' ')
      .split('minus')
      .join(' -')
      .split(' ')
      .reduce((total, num) => total + Number(num), 0)
  )