const readline = require('readline');
const fs = require('fs');
var rl = readline.createInterface({

	input: process.stdin,
	output: process.stout,



});

var logo = fs.readFileSync('blackstar_ascii_logo.txt', 'utf8')


var agentNames = []
var agentAccounts = []; 
var backupAccounts = []; 

var date = Date.now();



var login = function() {
console.log(`Agent Name --full name.`)
rl.question(``, function(name) {
console.log(``)
console.log(`Password --passphrase`)
rl.question(``, function(password) {
console.log(``)
console.log(`Military Id --your given MID.`)
rl.question(``, function(id){
console.log(``)
console.log(`Checking ${name} , ${id}, ${password}...`)
	
	for(let i =0; i < backupAccounts.length; i++){
			
		if(backupAccounts[i].includes(name)){
					if(backupAccounts[i].includes(id)){
						if(backupAccounts[i].includes(password)){
					console.log(``)
					console.log(``)
					console.log(``)
					console.log(`Succesfully logged in user: ${name}    No Such Agency Black Star Communications Network    Client:${id}     Date:${date}`)
					console.log(logo)
					
			    console.log(agentNames);
			    console.log(`Head Back to landing Screen('home')?  Check Messages('messages') Search & Contact Agent('search')`)
			    rl.question(``, function(choice) {
			    		switch(choice) {
			    		case "home":
			    			theEval();
			    			break;
			        
			        case "messages": 
			        	//messages()
			    			theEval();
			    			break;
			    		case "search":
			    		//searchThis();
			    		theEval();
			    		break;
			    		
			    		default:
			    		theEval();
			    		break;
			    		
			    		
			    		
			    		
			    		}
			    
			    
			    
			    
			    
			    })
			    
			    }
			    
			    }
			    
			    }
		}
	
	


});
});
});



}
var agentRegister = function() {
console.log(``)
console.log(`Agent Name?`)
rl.question(``, function(name) {
console.log(``)
console.log(`Agent Name Confirmation>`)
rl.question(``, function(name2) {
console.log(``)
console.log(`password?`)
rl.question(``, function(password) {
console.log(``)
console.log(`password confimation`)
rl.question(``, function(password2) {
		if(name == name2 && password == password2){
			let tempArr = [`AGENT (NAME/PASSWORD):~${name} ${password}<---`]
			let tempArr2 = [`${name}`]
			agentAccounts = agentAccounts.concat(tempArr);
			agentNames = agentNames.concat(tempArr2);
			console.log(`AGENT NAME CONFFIRMED!`)
			console.log(``)
			console.log(`Military Id?`)
			rl.question(``, function(id) {
			console.log(`Military Id Confimation`)
		  rl.question(``, function(id2) {
		  	if(id == id2){
					let tempArr = [`---MILITARY ID#:~${id}.`];
					let tempArr2 = [`([MILITARY~NAME/ID#/Password]:~${name} ${id} ${password})`]
					agentAccounts = agentAccounts.concat(tempArr)	
					backupAccounts = backupAccounts.concat(tempArr2)		
					console.log(agentAccounts)
					console.log(backupAccounts)
					theEval();					
					}	else {
						console.log(`There has been an error in confirmation please try again.`)
						agentAccounts = agentAccounts.pop();
						//theEval();
						agentRegister();
					}
		  	
		  	
		  	
		  	});
		  	});
		
		}else {
			console.log(`Sorry not matching Try again`)
			agentRegister();
			//theEval();
		
		}



});
});
});
});
}













 





var theEval = function () {
	console.log(logo)
	console.log(`\n\n`)
	console.log(`(TO REGISTER A NEW ACCOUNT FOR A NEW AGENT..... Type : 'new'),  (To Continue To Blackstar Login....     Type: 'log')`)
	rl.question(``, function(input) {
			switch(input) {
			case 'new': 
					agentRegister();
					break;
			case 'log': 
					login();
					break;
		 default: 
		 	theEval();
		 }
	});
}


theEval();



//agentRegister();

 
