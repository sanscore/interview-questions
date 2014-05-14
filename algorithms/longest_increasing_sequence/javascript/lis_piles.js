// See: http://en.wikipedia.org/wiki/Patience_sorting

//WIP
//Create 'piles' from the array elements
//If an element is greater than the last element on a pile, then
//  create a copy of the pile and stick the new element on top.
//If an element cannot fit onto any existing pile, then create a new pile.
//
//This ends up taking more storage and time than the described problem, but
//  it does brute force the problem and allows us to return all of the piles
//  with the longest increasing sequence.
//
//End by sorting the piles by size, return only the longest piles.
var lis_piles = function(x) {
  var piles = [];
  
  for (var i = 0; i < x.length; i++) {
    var create_new = true;
    
    var n = piles.length
    for (var j = 0; j < n; j++){
      if(x[i] > piles[j][piles[j].length - 1]) {
        piles[piles.length] = piles[j].slice(0);
        piles[piles.length-1].push(x[i]);
        create_new = false;
       } 
    }
    
    if(create_new){ piles[piles.length] = [x[i]] }
  } 

  piles.sort(function(a,b) { return b.length - a.length });
 
  var longest_piles = [];
  var longest=piles[0].length;
  var k = 0;
  
  do {
    longest_piles[longest_piles.length] = piles[k];
    k++;
  } while(piles[k] && piles[k].length == longest);
  
  return longest_piles
} 

console.log(lis_piles([1,2,3,4,5]));
console.log(lis_piles([5,4,3,2,1]));
console.log(lis_piles([5, 25, 8, 18, 12, 16, 22, 4, 24]));
console.log(lis_piles([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));
