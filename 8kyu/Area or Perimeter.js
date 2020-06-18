const areaOrPerimeter = function(l , w) {
    if (l === w){
    return Math.PI * l * w / Math.PI
   }else{
   return  2 * ( l + w )
   }
  };