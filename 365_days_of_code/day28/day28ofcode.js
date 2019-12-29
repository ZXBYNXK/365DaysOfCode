


const mainProgramV1 = function (){
    var currentDir = '';
    const fs = require('fs'),
    //imported = require('./day28ofcode_export'),
    readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }),
     myMethods = {
        askSearchFor: function(){
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
                
                var filesArray = [];
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
                myMethods.menu();
            })
            
        },

        menu: function(){
            console.log("   [Main Menu]")
    console.log("Message: To use this program properly, please copy directory path and paste it after choosing the first option.")
    console.log("1). List Directory Contents")
    //console.log("2). Create file")
    console.log("2). Exit")
    rl.question(``, function(option){ 
        
        let input = parseInt(option)
            switch(input){
                case 1:
                    myMethods.askSearchFor();
                    break;
                        case 2: 
                        rl.close();
                        break;
                        default:
                            this.menu()
                            break;
                }
            })
            
        }
        
    }
    myMethods.menu()
    //catchArguments(currentDir)


}

    
mainProgramV1()

