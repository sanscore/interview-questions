// see: http://en.wikipedia.org/wiki/Longest_increasing_subsequence

var lis = function(x) {
  var p = [], m = [], s = [];
  var lo, hi, mid;
  var l, new_l;
  var k;
  
  var n = x.length;
  p.length = n;
  m.length = (n + 1);
  
  l = 0;
  
  for (var i = 0; i < n; i++) {
    
    lo = 1;
    hi = l;
    while (lo <= hi) {
      mid = Math.floor((lo+hi)/2);
      if (x[m[mid]] < x[i]) { lo = mid + 1; }
      else { hi = mid - 1; }
    }
    
    new_l = lo;
    
    p[i] = m[new_l-1];
    
    if (new_l > l) {
      m[new_l] = i;
      l = new_l;
    } 
    else if (x[i] < x[m[new_l]]) {
      m[new_l] = i;
    } 
  }
  
  k = m[l];
  for(var i = l-1; i >= 0; i--) {
    s[i] = x[k];
    k = p[k];
  }

  return s;
}

console.log(lis([1,2,3,4,5]));
console.log(lis([5,4,3,2,1]));
console.log(lis([5, 25, 8, 18, 12, 16, 22, 4, 24]));
console.log(lis([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));
