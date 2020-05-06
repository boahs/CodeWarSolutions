function createPhoneNumber(numbers){
    let number = numbers.join('');
    return '(' + number.slice(0,3) + ') ' + number.slice(3, 6) + '-' + number.slice(6,10);
    
  }