//Darius Rain 
//Day 87: Using a regexp value with the 'test()' method to know if something is in an array of strings.

const javascript_regex = /javascript/i;
const arr_of_strings = [];

function addStringToArray(string, array) {
if(typeof(string) == 'string' && Array.isArray(array)){
 array.push(string)
  return true
}else {
 console.log("Type error: Invalid paramaters for function: 'addStringToArray(string, array)'")
 return false

}

}


addStringToArray('C', arr_of_strings);

addStringToArray('C++', arr_of_strings);

addStringToArray('C#', arr_of_strings);

addStringToArray('R', arr_of_strings);

addStringToArray('Python', arr_of_strings);

addStringToArray('Ruby', arr_of_strings);

addStringToArray('Perl', arr_of_strings);

addStringToArray('Lisp', arr_of_strings);

addStringToArray('Java', arr_of_strings)

addStringToArray('Kotlin', arr_of_strings)

addStringToArray('Swift', arr_of_strings)

addStringToArray('Go', arr_of_strings)

console.log('Current Array after string insertion:\n', arr_of_strings) 
console.log('When the Javascript is not added regex test method returns:\n', javascript_regex.test(arr_of_strings.toString()))
console.log('\n\n')
addStringToArray('JavaScripT', arr_of_strings)
console.log('Array when javascript is added:', arr_of_strings)

console.log('When the Javascript is added regex test method returns:\n', javascript_regex.test(arr_of_strings.toString()))


console.log('Notice I capitalized the T at the end of the word javascript to test the case insensitve option I added to the regex syntax. ( ex: /javascript/i )')


