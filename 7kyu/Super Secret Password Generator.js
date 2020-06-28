//These are your super secret characters you will use to make the password super secure
var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
 return password.replace(/[aA]/g, '@').replace(/[sS]/g, '$').replace(/[oO]/g, '0').replace(/[hH]/g,'5').replace(/[xX]/g,'*');
}