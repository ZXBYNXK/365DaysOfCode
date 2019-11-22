//Darius Rain
//Date: 11-21-19
//Day: 26
//Misson: Make a program that creates files of your choice, using readline and filesytem APIs. 
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
})

var askUser = function() {
	console.log(`************************************************************************************`)
	console.log('***************|Example:(fileName.js | FILENAME.EXSTENSION)|************************')
	console.log(`************************************************************************************`)
	console.log(`Write your file name here:`)
	rl.question(``, function(fileName) {
	console.log(`************************************************************************************`)
	console.log(`********|If '${fileName}' isn't what you wanted, then enter key:[q].|***************`)
	console.log(`************************************************************************************`)
	console.log(`Write to ${fileName}:`)
		rl.question(``, function(text){
		if(text === "q" || text === "Q"){
		console.log('***************************************************************************************************');
		console.log(`Exited Successfuly! | Stopped process 'CREATE:[${fileName}]'.`)
		console.log('***************************************************************************************************');
		console.log('')
		console.log('')
		mainMenu();
		}else{
		submitFile(fileName, text);
		}
		})
	})
}
var submitFile = function (where, text) {
fs.writeFile(where, text, function(err){
if(err){
return console.log(err)
}
console.log('***************************************************************************************************');
console.log(`File Added To Current Directory! | Name:${where}`);
console.log('***************************************************************************************************');
console.log('');
console.log('');
mainMenu();
	}) 
}
var mainMenu = function(){

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('[Main Menu]                                                                   Made By: Darius Rain')
console.log('                                        1: Create File?');
console.log('                                        2: Exit');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
rl.question(``, function(option){
	switch(parseInt(option)){
	case 1: 
		askUser();
		break;
	case 2:
		console.log(`THANK YOU FOR USING MY PROGRAM!!!`);
		rl.close();
		break;
	
	default:
		console.log('***************************');
		console.log(`Option: ${option} isn't a valid option.. try again.`);
		console.log('***************************');
		console.log('');
		console.log('');
	}
 })
}
mainMenu();
