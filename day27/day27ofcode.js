//Darius Rain
//Date: 11-21-19
//Day: 27
//Misson: Create a javascript program that counts all occurences of certain keywords.

var runProgram = function(){
    const fs = require('fs');
    let text = fs.readFileSync('addhere.txt', 'utf8'),
//console.log(text)
textArr = text.replace(/[\n|\r|\)|\(]/g, " ").replace(/[,|.|"|'|!|#|@|$|%|^|*|&|\{|\}|+|=|-|_|\[|\]]/g, "").replace(/[\s]/gm, " ").replace(/[\/]/g, " ").trim().split(' '),
    
//console.log(textArr);
        main = {
        words: [],

        results: [],
        charCalc: 0,
        wordQty: '',
        toolBox: {
            runSort: function(){
             for(let i=0; i < textArr.length; i++){
                    main.toolBox.addWordObjs(textArr[i])
                    }
                main.toolBox.display()    
                main.wordQty = main.words.length;
                },
                checkMatches: function(string){
                 let count = 0;
                 for(let i=0; i < main.words.length; i++){
                    if(main.words[i].word === string){
                    count += 1;
                    main.words[i].torf = false;   
                    }
                   }
                 main.results = main.results.concat(`([Word]: ${string} ~ [Number of occurances]: ${count})`)
                 count = 0;
                 },
            runScan: function(){
            
            for(let i = 0; i < main.words.length; i++){
                if(main.words[i].torf === true){
                main.toolBox.checkMatches(main.words[i].word)   
               }
              }
               main.toolBox.displayResult();
            },
            
            displayResult: function(){
            for(let i = 0; i < main.results.length; i++){
                console.log(main.results[i])
            }
            },
            display: function() {
            console.log('(WORDS EXCTRACTED):')
            
            for(let i = 0; i < main.words.length; i++){
            main.charCalc += parseInt(main.words[i].charQty);
            //console.log('')
            //console.log(`| Word: '${main.words[i].word}' ~ Word Length: '${main.words[i].charQty}' ~ Word Number: '${i + 1}' |`);
            //console.log('')
            //console.log(`=====================================================================================================`)
            
            }
            console.log(`*****************************************************************************************************`)
            console.log(`| Amount words total: ${main.words.length} ~ Total charachters: ${main.charCalc} |`)
            console.log(`*****************************************************************************************************`)
            },
            addWordObjs: function(word) {
               let tempWordObj = {
                word: `${word}`,
                charQty: `${word.length}`,
                torf: true
               }
               
               main.words = main.words.concat(tempWordObj)
            }
        }
    }
main.toolBox.runSort();
console.log(`(SCANNING...)`)
console.log(`_`)
console.log(`__`)
console.log(`___`)
console.log(`____`)
console.log(`_____`)
console.log(`______`)
console.log(`_______`)
console.log(`________`)
console.log(`_________`)
console.log(`__________`)
console.log(`___________`)
console.log(`____________`)
console.log(`_____________`)
console.log(`______________`)
console.log(`_______________`)
console.log(`________________`)
console.log(`_________________`)
console.log(`__________________`)
console.log(`___________________`)
console.log(`____________________`)
console.log(`_____________________`)
console.log(`______________________`)
console.log(`_______________________`)
console.log(`________________________`)
console.log(`_________________________`)
console.log(`=========================`)
console.log(`(SCAN RESULTS):`)
main.toolBox.runScan();
}
runProgram();

