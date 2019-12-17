//Name: Darius Rain
//Date: 12/12/19
//Day: 46
//Goal: Solve two algorithms 1: (Sum all numbers in a range.) 2:(Compare two arrays and return a new array with the differences)

function sumAll(arr){
function sortProper(a, b){
    return a - b
}
   arr.sort(sortProper)
   let startNum = arr[0]
    let endNum = arr[1]
           let result = 0
    for(let i = startNum; i <= endNum; ++i){

        
        result += i
    
    }
     return `Sum of range between ${arr[0]} & ${arr[1]} = ${result}`   
    
}
console.log('==================================================================')
console.log('Algorithm 1 (Sum all numbers in a range.)')
console.log(sumAll([10,5]))
console.log('\n==================================================================')
function diffArray(arr1, arr2){
    let newArr = [];
 
   console.log(`Array 1: ${arr1}`)
   console.log(`Array 2: ${arr2}`)
    for(let i=0; i < arr1.length; i++){
     
 
       
if(arr2.indexOf(arr1[i]) != -1){
     arr2.splice(arr2.indexOf(arr1[i]), 1)
     arr1.splice(arr1.indexOf(arr1[i]), 1)
     }  
    }   
    
    newArr = arr1.concat(arr2)
    return `Filtered differences: ${newArr}`
    

}
console.log('Algorithm 2 (Compare two arrays and return a new array with the differences))')

console.log(diffArray(['John',3,6,8,7,'Clark'], ['John','Louis',2,6,9,12]))

console.log('\n')
console.log('Change function parameters in code to test algorithm!')
console.log('==================================================================')

