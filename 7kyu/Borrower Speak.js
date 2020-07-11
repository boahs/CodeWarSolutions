function borrow(s) {
  let regEx = /[.,\/#?!$%\^&\*;:{}=\-_`~()\s]/g;
  let strip = s.replace(regEx, "");
  return strip.toLowerCase();
}
