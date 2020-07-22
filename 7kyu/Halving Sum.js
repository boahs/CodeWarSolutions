function halvingSum(n) {
    if (n === 1){
      return 1
    }
   return n+halvingSum(Math.floor(n/2))
 }
 