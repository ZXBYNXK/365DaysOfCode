// Darius Rain
// Day 19
// Misson: Create a program that searches objects for a particular string;

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var documents = [];

var sendDocument = function(object) {
		documents.push(object)
}
var addDocument = function() {
rl.question(`What is the title of this document?  `, function(title) {
	rl.question(`What is this document about?  `, function(about) {
		console.log(`Title: ${title}`)
		console.log(`About: ${about}`)
		console.log(`=================================================================================================================================`)
		console.log(`Message:`)
		rl.question(``, function(message) {
		let obj = {
				heading: title,
				info: about,
				msg: message
		}		
		sendDocument(obj)
		menu();
		//console.log(documents[0].heading)		
		
})
})	
})
}
var collectKeyWord = function() {
console.log(`Search:`)
rl.question(``, function(input){
		searchDocument(input)		
	})
}
var listDocuments = function() {
console.log(`Available Documents On Record:`)
for(let i=0; i < documents.length; i++){
	console.log(documents[i].heading);
	
}
console.log(`||`)
console.log(`||`)
console.log(`||`)
menu()
}
var searchDocument = function(keyword) {

for(let i=0; i < documents.length; i++){
		if(documents[i].heading.includes(keyword) || documents[i].info.includes(keyword) || documents[i].msg.includes(keyword)){
		console.log(`${i} Keyword(s) Found!`)	
				console.log(`=============================================================================================`)
				console.log(`Title: ${documents[i].heading}`)
				console.log(`About: ${documents[i].info}`)
				console.log(`Document #: ${i}`)
				console.log(`_____________________________________________________________________________________________`)
				console.log(documents[i].msg)	
				console.log(`_____________________________________________________________________________________________`)
console.log(`||`)
console.log(`||`)
console.log(`||`)				
} else {
console.log(`${i} Keywords is not in '${documents[i].heading}'..... `)
}
}
menu();

}


var menu = function() {

console.log(`||`)
console.log(`||`)
console.log(`||`)	
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
console.log(`				Document Creator`)
console.log(`				1: Add a document`)
console.log(`				2: Search For Documents Containing Key Word`)
console.log(`				3: List documents`)
console.log(`				4: Exit`)
rl.question(``, function(input){

switch(parseInt(input)){
	case 1:
	addDocument()
	break;
	
	case 2: 
	collectKeyWord();
	break;
	
	case 3:
	listDocuments();
	break;
	
	case 4:
	rl.close();
	break;
	
	default:
	menu();
	break;
}
})
}
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
menu();
//addDocument();
