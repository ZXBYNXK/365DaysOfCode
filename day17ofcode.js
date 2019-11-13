// Darius Rain 				Day: 17 				Date: 11-12-19

//Misson: Create methods to change the object property values.

var runProgram = function() {
var idValue = 0;
var idGenerate = function(){
	idValue += 1;

}
var mainObj = {
		people:[],
		changeName: function(personName, idNum, newPersonName){
		for(let i = 0; i < mainObj.people.length; i++){
		
			if(mainObj.people[i].person == personName && mainObj.people[i].id == idNum){
					mainObj.people[i].person = newPersonName
			}
			
		}
	
},
		deletePerson: function(personName, idNum){
		for(let i=0; i < mainObj.people.length; i++){
			if(mainObj.people[i].person == personName && mainObj.people[i].id == idNum){
				 mainObj.people.splice(i, 1); 
			}
		
			}
			
		},
		addPerson: function(name) {
			let tempObj = {}
			
			tempObj.person = name;
			idGenerate();
			tempObj.id = idValue;	
			mainObj.people = mainObj.people.concat(tempObj);	
		}
}
mainObj.addPerson('John');
mainObj.addPerson('Julie');
mainObj.addPerson('Jacob');
mainObj.addPerson('Jill');
mainObj.addPerson('Judy');
//console.log(`'mainOBJ.people' array equals: '${mainObj.people}'`)
console.log(`___________________________________________________________________________________________________________________________________`)
console.log(`After adding the names, using a created method called 'mainObj.addPerson('~Add~Name~Here~')' `);
console.log(mainObj.people)
console.log(`___________________________________________________________________________________________________________________________________`);
console.log(`Changed name John with Johnathon with the "mainObj.changeName('~Existing Name~', '~ID~', '~New Name~')"`)
mainObj.changeName('John', '1', 'Johnathon');
console.log(mainObj.people)
console.log(`____________________________________________________________________________________________________________________________________`);
console.log(`Deleted Julie with the "mainObj.deletePerson('~Existing Name~', '~ID~')"`);
mainObj.deletePerson('Julie', '2')
console.log(mainObj.people)
console.log(`_____________________________________________________________________________________________________________________________________`);





}
runProgram();

