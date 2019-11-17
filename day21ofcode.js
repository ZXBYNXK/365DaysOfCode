//Darius Rain
//Day 21
//Date: 11-16-19
//Task: Reverse input from readline.
var runProgram = function(){  
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

})


var askReverse = function(){
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("@@The@@@@@@@@@@@@@@@@@@@@@")
console.log("@@@@@Reverser@@@@@@@@@@@@@")
console.log("@Made By Darius Rain@@@@@@")
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log(`Reverse Your Text:`)

	rl.question(``, function(input){
	
		reverseString(input)
	
	
	
	
	})


}





var reverseString = function(str) {
  
 var original = [str]
 var reversed = ''

 var downIndex = original[0].length - 1;
 
 function formulaForReverse() {
 
 reversed += `${original[0][downIndex]}`;
 downIndex = downIndex - 1;
 
 } 
  
 //console.log(original)
 
 while(downIndex > -1) {
 
 	formulaForReverse();
 
 
 }
 
 
 //reversed = original[0][downIndex]
 console.log(`_________________________________________________`)
console.log(`-----------------------Result---------------------|`)
console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|`)
console.log(`~${reversed}~`)
console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|`)
console.log(`--------------------------------------------------|`)
console.log(`__________________________________________________|`)
askReverse();
}
askReverse();
}


runProgram()

