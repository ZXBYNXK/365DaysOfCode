//Darius Rain
//Algorithms: Confirm The Ending | Readline
//Date: 11-19-19

//Misson:
var readline = require('readline')
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function confirmEnding() {
rl.question(`Write a sentence:`, function(str) {
console.log(`Sentence: ${str}`)
rl.question(`What is the last letter in sentence?`, function(target) {
let lastIndexNumber = str.length - 1;
if(str[lastIndexNumber] === target){

console.log(`True: ${str[lastIndexNumber]} = ${target}`)
confirmEnding();
}else {
console.log(`False: ${str[lastIndexNumber]} does not equal ${target}`)
confirmEnding();
}
})
})
}

confirmEnding();

