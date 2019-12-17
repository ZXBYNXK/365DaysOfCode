//Darius Rain
//Day 25: Create a algorithm that solves phone number validation.
//Date: 11-20-19

var readline = require('readline');
var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
})

var askNumber = function() {
console.log(`=========================================================================================================================`)
console.log(`Begining number cannot include: '-' and must have no perentheses.                                    Made By: Darius Rain`)
console.log(`=========================================================================================================================`)
rl.question(`What is phone number?    `, function(input){
		
			console.log(`Checking ${input}...`);
			telephoneCheck(input);
	})
}

var telephoneCheck = function(str) {

if(str.includes(')') && !str.includes('(') || str.includes(')') || str[0] == '-' || str[str.length - 1] == ')') {
console.log(`Begining number cannot include: '-' and must have no perentheses`)
console.log(`=========================================================================================================================`)
askNumber()
return false
}

str = str.split('')

let finalNum = '', 
numbers = '0123456789',
numbersArr = numbers.split(''),
perenthesesCount = 0;

for(let i=0; i < str.length; i++){
	if(str[i] == '(' || str[i] == ')') {
	perenthesesCount++
	
	}else if(perenthesesCount > 2) {
		console.log(`Phone number is not valid, exceeds to many parentheses!`)
		console.log(`=========================================================================================================================`)
		askNumber()
		return false
		
	}

	for(let j=0; j < numbers.length; j++){
			if(str[i].includes(numbers[j])){
			finalNum += str[i];
	}
 }
}
console.log(`Your number: ${finalNum}`)
if(finalNum.length == 11 && finalNum[0] == 1) {
	console.log(`Valid Phone Number, number size: ${finalNum.length} | Phone #: ${finalNum}`)
	console.log(`=========================================================================================================================`)
	askNumber()
	return true;
}else if(finalNum.length == 10){
	console.log(`Valid Phone Number, number size: ${finalNum.length} | Phone #: ${finalNum} `)
	console.log(`=========================================================================================================================`)
	askNumber()
	return true;
}else {
console.log(`Phone number is not valid, numbers must be 10 or 11 in size! number size: ${finalNum.length}| Phone #: ${finalNum}`)
console.log(`=========================================================================================================================`)
askNumber();
return false
}
//askNumber();
}
askNumber();
//telephoneCheck("14123334321");






