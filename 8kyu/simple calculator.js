function calculator(a,b,sign){
   try {
      return eval(`${a} ${sign} ${b}`)
      } catch (err) {
      return 'unknown value'
      }

}