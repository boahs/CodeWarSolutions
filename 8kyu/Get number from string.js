function getNumberFromString(s) { 
    let noChars = s.replace(/[^0-9]/g,'');
    return parseInt(noChars,0);
  
  }