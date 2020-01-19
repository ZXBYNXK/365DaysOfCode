//Darius Rain
//Day 84: Chaining Ternary Operators 
/*
(condition ? ifTrue : ifFalse)
*/


function approachBouncer(age) {

return age >= 18 && age < 21 ? console.log(`Bouncer: You are ${age} but, you cant get in to the JavaScript Club haft to be 21 or over. Maybe the JavaScript Café?`) : 
age < 18 ? console.log(`Bouncer: You are ${age}!? where are your parents!?`) :
age >= 21 && age < 110 ? console.log('Welecome to the JavaScript Club code responsibly!' ) : 
console.log(`Bouncer: What are you an Alien or Vampire there is no such age as "${age}"`)
}

//Too young
console.log('When value of "age" is under 18:')
approachBouncer(16)


console.log('\n')


console.log('When value of "age" is 18 or over but under 21:')
//Cant get in but has alternative
approachBouncer(19)

console.log('\n')

console.log('When value of "age" over 21 and under 110:')

//Can get in
approachBouncer(33)


console.log('\n')

console.log('When value of "age" is over 110 or another data value:')
//Alien or Vampire
approachBouncer('Anything but a number')