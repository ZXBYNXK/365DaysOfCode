//Darius Rain
//Date: 12/16/19
//Algorithm: Spinal Tap Case

/*
Convert a string to spinal case. EX: 'this-is-a-string-converted-a-string-to-spinal-case'
*/

function spinalCase(str){
    let caps = ['Q','W','E','R','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','B','M','N'];
    
    
  let newString = ''
        str = str.replace(/[' ' | _ |]/g, '-')
        for(let i=0; i < str.length; i++){
        if(caps.includes(str[i])) {
            if(str[i - 1] === '-' || i === 0){
            newString += `${str[i].toLowerCase()}`
            }else{
                newString += `-${str[i].toLowerCase()}`
            }
        }else {
            newString += str[i]
        }
        }
        console.log(newString)
    
}
console.log(spinalCase('Yoo bro wassup_with you and whereDidYouGO yesterday-if_youWant to chill then_hmu'))