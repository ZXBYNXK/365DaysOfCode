//New try 3
const fs = require('fs'),
readline = require('readline'),
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomChar(length) { 
var result = ''; 
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '; 
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
  result.sort((a,b)=>{ return a-b}) // <--- This solved alot of issues

  return result
 }

function encrypt() {
console.log('Write message here, or paste:')
rl.question(``, message => {
let input = message,
crypto = '',
keys = createIndexes(input);
for(let i=0, j = 0; i < input.length * 26; i++){

    if(i === keys[j]){
        crypto += `${input[j]}`
    ++j
    }else{
            crypto += randomChar(1)    
            
}
} 
submitFile(`./encrypted_message.txt`, crypto)
submitFile(`./decryption_key.txt`, keys)

console.log('Encryption complete! | Files have been renewed: "encrypted_message.txt", "decryption_key.txt".')
console.log('               NOTE: Previous data stored in those two files has been replaced..              ')
read_line_program()
})
}
function submitFile(where, text) {
fs.writeFile(where, text, function(err){
if(err){
return console.log(err)
}
})
}
function decrypt(){
console.log('Copy & paste message to decrypt:')
rl.question(``, message => {
console.log('Copy & paste key for message:')
rl.question(``, key => {
key = key.split(',')
let decrytion_based_on_key = '';
for(let i=0, j=0; i < message.length; i++){
   
    if(i == key[j]){
       
        decrytion_based_on_key += `${message[i]}`   
       j+=1
    }

}

read_line_program(decrytion_based_on_key)
})
})
}




function read_line_program(memo) {
if(memo === undefined){memo = 'None.'}
console.log('|==========================================================================|')
console.log('|                          Encrypt a message                               |')
console.log('|==========================================================================|')
console.log('|                           [Read README.md]                               |')
console.log('|==========================================================================|')
console.log('|                       1. Encrypt New Message                             |')
console.log('|                       2. Decrypt Message                                 |')
console.log('|                       3. Exit                                            |')
console.log('|==========================================================================|')
console.log('|                                                                          |')
console.log('|   Summary:                                                               |')
console.log('|    For option "1": It encrypts your message and stores two ".txt" files, |')
console.log('|in the current directory of this program.                                 |')
console.log('|        first file: "decryption_key.txt"                                  |')  
console.log('|        second file: "encrypted_message.txt"                              |')
console.log('|                                                                          |')
console.log('|    For option "2": Copy and paste the text from the above text files.    |')
console.log('|__________________________________________________________________________|')
console.log('|                                                                          |')
console.log('|  Made By: Darius Rain.                                                   |')
console.log('|__________________________________________________________________________|')
console.log(` Current Message Decryption: ${memo}`) 
 rl.question(``, option => {       
     option = parseInt(option)
     switch(option){
           
          case 1:
           encrypt();
           break;

          case 2:
           decrypt()
           break;

          case 3:
            rl.close();
            break;

          default:
            read_line_program()
           break;
        
        }
})
}

read_line_program()














