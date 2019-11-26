//Name: Darius Rain
//Date: 11-25-19
//Day: 30
//Misson: Create a second version of day28 that searches contents of files for a specific keyword instead of just listing the files.
//Used functions, readline, fs, arrays, objects, methods, for loops. 


const mainProgramV2 = function (){
    var currentDir = '';
    var filesArray = [];
    var matches = [];
    const fs = require('fs'),
    //imported = require('./day28ofcode_export'),
    readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }),
    
     myMethods = {
         listAllFileNames: function(){
         for(let i = 0; i < filesArray.length; i++){
            console.log(filesArray[i].fileName)
     
         }
         },
         listFileContentOf: function(searchFileName){
            for(let i = 0; i < filesArray.length; i++){
                if(filesArray[i].fileName.includes(searchFileName)){
                  let file = `${currentDir}/${filesArray[i].fileName}`
                  let contents = fs.readFileSync(file, 'utf8');
                    console.log('')
                    console.log(`Contents of '${filesArray[i].fileName}':`)
                    console.log('===============================================')
                    console.log(contents)
                    console.log('===============================================')
                    console.log('|       Contents Listed Above.                |')
                // myMethods.menu();
                   //break; 
                }
            }
            //console.log(`${searchFileName} was invalid try again...`)
            myMethods.menu();
         },
         fileContentsAsk: function(){
         console.log('')
         console.log(`                   All files:`)
         console.log('================================================')
         myMethods.listAllFileNames();
         console.log('================================================')
         console.log('')
         console.log('                    Matches')
         console.log('================================================')
         console.log(matches)
         console.log('================================================')
         console.log('')
         console.log('File Name:')
         rl.question(``, function(fName) {
            myMethods.listFileContentOf(fName)
         })
         },
         clear: function(){
            filesArray = []
            currentDir = "";
            matches = [];
         },
        askSearchFor: function(){
            myMethods.clear();
              console.log('')
             console.log('')
            console.log('Requirements:')
            console.log("")
            console.log("1.)Directory must contain only files not directories!")
           
            console.log("2.)When pasting directory make sure to remove the space after and 'file://' before")
            console.log("3.)Example: /home/... | Directory should start like that")
             console.log('==================================================================================')
            console.log("Paste directory path here:")
            rl.question(``, function(directoryPath){
             
               
                    currentDir = directoryPath;
                    myMethods.searchFor(directoryPath)
                
            })

        },
        searchFor: function(directory){
            console.log(`Searching for ${directory}...`)
            console.log("Files List:")
            console.log("==============================================")
            fs.readdir(directory, (err, files) => {
                
               
                files.forEach(file => {
                   console.log(file)
                   
                   let tmp = {
                    fileName: file,
                    contents: '',
                    active: true
                    }

                filesArray = filesArray.concat(tmp);
                
                }) 

                console.log("==============================================")
                //console.log(filesArray)
                currentDir = directory;
                //myMethods.evalSearch(keywords);
                myMethods.menu();
            })
        },
        askSearch: function(){
            console.log(`Search:`)
            rl.question(``, function(keywords){
            myMethods.evalSearch(keywords)
            })
        },
        evalSearch: function(keywords){
        matches = [];
            if(filesArray.length > 0){
                for(let i = 0; i < filesArray.length; i++){
                let file = `${currentDir}/${filesArray[i].fileName}`
                  let contents = fs.readFileSync(file, 'utf8');
                    if(contents.includes(keywords)){
                        matches = matches.concat(filesArray[i].fileName)
                    }
                    //console.log(contents)
                }
                    console.log("=====================================================================================================")
                console.log('Matches:')
                console.log(matches)
console.log("=====================================================================================================")
                myMethods.menu()
            }else{
                console.log(`${currentDir} is not valid`)
                myMethods.menu()
            }
        },  
        

        menu: function(){
            console.log("=====================================================================================================")
    console.log("   [Main Menu]")
    console.log("Message: To use this program properly, please copy directory path and paste it after choosing the first option.")
    console.log("1). Start/Restart")
    console.log("2). Search Current files for matches")
    console.log("3). See contents of file")
    console.log("4). See all files imported")
    console.log("5). Exit")
    console.log("=====================================================================================================")
    rl.question(``, function(option){ 
        
        let input = parseInt(option)
            switch(input){
                case 1:
                    
                    myMethods.askSearchFor();
                    break;
                        case 2: 
                        myMethods.askSearch()
                        break;
                        case 3:
                        myMethods.fileContentsAsk();
                            break;
                        case 4:
                        myMethods.listAllFileNames();
                        myMethods.menu();
                        break;
                        case 5:
                        rl.close();
                        break;
                        default:
                            myMethods.menu()
                            break;
                }
            })
            
        }
        
    }
    myMethods.menu()
    //catchArguments(currentDir)


}

    
mainProgramV2()

