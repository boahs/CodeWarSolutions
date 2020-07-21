function search(budget, prices) {
  return prices
    .filter((z) => z <= budget)
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    .join(",");
}

// added compare function to .sort() to sort the larger numbers in array.
