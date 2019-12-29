// Darius Rain 													365 days of code:	day 10																			Review: Algorithms (Factorialzation); 			Date: 11/5/19
var readline = require('readline');

var rl = readline.createInterface({

			input: process.stdin,
			output: process.stdout



})

var numbersArray = [];
var factorialize = function () {
console.log(`What is the number you wish to factorialize?`)
rl.question(``, function(number){

	
	for(let i = 1; i <= number; i++){
		let temp = [i];
		numbersArray = numbersArray.concat(temp)
		console.log(`Data recieved for index ${i} = ${numbersArray}`);
		
			
	}
	for(let i = 0; i < numbersArray.length; i++){
		
		var result;
		if(i == 0){
			result = parseInt(numbersArray[i])
		}else {
			result *= parseInt(numbersArray[i])
		}
	}
	console.log(`Result = ${result}`);
	console.log('Thanks For Using My Program!');
	rl.close();
	})
}
factorialize();




