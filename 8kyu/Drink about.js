function peopleWithAgeDrink(old) {
    if (old < 14) return 'drink toddy';
    if (old < 18 && old >= 14) return 'drink coke';
    if (old < 21 && old >= 18) return 'drink beer';
    if (old >= 21) return 'drink whisky';
  };