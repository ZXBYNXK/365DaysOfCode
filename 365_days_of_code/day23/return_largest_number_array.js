// Darius Rain
// Algorithm: Find the largest number in array.
// Date: 11-18-19

//Step 1: Sit and think of a logical way to iterate through the array.
//My Plan.
//________________________________________________________________________________________________________________________________________________
		// 1). Set a variable then assign a function to it that takes two paramaters (one paramater for an array and the second the value of the index number of the source from where the array being passed in came from). The function takes any array and prints out the highest number also showing where it came from. (Line: 21)
		
		// 2). Set a variable inside the function and assign it to the first index value by default, to compare it to future values in order to see if replacement of the set value is needed. 
		
		// 3). Inside the function create a for loop that iterates through the paramaters given to it. 
		
		// 4). Inside the for loop create an if statement with a condition that compares the 'currentHighNumber' value with the current value of index i of the current array being iterated through. 
		
		// 5). If the condition from the if statement on line 22 is true, set the new value(The value of the current index in the for loop 'array[i]') to the 'currentHighNumber' variable which always holds the largest number at the moment untill the end. 
		
		// 6). After the for loop in the function 'checkArray' is done you want it to output the highest number and where it came from.
		
		//7). Finally make a for loop inside the 'largestOfFour' function and iterate through the paramater value from 'largestOfFour'. Then pass it into the 'checkArray' function each time it passes an array as the value.
//________________________________________________________________________________________________________________________________________________

function largestOfFour(arr) {

var checkArray = function(array, currentIndex) {
var currentHighNumber = array[0];
 
for(let i = 0; i < array.length; i++){
	if(array[i] > currentHighNumber) {
		currentHighNumber = array[i];
}

}
console.log(`First Dimensional Index: ${currentIndex} | Highest Number In That Index: ${currentHighNumber}`)
}
//  return arr;
for(let i=0; i < arr.length; i++){
	checkArray(arr[i], i)
}

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

