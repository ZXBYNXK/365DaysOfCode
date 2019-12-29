//Name: Darius Rain
//Date: 11/27/19
//Day: 33
//Misson: Take a .txt file and extract wanted data. Use a for loop and for any circumstance a value is under a specific index number then dont capture data otherwise capture data./*
/*
1). Complete a second version of the prior felicias fruit program created recently and solve it with a different approach.
>>>>>

 2). My plan: Use map and set methods to solve this.
>>>>>

                                                            [Sources]

~map():

    ["The map method creates a NEW ARRAY with the results of calling a provided function on every element."~developer.mozilla.org]

    ["The map does not execute the function for array elements without any values | This method does not change the original 
    array."~w3schools.com]
    
    Notes:
        
        Syntax: array.map(function(currentValue, index, arr), thisValue), thisValue)
             function: (Required!)

            'currentValue': (Required!) - The value of the current element.

            'index': (Optional) - The array index of the current element.

            'arr': (Optional): The array element the current object belongs to.

            'thisValue': (Optional) - A value to be passed to the function to be used as its "this" value if the parameter is     
            empty, if so then the value will be 'undefined'.
>>>>>

~set():

    ["The set methods adds or updates an element with a specified key and value to a MAP object" ~developer.mozilla.org]
    
    ["Scince the set method returns back the same MAP object you can chain the method call."]
    
    ["See also: 'Map()', 'Map.prototype.get()', 'Map.prototype.has()' "]





        Syntax: myMap.set(key, value);
        
            'key': The element     
    
>>>>>  


*/

const feliciaGlobal = {
feliciasInventory: [],
runFelicasFruitShop: function(){
        const readline = require('readline'),
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        }),
        fs = require('fs'),
        feliciasMethods = {
            sortFruitsPricesConigFile: function(){
              let fruitsAndPricesData = fs.readFileSync('./.items_prices_config.txt', 'utf8'),
              change1 = fruitsAndPricesData.replace(/[\~|\!|\@|\#|$|\%|^|\&|*|\(|\)|_|\-|+|\,|?|\/|\\|]/gm, '').replace(/[\s]/g, " ").split(" "),
              itemsList = [],
              capture = [],
              
              indexNumOfStart = 0,
              indexNumOfEnd = 0,
              findSeperators = function() {
                  change1.forEach(item => {
                      if(item.includes("START")){
                        indexNumOfStart = change1.indexOf(item);
                      } else if(item.includes("END")){
                          indexNumOfEnd = change1.indexOf(item)
                      }
                  })
                  console.log(indexNumOfStart);
                  console.log(indexNumOfEnd)
                  console.log(change1[indexNumOfStart])
                  console.log(change1[indexNumOfEnd])
              },
              runSort = function (){
              findSeperators()
              for(let i = 0, i2 = 0; i < change1.length; i++){
                

                 if(i > indexNumOfStart && i < indexNumOfEnd)
                 {
                     
                    if(i2 % 2 === 0) {
                    
                        capture[i2] = change1[i]
                        //console.log(i2, change1[i])
                    }else{
                         capture[i2] = parseFloat(change1[i])
                        //console.log(i2, change1[i])
                    }
                    i2++
                    //console.log(capture)
                 }
                

              //console.log(change1)
             // console.log(speratorStart)
            }
            for(let i = 0; i < capture.length; i+=2){
                let tmpObj = {
                    fruit: capture[i],
                    price: capture[i + 1],
                    revenue: 0,
                    qtySold: 0
                }
                itemsList.push(tmpObj)
                //console.log(tmpObj)
            }
        }
            //console.log(capture)
        runSort()
       /*
        itemsList.forEach((item) => {
            console.log(item)
        })
        */
        }
        }
        
        
        
        //let fruitsAndPrices = feliciaGlobal.feliciasInventory.map(function(item){
        //return `${item.fruit} - $${item.price}`
        //})
    
    
        feliciasMethods.sortFruitsPricesConigFile()

    //console.log(fruitsAndPrices)
},


}
feliciaGlobal.runFelicasFruitShop();


























