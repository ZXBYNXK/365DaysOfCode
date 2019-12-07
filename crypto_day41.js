//New try 3

function takeInput(input){
    return input.toString();
}
function randomChar(length) { 
var result = ''; 
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
var charactersLength = characters.length; for ( var i = 0; i < length; i++ ) { 
result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
} return result; 
}
const createIndexes = (string) =>{
   let result = [];
   taken = '';
   string = string.split('')
    for(let i=0; i < string.length; i++){
        let value = Math.round(Math.random() * 100);
        if(taken.includes(`|${value}|`) === false){
      result.push(value)
      taken += `|${value}|`
        }else {
        i -= 1;
        }
    }
    
  return result.sort()
 }
function encrypt() {
let input = takeInput("String"),
keys = createIndexes(input);
let crypto = new Array(100)
  console.log(keys)
for(let i=0, j = 0; i < crypto.length; i++){

    if(i === keys[j]){
        crypto[i] = `{{{${input[j]}}}}`
    ++j
    }else{
            crypto[i] = randomChar(1)    
            
}
} 

console.log(crypto.toString())

}


encrypt();



















