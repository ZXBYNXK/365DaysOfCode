//Darius Rain
//Day 71: Flatten nested arrays, (Turn a multidimensional array into a single array)

//This will not work for nested objects as the value, will add that to this later on.




const multiArray = [
    ['String'],
   
    [
        [true, false],
        [
            [1,'String', 4],['5']
        ],
        ['7', 'String', false]
    ],
    [
        ['False', '', true, NaN],['String', 2, 8],[0]
    ],
    10,
    'String',
    true
]

toOneArray = (arr) => {
    let result = []
    arr = arr.toString()
    arr = arr.split(',')
    for(let index = 0; index < arr.length; index++) {
        let value = arr[index],
        tmp_val = value + 0;      
         switch(value){
            
            case 'true': 
            result.push(true)
            break;
            
            case 'false':
            result.push(false)
            break;

            case value === 'NaN':
            result.push(NaN)
            break;

            case ' ' || '':
                break;
        
       default:
            if( isNaN(parseInt(tmp_val))){
                result.push(value)
            }else if(!isNaN(parseInt(tmp_val))){
                result.push(parseInt(value))
            }
            break;
         

        }
    }
    return result
}

console.log(toOneArray(multiArray))