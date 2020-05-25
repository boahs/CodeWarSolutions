function getLength(arr){
    let b = arr.length;
    return b;
  }
  function getFirst(arr){
  return arr[0];
  }
  function getLast(arr){
    return arr[arr.length-1];
  }
  function pushElement(arr){
    let el=1;
    arr.push(`${el}`);
    return arr;
  }
  function popElement(arr){
    arr.pop();
    return arr;
  }