function powersOfTwo(n){
    let arr = [1];
    while (arr.length <= n){
    arr.push(arr[arr.length-1] * 2);
    }
    return arr;
  }