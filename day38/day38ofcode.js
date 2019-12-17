//Name: Darius Rain
//Day: 38
//Misson: Create a simulated bank readline program.
   const readline = require('readline'),
      rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
     });

const bank = {
    
  
    information: {
    "Company Name" : "Bank of JavaScript Coders",
    "Headquarters Adress" : "12231 Wall St. New York 12312",
    "Phone Number" : "1-800-123-1234"
    
},

clients: [],
vault: {
    totalCashInVault: function(){
        let resultAccTotal = 0,
        resultAccSavings = 0,
        resultAccChecking = 0,
        totalClients = bank.clients.length,
        resultMiscAccounts = 0;
        bank.clients.forEach(client => {
            if(client.activeAccount && client.totalBalance != NaN){
                
                resultAccTotal += client.totalBalance;
                resultAccSavings += client["Savings"];
                resultAccChecking += client["Checking"];
                
            }
        })
        resultMiscAccounts = resultAccTotal - (resultAccSavings + resultAccChecking);
        console.log(`Clients - Total: $${resultAccTotal}`) 
        console.log(`Clients - Checking - Total: $${resultAccChecking}`) 
        console.log(`Clients - Savings - Total: $${resultAccSavings}`)
        console.log(`Clients - Misc - Total: $${resultMiscAccounts}`)
        console.log(`Total - Clients: ${totalClients}`)
    },
    
    

},
methods: {
    clientAccount: (firstName, lastName, age, address, phoneNumber, initialDeposit, pin, savings) => {
        initialDeposit = parseFloat(initialDeposit)
        savings = parseFloat(savings)
        if(initialDeposit < savings){
            
            
            console.log(`Savings amount:${savings} exceeds Initial Deposit:${initalDeposit}!`)
            return false;
        }else if(initialDeposit > savings && firstName, lastName, age, initialDeposit, pin, savings){
         let checking = initialDeposit - savings;
               let temp = {};        
        temp.firstName = firstName;
        temp.lastName = lastName;
        temp.fullName = `${firstName} ${lastName}`;
        temp.age = age;
        temp.address = address;
        temp.phoneNumber = phoneNumber
        temp.lastDeposit = Math.round(initialDeposit);
        temp.lastWithdraw = 0;
        temp.activeAccount = true;
        temp.lastBankerAccessChange = null;
        temp.lastCustomerAccessChange = null;
        temp.bankerLogHistory = [];
        temp.customerLogHistory = [];
        temp["Checking"] = Math.round(checking);
        temp["Savings"] = Math.round(savings);
        temp.totalBalance = Math.round(temp["Savings"] + temp["Checking"]);
        temp.pin = parseInt(pin);
        bank.clients.push(temp)
            return true;
        }else{
            return false
        }        
        
  
      },
      withdrawClient: (clientName, amountToWithdraw, account) => {
      amountToWithdraw = parseFloat(amountToWithdraw)
            
                bank.clients.forEach(client => {
                
                if(client.fullName === clientName && client[account]){
    
                    if(parseFloat(amountToWithdraw) < client[account]){
                  
                        
console.log(`___________________________________________________________________________`)
console.log(`___________________________Withdraw Menu___________________________________`)               
                        console.log(`| [ACCOUNT OWNER] ~> ${client.fullName} | [Withdrawing from] ${account} | Full Balance All Accounts: $${client.totalBalance} |`)
                        console.log(`Checking Balance: $${client["Checking"]}`)
                        console.log(`Savings Balance: $${client["Savings"]}`)
                                                console.log(`___________________________________________________________________________`)
                        console.log(`Withdrawing $${amountToWithdraw} from ${account}...`)
                        
                        console.log(`___________________________________________________________________________`)
                        client[account] -= amountToWithdraw;
                        client.totalBalance -= amountToWithdraw
                        client.lastWithdraw = amountToWithdraw
                        client.customerLogHistory.push(`(Withdraw) Amount Withdrawn: $${amountToWithdraw} Date:${Date()}`)
                        client.lastCustomerAccessChange = Date();
                        console.log(`Full Balance Now: $${client.totalBalance}`)
                        console.log(`Total Balance of ${account} now: $${client[account]}`)
                        console.log('{code}')
                        console.log("Object's values now:")
                        
                       console.log(client)
                       
                     return true
                    }
                    }
                })
            
            
      },
      
      
      userInterface: () => {
   
      console.log(bank.information["Company Name"])
         console.log(bank.information["Headquarters Adress"])
         console.log('Day 38 of code! -- To be continued!')
         console.log('==================================================')
         console.log('1: Client Accounts')
         console.log('2: Vault')
         console.log('3: Client Account Search (To be continued day 39)')
         console.log(`4: Withdraw a client's account `)
         console.log(`5: Deposit a client's account (To be continued day 39)`)
         console.log(`6: Exit`)
         console.log('')
        rl.question(``, function(option){    
        
         switch(parseInt(option)){
                    case 1:
                        let i = 1;
                        bank.clients.forEach(client => {
                        console.log(`***********Account: ${i++}***********`)
                        console.log('Name: ', client.fullName);
                        console.log('Age: ', client.age);
                        console.log('Adress: ', client.address);
                        console.log('Phone number ', client.phoneNumber);
                        console.log(`Total Balance: $${client.totalBalance}`)
                        console.log(`Checking: $${client["Checking"]}`)
                        console.log(`Savings: $${client["Savings"]}`)
                        console.log(`-- --- --- --- --- --- --- --- --- --`)
                        console.log('\n')
                        })
                        bank.methods.userInterface();
                            break;
                    case 2:
                    
                    bank.vault.totalCashInVault();
                    bank.methods.userInterface();
                    break;
                    
                    case 3:
                        bank.methods.userInterface();
                        break;
                    case 4:
                    rl.question(`Client Name?          `, clientName => {
                    rl.question(`Amount to withdraw?          `, withdrawAmount => {
                    rl.question(`Account to withdraw from?          `, accountName => { 
                    rl.question(`Is ${clientName}, ${withdrawAmount} & ${accountName} correct? [Y/n]          `, confirmation => {
                        if(confirmation === 'Y' || confirmation === 'y'){
                    bank.methods.withdrawClient(clientName, withdrawAmount, accountName)           
                          bank.methods.userInterface();
                    }else{
                        cosole.log('Withdraw has been canceled')
                          bank.methods.userInterface();
                    }
                            })
                           })
                          })
                         })
                         break;
                    case 5:
                      bank.methods.userInterface();
                      break;
                      
                   case 6:
                   rl.close();
                   break;
                   
                   default: 
                     bank.methods.userInterface();
                     break;
                   
                        
            }  
            
      
      
      })
    

}
}
}






bank.methods.clientAccount("Jake", "Anthonys", "32", "123 Rhode St. 12321", "412-029-2312", "700.32", "1020", "212.32")
bank.methods.clientAccount("Heilios", "Geres", "27", "123 Pennsylvania Ave. 12341", "412-031-2423", "500.32", "3429", "200")
bank.methods.clientAccount("Jill", "Drischell", "54", "123 Silicon Blvd. 12432","412-324-3342", "900.32","1720","233.12")
bank.methods.clientAccount("John", "Drischell", "22", "123 JavaScript Cir. 12321", "412-297-7352", "1100.32", "1999", "245.20")

bank.methods.userInterface();
 
