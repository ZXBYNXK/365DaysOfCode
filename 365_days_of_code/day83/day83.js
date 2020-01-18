//Darius Rain
//Day 83: Using the 'filter()' higher order function with my own function that includes two paramaters. The first paramater takes the key name 
    //'key name' which is the key for example 'name' or 'content'

const originalArray = [
    {name: 'John', content:'Hello Satrun'},
    {name: 'Louis', content:'Hello Earth'},
    {name: 'Joe', content:'Hello Jupiter'},
    {name: 'Loui', content:'Hello Mars'}
]
function lookFor(keyName, theKeyValue){

let findOne = originalArray.filter(dataValues => dataValues[keyName].includes(theKeyValue))

return findOne

}


// Search for a key that equals 'content' with a string value that includes 'Earth'


console.log('Results for the keys = "content" and value includes "Earth":')
console.log(lookFor('content', 'Earth'))

console.log('\n')

// Search for a key that equals 'name' with a string value that includes 'John'

console.log('Results for the keys = "name" and value includes "John" included:')

console.log(lookFor('name', 'John'))




