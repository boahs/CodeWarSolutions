function usdcny(usd) {
  const conversion = usd * 6.75;
  const fixed = conversion.toFixed(2);
  return `${fixed} Chinese Yuan`;
}
