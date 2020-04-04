var str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function (string) {
  var removeSpaced = this.split(' ');// turns string into an array
  for (var i = 0; i< removeSpaced.length ; i++){
   // console.log(removeSpaced[i]);
    removeSpaced[i] = removeSpaced[i].charAt(0).toUpperCase() + removeSpaced[i].slice(1);
  }
  var jadenString = removeSpaced.join(' ');
  return jadenString;
};
str.toJadenCase();