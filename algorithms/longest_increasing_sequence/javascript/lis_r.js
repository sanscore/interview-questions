//recursive solution
var lis_r = function(x) {
  var longest = [];
  var arr = [];
  var ret = [ x[0] ];
  
  if(x.length===0) { return []; }
  
  for(var i = 1; i < x.length; i++) {
    if(x[0]<x[i]){
      arr = lis_r(x.slice(i));
      if(arr.length >= longest.length) {
        longest = arr;
      }
    }
  }
  
  var ret = ret.concat(longest);
  return ret;
}

console.log(lis_r([1,2,3,4,5]));
console.log(lis_r([5,4,3,2,1]));
console.log(lis_r([5, 25, 8, 18, 12, 16, 22, 4, 24]));
console.log(lis_r([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));
