function destroyer(){
console.log(arguments.length)
let array,
i = 0,
targetNumbers = [],
newArray = [];
while(i < arguments.length) {

if (i === 0){
array = arguments[0]
}else{
targetNumbers = targetNumbers.concat(arguments[i])
}
i++
}
console.log('Main Array:',array)
console.log('Target Numbers:',targetNumbers)
for(let i=0; i < array.length; i++){

if(!targetNumbers.toString().includes(array[i])){
 newArray = newArray.concat(array[i])

 }

}
console.log('New Main Array',newArray)
}
destroyer([1,2,4,6,7,2,3,4,72, 4],7,2,4)