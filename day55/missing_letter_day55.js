// Name: Darius Rain
// Day: 55
/* Algorithm problem: Find the missing letter in the passed letter range and return it.
*/


function find_letter(str){
str = str.toLowerCase()
let alpha = 'abcdefghijklmnopqrstuvwxyz'
str = str.split('')
str.sort()
alpha = alpha.split('')

let new_alpha = alpha.slice(alpha.indexOf(str[0]), alpha.indexOf(str[str.length - 1]) + 1)
//console.log(new_alpha)


for(let i = 0; i < new_alpha.length; i++){
//console.log(alpha[i])
if(str.indexOf(new_alpha[i]) === -1){
  return new_alpha[i]
  
}


}









}


console.log(find_letter('xz'))



