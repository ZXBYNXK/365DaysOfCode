//Name: Darius Rain
//Date: 11-26-19
//Day: 31
//Misson: Use the array methods:('forEach()', 'filter()' and 'map()'), to iterate through an array of objects.
//Used: forEach, filter, map, objects, functions.

const runProgram = function() {
    
    const arrayOfObjects = [
    {
    personName: "Sherlock Holmes",
    personAge: 23
    },
    {
    personName: "Frank Abignale",
    personAge: 43
    },
    {
    personName: "Luke Skywalker",
    personAge: 67
    },
    {
    personName: "Tony Stark",
    personAge: 46
    },
     {
    personName: "Scooby DOOO",
    personAge: 77
    },
     {
    personName: "E.T. PhoneHome",
    personAge: 82,
    },
     {
    personName: "Tony Hawk",
    personAge: 44
    },
     {
    personName: "Mark Twain",
    personAge: 103
    },
     {
    personName: "Barney the purple Dinosaur",
    personAge: 55
    },
     {
    personName: "George Washington",
    personAge: 412
    },
     {
    personName: "Inspector Gadget",
    personAge: 42
    },
     {
    personName: "Ace Ventura",
    personAge: 31
    },
    ],

//forEach
runForEach = function(){
 console.log('')
 console.log(`--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --`) 
 console.log('')
console.log(`==========================================================================================`)
console.log(`                              Method: 'forEach()'`)
console.log(`==========================================================================================`)
console.log(`____________________________________________________________________________________________`)
arrayOfObjects.forEach((nameMeAnythingYouWantItDosentMatter) => {
    console.log(nameMeAnythingYouWantItDosentMatter.personName,nameMeAnythingYouWantItDosentMatter.personAge)
    return nameMeAnythingYouWantItDosentMatter.personName, nameMeAnythingYouWantItDosentMatter.personAge
})
console.log(`==========================================================================================`)
},
//filter
//Use it to filter out any age below 45, so the result should not have Tony Stark and Luke Skywalker in it. 
runFilter = function(){
const filteredResultsVariable = arrayOfObjects.filter((nameMeAnythingYouWantItDosentMatter) => {
    return nameMeAnythingYouWantItDosentMatter.personAge <= 45; 
    
})
 console.log('')
 console.log(`--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --`) 
 console.log('')
console.log(`==========================================================================================`)
console.log(`                              Method: 'filter()'`)
console.log(`==========================================================================================`)

filteredResultsVariable.forEach((param)=>{
console.log(param.personName, param.personAge)
})
//runForEach();
console.log(`__________________________________________________________________________________________`)
console.log(`'filteredResultsVariable' = all names with ages under '45'`)
console.log(`==========================================================================================`)
},
//map
//Use map to create a new array of objects based on a condition.
runMap = function(){
 const mappedResultsVariable = arrayOfObjects.map((nameMeAnythingYouWantItDosentMatter)=>{
        
        //console.log(nameMeAnythingYouWantItDosentMatter.personName, nameMeAnythingYouWantItDosentMatter.personAge)
        return nameMeAnythingYouWantItDosentMatter.personName
        
        
 })
 console.log('')
 console.log(`--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --`) 
 console.log('')
 console.log(`==========================================================================================`)
 console.log(`                             Method: 'map()'`)
 console.log(`==========================================================================================`)
 console.log("1). Typeof(mappedResultsvariable) = " + typeof(mappedResultsVariable), " | An array is an object.")
 console.log(`2). More Proof 'mappedResultsvariable' is an array: mappedResultsVariable[1] = ${mappedResultsVariable[1]} `)
 console.log(`3). More Proof 'mappedResultsvariable' is an array: mappedResultsVariable.length = ${mappedResultsVariable.length} `)
 console.log(`____________________________________________________________________________________________`)
 console.log(`'mappedResultsVariable' = ${mappedResultsVariable}`)
 console.log(`=============================================================================================`)
};
runMap()
runFilter()
runForEach();
}
runProgram();
