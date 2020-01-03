//Darius Rain 
//Date: 1/2/2020
/*
        Use regex to return the index of the string matched with the 'string.match(regex)' syntax.
*/


//Declare varibale and assign it a string
let extractStr = "Extract the word 'coding' from this string.",
//Declare another variable with the regex value to be searched for '/i' for case insensitive.
codingRegex = /coding/i, 
//Now finally declare the final variable which will be assigned the 'match()' method's return value, after the method checks the 'extractStr' variable which contains the string
// to be searched and inside the parameters the regex value which is the variable name 'codingRegex' which is equal to '/coding/i'.
result = extractStr.match(codingRegex); 

console.log(result)