//Darius Rain
//Day 64
//Use recursion to create a range of numbers

rangeOfNumbers = (startNum, endNum) => {
 if (endNum - startNum === 0) { 
 return [startNum]; 
 } 
else { 
const numbers = rangeOfNumbers(startNum, endNum - 1); 
numbers.push(endNum); 
return numbers; 
} 
}

console.log(rangeOfNumbers(10,50))