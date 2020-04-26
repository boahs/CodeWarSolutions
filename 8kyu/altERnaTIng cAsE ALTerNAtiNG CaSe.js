String.prototype.toAlternatingCase = function() {
  return this.replace(
    /[a-z]/gi,
    char => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
  )
}

// Function Export
module.exports = String.prototype.toAlternatingCase




// let toAlternatingCase = function (x) {
//  let chars = x.toLowerCase().split('');
//  for (var i = 0; i < chars.length; i += 2) {
//  chars[i] = chars[i].toUpperCase();
//}
//return chars.join('');
//};

//let text = 'hello world';
//console.log(toAlternatingCase(text));
//another way above