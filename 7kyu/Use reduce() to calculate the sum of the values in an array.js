function sum(array) {
  const addAll = (addAll, array) => addAll + array;
  return array.reduce(addAll);
}
