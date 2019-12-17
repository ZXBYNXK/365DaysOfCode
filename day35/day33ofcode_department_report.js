//Name: Darius Rain
//Date: 11/30/19
//Day: 35
//Misson: Take a text file, get rid of unwanted charachters, then store each individual string as a index in an array 
// then store the wanted values from the array as properties in an object representing the integrity of the string.

program = {//<--- Going to store ALL PROGRAM DATA in this OBJECT
    all:[], //<-- This ARRAY will contain all information needed.
    backup:[],//<-- Made this just incase something happens, you never know.
    departmentNamesArray: [],
    salaryArrayOfObjects: [],// <-- This ARRAY will contain all the information about employee salaries
    employeeArrayOfObjects: [],// <-- This ARRAY will contain all the information about employee salaries
    departmentEmpArrayOfObjects:[],// <-- This ARRAY will contain all the information about employee salaries
    methods: {
         configureFiles: function(){
             
             let fs = require('fs'),
              salariesFile_id1 = fs.readFileSync('./load_salaries.txt', 'utf8'),
              employeesFile_id2 = fs.readFileSync('./load_employee.txt', 'utf8'),           
              employeeCareerStatFile_id3 = fs.readFileSync('./load_dept_emp.txt', 'utf8'), 
              departmentNamesFile_id4 = fs.readFileSync('./load_dept_names.txt', 'utf8'),                                                                                    
              
              
              
              
              takeDataThenSort = () => {    
             
             let salaries = salariesFile_id1.replace(/^\s*|\(|\'\)\,/gm, "").replace(/[(]|[INSERT INTO `salaries` VALUES ]/g, "").replace(/\,\'|\'\,\'|\,|\n/gm, " " ).split(" "),
              employees = employeesFile_id2.replace(/^\s*|\(|\'\)\,|"INSERT INTO `employees` VALUES "/gm, "").replace(/\,\'|\'\,\'|\n/gm, " " ).split(" "),
              employeeCareerStats = employeeCareerStatFile_id3.replace(/^\s*|\(|\'\)\,/gm, "").replace(/[(]|INSERT INTO `dept_emp` VALUES /g, "").replace(/\,\'|\'\,\'|\n/gm, " " ).split(" "),
              departmentNames = departmentNamesFile_id4.replace(/^\s*|\(\'|\'\)\;|\'\)\,/g, "").replace(/[(']|INSERT INTO `departments` VALUES /g, "").replace(/\,|\n/g, " " ).split(" "),
 
              
             
             
 
                           
             
//'salariesEmptyObject' keys:| 'employeeId' | 'salary' | 'startDate' | 'endDate' | 
//                    values:|     |             |            |            |
//From:./load_salaries.txt -->(  10001,        62102,    '1987-06-26', '1988-06-25'),
             //key/value pairs for this example are: 
                              // salariesEmptyObject = { 
                             //                         employeeId: 1001,
                            //                          salary: 62102,
                           //                           startDate: 1987-06-26,
                          //                            endDate: 1988-06-25, 
                         //                           }, 
                        // In a loop the 'salariesEmptyObject' value will equal this temporarily. 
                       // Then it will do the same for the next loop.   
              salariesEmptyObject = {
                 employeeId: null,
                 salary: null,
                 startDate: null,
                 endDate: null,
                
                 
              },







//'employeesEmptyObject' keys:| 'employeeId' | 'date1' |  'firstName' |  'lastName' | 'gender'  | 'date2'   |
//                     values:|     |             |            |             |           |           |
//From:./load_employee.txt -->(   10004,    '1954-05-01',  'Chirstian',  'Koblick',     'M',    '1986-12-01'),
             //key/value pairs for this example will be the result: 
                              // salariesEmptyObject = { 
                             //                 employeeId: 1004,
                            //                  date1: '1954-05-01',
                           //                   firstName: 'Chirstian',
                          //                    lastName: 'Koblick', 
                         //                     gender: 'M',
                        //                      date2: '1986-12-01',
                       //            }, 
                        // In a loop the 'salariesEmptyObject' value will equal this temporarily. 
                       // Then it will do the same for the next loop.                  

     employeesEmptyObject = {
                 employeeId: null,
                 date1: null,
                 firstName: null,
                 lastName: null,
                 gender: null,
                 date2: null,
              },





//'employeeCareerStatEmptyObject' keys:| 'employeeId'| 'departmentId' |    'date1'   |   'date2'   |
//                              values:|      |               |               |             |     
//From:./load_dept_emp.txt          -->|  ( 10002,        'd007',      '1996-08-03',  '9999-01-01'),
             //key/value pairs for this example will be the result: 
                              // salariesEmptyObject = { 
                             //                 employeeId: 1004,
                            //                  date1: '1954-05-01',
                           //                   firstName: 'Chirstian',
                          //                    lastName: 'Koblick', 
                         //                     gender: 'M',
                        //                      date2: '1986-12-01',
                       //            }, 
                        // In a loop the 'salariesEmptyObject' value will equal this temporarily. 
                       // Then it will do the same for the next loop.    

              employeeCareerStatEmptyObject = {
                 employeeId: null,
                 departmentId: null,
                 date1: null,
                 date2: null,
              },





//'departmentNameInfoEmptyObject' keys:| 'deprartmentId' | 'departmentName' |
//                              values:|     |                    |           
//From:./load_dept_names.txt          -->|(  'd001',           'Marketing'),
             //key/value pairs for this example will be the result: 
                              // salariesEmptyObject = { 
                             //                 departmentId: 'd001',
                            //                  departmentName: 'Marketing',
                           //            }, 
                          // In a loop the 'salariesEmptyObject' value will equal this temporarily. 
                         // Then it will do the same for the next loop.                     
          
              departmentNameInfoEmptyObject = {
                 departmentId: null,
                 departmentName: null,
             }


              departmentNames.shift()
              let count = 1,
              


             
            covertArrayToObject_SendToSalaryArray = function() {  
             let temporaryObject = salariesEmptyObject;   
             salaries.forEach(currentIndexValueFromSalariesArray => {
                  
                 if(count === 1){
                   
                
                console.log(count, currentIndexValueFromSalariesArray)
                 }else if(count === 2){
                     console.log(count, currentIndexValueFromSalariesArray)
                
                 }else if(count === 3){
                     console.log(count, currentIndexValueFromSalariesArray)

                
                 
             }else if(count === 4){
                 console.log(count, currentIndexValueFromSalariesArray)

         
                 count = 0;
                 temporaryObject = salariesEmptyObject;
         }
     count++
             
             })
             count = 1;
         }


    
              
         covertArrayToObject_SendToSalaryArray()
             }
             takeDataThenSort();
                                                                 //The commas Above are just a
                                                                //neater way of writing:(Example)
                                                               //"const vName = anything;
                                                              //const vName2 = anything2;
                                                             //const vName3 = anything3;
                                                            //Instead of semicolon its ','  
                                                           //And instead of writing let var or const 
                                                          //repeatedly you only write it once.
 // Used arrow function here, its almost exactly the same as 
//writing: 
// 'let variableName = function(){statements;}' 
// Only differnece is that the arrow function has some new features.
// but for the most part its the same.                                                                                
                                                                                                                   
            
            
            
                                    
          }
     }
}
program.methods.configureFiles()