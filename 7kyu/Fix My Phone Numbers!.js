function isItANum(str) {
let regex = /[0-9]/g
let a = str.replace(/[a-zA-Z]/g, '');
let b = a.match(regex).join('');
 if (b.startsWith(0) && b.length === 11){
     return b;
     }else{
       return 'Not a phone number'
     }
}
