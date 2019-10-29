var readline = require('readline');

var rl = readline.createInterface({

	input: process.stdin,
	output: process.stdout




});





/* rl.question("what is the deal?", function(input){
keylogs.push(input)
console.log(`Hello ${input}`)
console.log(keylogs);
rl.close()
})
*/
var accounts = [];
var passwords = [];
var idNumbers = [];
var idNumberTemp = 0;



var idGenerator = function() {

idNumberTemp += 1;

	}
   




var accountForm = function () {
rl.question(`What is your name	                 `, function(name) {
	idGenerator();
	let tempArray = [`USERNAME:~${name}`, `ID#:~${idNumberTemp}`]	
	accounts = accounts.concat(tempArray)
	passwordValidator();
	

});

}

var passwordValidator = function() {
		rl.question(`Password for register	       `, function(ps1) {
		rl.question(`Password again for validation.	       `, function(ps2) {
		if(ps1 == ps2) {
				let tempArray = [`PASSWORD:~${ps1}`, `ID#:~${idNumberTemp}`]
				passwords = passwords.concat(tempArray);
			
					console.log("");
						console.log(`____________________________________ACCOUNTS ARRAY__________________________________________________`)
						console.log("")
				console.log(accounts);
						console.log("")
			console.log(`____________________________________________________________________________________________________`)
						console.log("")
						console.log("")
						console.log("")
						console.log("")
						
						console.log(`____________________________________PASSWORDS ARRAY_________________________________________________`)
						console.log("");
				console.log(passwords);
						console.log("");
						console.log(`____________________________________________________________________________________________________`)
						theEval();						
				
		} else {
		console.log(`Sorry ${ps1} & ${ps2} Dont Match`)
		console.log(`_____________________________________________________________________________________________`)
		passwordValidator();
		}
		
});
});
}




var accountLogin = function () {
rl.question(`Username:  ` , function(username) {
		rl.question(`Password:  `, function(password) {
			
			for(let i = 0; i < accounts.length; i++){
				for(let j = 0; j < passwords.length; j++) {
				if(accounts[i].includes(username) && passwords[j].includes(password)){
					if(accounts[i + 1] == passwords[j + 1]) {
					
					  console.log(`You have successfully logged in ACCOUNT ${accounts[i + 1]} == PASSWORD ${passwords[j + 1]}`)
						rl.close();
					} 
					else{
					console.log(`You have unsuccessfully logged in ACCOUNT ${accounts[i + 1]} != PASSWORD ${j + 1}`)
					accountLogin();
					 }
			
			} else {
			
			console.log(`You have unsuccessfully logged in (ACCOUNT ${username}) and or (PASSWORD ${password}) is invalid!`)
				accountLogin();
			}
			}
			
			}
			

	});		
});


}
			






var theEval = function () {

	rl.question(`Would you like to sign up ('y'), otherwise login('n')? ANSWER WITH:(y or n)     `, function(input) {
			if(input == 'y') {
				accountForm();
			
			}else if(input == 'n') {
			
			accountLogin();
			
			}else{
			rl.close();
			}
	});
}


theEval();




