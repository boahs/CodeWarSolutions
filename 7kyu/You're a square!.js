function isSquare(num){
  if(Math.sqrt(num) === NaN || Math.sqrt(num) % 1 !==0){
    return false;
  }
  return true;
}