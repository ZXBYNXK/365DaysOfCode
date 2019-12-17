//Darius Rain
//Date: 12/10/19
//Day: 45
//Misson: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


let runProgram = (array, size) => {
    let result = [];
    
        for(let i=0; i < (Math.round(array.length / size)); i++){
                result.push([])
        
        }
       
        for(let i=0, j=1, k=0; i < array.length; i++, ++j){
              if(j <= size){
                if(!result[k] === undefined){
              result[k].push(array[i])
              }else {
                console.log('Breakup number is not possible')
              }
              
              }else {
                console.log('reset')
                i -= 1
                j = 0
                k += 1
              
              }         
            

        }

console.log(result)
}

runProgram([0, 1, 2, 3, 4, 5], 5)
