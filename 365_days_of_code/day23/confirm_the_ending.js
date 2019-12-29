//Darius Rain
//Algorithms: Confirm The Ending
//Date: 11-18-19

//Misson:


function confirmEnding(str, target) {
let lastIndexNumber = str.length - 1;
if(str[lastIndexNumber] === target){

console.log(`True: ${str[lastIndexNumber]} = ${target}`)

}else {
console.log(`False: ${str[lastIndexNumber]} does not equal ${target}`)
}

}

confirmEnding("Bastian", "a");

