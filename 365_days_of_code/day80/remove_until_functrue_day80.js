//Darius Rain
//Day 80: Algorithm - Drop it
/*

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until 
the function func returns true when the iterated element is passed through it.

*/

function dropElements(arr, func) {
    // Drop them elements.


    
    let count = arr.length;

  // drop them elements.
   
    for (var i = 0; i < count; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  
  }




  
  //console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))