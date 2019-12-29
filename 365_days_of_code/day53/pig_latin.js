//Darius Rain
//Algorithm: Pig Latin
//12/17/2019
/*
Translate the provided string to piglatin, if a word begins with a vowel add 'way' to end of word other wise  
*/
function translatePigLatin(str){
    let pigLatin = '',
    findAll = str.replace(/[a|e|i|o|u]/g, '*'),
    targetedVowel = findAll.indexOf('*');

    if(findAll.indexOf('*') > 0){
        let targetedVowel = findAll.indexOf('*');
    pigLatin = `${str.slice(targetedVowel)}${str.slice(0, targetedVowel)}ay`
    }else if (targetedVowel === -1){
            pigLatin = `${str}ay`
    }else{
        pigLatin = `${str}way`
    }
return pigLatin.toLowerCase()

    
}
console.log(translatePigLatin("rythm"))

