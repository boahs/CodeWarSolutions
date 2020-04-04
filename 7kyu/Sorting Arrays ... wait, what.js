// Fix the sort() method for arrays here.

Array.prototype.sort = function () {
const arr = this.slice();
for (let i = 0; i < arr.length; i++){
for (let k = 0; k < arr.length; k++){
if (arr[k] > arr[k + 1]){
let temp = arr[k + 1];
arr[k + 1] = arr[k]
arr[k] = temp;
}
}
}

return arr;
}