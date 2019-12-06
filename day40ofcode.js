//Name: Darius Rain
//Day: 40

//Misson: Create a simulated bank readline program add upgrades.
const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }),
 //Make numbers behave like currency

 currency = (numberOrString) => {

    numberOrString = `${numberOrString}`
    let decimalIndex = numberOrString.indexOf('.'),
    result = '';

    
    for(let i=0; i< numberOrString.length; i++){
      if(decimalIndex >= 0){
        if(i <= decimalIndex ){
            result += numberOrString[i]
        } else if(i === decimalIndex + 1 ){
            result += numberOrString[i]
            if(numberOrString[i+1] === undefined){
            result += '0';
            }else{
                result += numberOrString[i+1]

            }
        }
    }else {
        result = numberOrString
        result+= '.00'
    }    
    }
    
    return `${result}`
    
    //console.log(extractNumberConvert())
    
    }
    



const bank = {


    information: {
        "Company Name": "Bank of JavaScript Coders",
        "Headquarters Adress": "12231 Wall St. New York 12312",
        "Phone Number": "1-800-123-1234"

    },

    clients: [],
    vault: {
        totalCashInVault: function () {
            let resultAccTotal = 0,
                resultAccSavings = 0,
                resultAccChecking = 0,
                totalClients = bank.clients.length,
                resultMiscAccounts = 0;
            bank.clients.forEach(client => {
                if (client.activeAccount) {

                   resultAccTotal = currency(parseFloat(resultAccTotal) + parseFloat(client.totalBalance))
                    resultAccSavings = currency(parseFloat(resultAccSavings) + parseFloat(client["Savings"]));
                    resultAccChecking = currency(parseFloat(resultAccChecking)  + parseFloat(client["Checking"]));

                }
                
            })
            resultMiscAccounts = currency(parseFloat(resultAccTotal) - (parseFloat(resultAccSavings) + parseFloat(resultAccChecking)));
          
            console.log(`Clients - Total: $${currency(resultAccTotal)}`)
            console.log(`Clients - Checking - Total: $${currency(resultAccChecking)}`)
            console.log(`Clients - Savings - Total: $${currency(resultAccSavings)}`)
            console.log(`Clients - Misc - Total: $${currency(resultMiscAccounts)}`)
            console.log(`Total - Clients: ${totalClients}`)
            console.log('==========================================================')
            console.log('\n')
        },



    },
    methods: {
        clientSearch: function(input){
            
            bank.clients.forEach(client => {
            
               
                
                if(client.fullName.includes(input) || client.age.includes(input) || client.address.includes(input) || client.phoneNumber.includes(input)){
                    console.log('\n')
                    console.log('=============================================================================')
                    console.log(`Name: ${client.fullName} | Age: ${client.age} | Adress: ${client.address} | Phone Number: ${client.phoneNumber}`);
                    console.log(`[Accounts]~ Checking:${client["Checking"]} | Savings: $${client["Savings"]} | Total balance: $${client.totalBalance}` )
                    console.log('=============================================================================')
                    console.log('\n')
                }

            })
            bank.methods.userInterface()
        },
        clientAccount: (firstName, lastName, age, address, phoneNumber, initialDeposit, pin, savings) => {
            initialDeposit = parseFloat(initialDeposit)
            savings = parseFloat(savings)
            if (initialDeposit < savings) {


                console.log(`Savings amount:${savings} exceeds Initial Deposit:${initialDeposit}!`)
                return false;
            } else if (initialDeposit > savings && firstName, lastName, age, initialDeposit, pin, savings) {
                let checking = initialDeposit - savings;
                let temp = {};
                temp.firstName = firstName;
                temp.lastName = lastName;
                temp.fullName = `${firstName} ${lastName}`;
                temp.age = age;
                temp.address = address;
                temp.phoneNumber = phoneNumber
                temp.lastDeposit = currency(initialDeposit);
                temp.lastWithdraw = 0;
                temp.activeAccount = true;
                temp.lastBankerAccessChange = null;
                temp.lastCustomerAccessChange = null;
                temp.bankerLogHistory = [];
                temp.customerLogHistory = [];
                temp["Checking"] = currency(checking);
                temp["Savings"] = currency(savings);
                temp.totalBalance = currency(parseFloat(temp["Savings"]) + parseFloat(temp["Checking"]));
                temp.pin = parseInt(pin);
                bank.clients.push(temp)
                console.log(`New client added:`)
                console.log(temp)
                
                return true;
            } else {
                return false
            }


        },
        removeClientSearch: (clientName, address) => {
          let indexToDelete;
          bank.clients.forEach(object => {
                if(object.fullName.includes(clientName) && object.address.includes(address)){
                           indexToDelete = bank.clients.indexOf(object)
                           bank.methods.removeClientConfirmation(object.fullName, object.address, indexToDelete)
                        
                }
                  
          })
        
        },
        removeClientConfirmation: (client, address, indexNum) => {
         console.log(`Is ${client} and ${address} correct [Y/n]?`)
         rl.question(``, option => {
            if(option === 'y' || option === 'Y') {
                    console.log('Removed:')
                    console.log(bank.clients[indexNum])
                    bank.clients.splice(indexNum, 1)
                    bank.methods.userInterface()
                    return true;
            }else {
                console.log(`Deletion has been cancelled`)
                bank.methods.userInterface();
                return false;
            }
         
         })

        },
        withdrawClient: (clientName, amountToWithdraw, account) => {
            amountToWithdraw = parseFloat(amountToWithdraw)

            bank.clients.forEach(client => {

                if (client.fullName === clientName && client[account]) {

                    if (parseFloat(amountToWithdraw) < client[account]) {
                        console.log('\n')
                        console.log('=============================================================================')


                        console.log(`___________________________________________________________________________`)
                        console.log(`___________________________Withdraw Menu___________________________________`)
                        console.log(`| [ACCOUNT OWNER] ~> ${client.fullName} | [Withdrawing from] ${account} | Full Balance All Accounts: $${client.totalBalance} |`)
                        console.log(`Checking Balance: $${client["Checking"]}`)
                        console.log(`Savings Balance: $${client["Savings"]}`)
                        console.log(`___________________________________________________________________________`)
                        console.log(`Withdrawing $${amountToWithdraw} from ${account}...`)

                        console.log(`___________________________________________________________________________`)
                        client[account] = currency(parseFloat(client[account] - amountToWithdraw));
                        client.totalBalance = currency(parseFloat(client.totalBalance - amountToWithdraw));
                        client.lastWithdraw = `(Withdraw)(${account}) Amount Withdrawn: $${amountToWithdraw} Date:${Date()}`;
                        client.customerLogHistory.push(`(Withdraw)(${account}) Amount Withdrawn: $${amountToWithdraw} Date:${Date()}`)
                        client.lastCustomerAccessChange = Date();
                        console.log(`Full Balance Now: $${client.totalBalance}`)
                        console.log(`Total Balance of ${account} now: $${client[account]}`)

                        console.log("Object values now:")

                        console.log(client)
                        console.log('=============================================================================')
                        console.log('\n')
                        return true
                    }
                }
            })


        },
        depositClient: (clientName, amountToDeposit, account) => {
            amountToDeposit = currency(amountToDeposit)

            bank.clients.forEach(client => {

                if (client.fullName === clientName && client[account]) {

                    if (amountToDeposit > 0) {
                        console.log('\n')
                        console.log('=============================================================================')

                        console.log(`___________________________________________________________________________`)
                        console.log(`___________________________Deposit Menu___________________________________`)
                        console.log(`| [ACCOUNT OWNER] ~> ${client.fullName} | Depositing to ${account} | Full Balance All Accounts: $${client.totalBalance} |`)
                        console.log(`Checking Balance: $${client["Checking"]}`)
                        console.log(`Savings Balance: $${client["Savings"]}`)
                        console.log(`___________________________________________________________________________`)
                        console.log(`Depositing $${amountToDeposit} to ${account}...`)

                        console.log(`___________________________________________________________________________`)
                        client[account] = currency(parseFloat(client[account]) + parseFloat(amountToDeposit));
                        client.totalBalance = currency(parseFloat(client.totalBalance) + parseFloat(amountToDeposit));
                        client.lastDeposit = `(Deposit)(${account}) Amount Deposited: $${amountToDeposit} Date:${Date()}`
                        client.customerLogHistory.push(`(Deposit)(${account}) Amount Deposited: $${amountToDeposit} Date:${Date()}`)
                        client.lastCustomerAccessChange = Date();
                        console.log(`Full Balance Now: $${client.totalBalance}`)
                        console.log(`Total Balance of ${account} now: $${client[account]}`)

                        console.log("Object values now:")

                        console.log(client)
                        console.log('=============================================================================')
                        console.log('\n')
                        return true
                    }
                }
            })
        },

        userInterface: () => {
            console.log('\n')
            console.log(bank.information["Company Name"])
            console.log(bank.information["Headquarters Adress"])
            console.log('Day 39 of code. (Day 38 updated version)')
            console.log('============================================================================')
            console.log('1: Client Accounts')
            console.log('2: Vault')
            console.log('3: Client Account Search (New)')
            console.log(`4: Withdraw a client's account `)
            console.log(`5: Deposit a client's account (New)`)
            console.log(`6: Add client (To be continued Day 40)`)
            console.log(`7: Delete client.(To be continued day 40)`)
            console.log(`8: Exit`)
            console.log('============================================================================')
            rl.question(``, function (option) {

                switch (parseInt(option)) {
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
                            console.log('============================================================================')

                            console.log('\n')
                        })
                        bank.methods.userInterface();
                        break;
                    case 2:

                        bank.vault.totalCashInVault();
                        bank.methods.userInterface();
                        break;

                    case 3:
                        console.log(`Search Clients:`)
                        rl.question(``, function(input){
                        bank.methods.clientSearch(input)
                            
                        })
                        break;
                    case 4:
                        rl.question(`Client Name?          `, clientName => {
                            rl.question(`Amount to withdraw?          `, withdrawAmount => {
                                rl.question(`Account to withdraw from?          `, accountName => {
                                    rl.question(`Is Account:${clientName}, $${withdrawAmount} from ${accountName} correct? [Y/n]          `, confirmation => {
                                    if(clientName && withdrawAmount && accountName){
                                        if (confirmation === 'Y' || confirmation === 'y') {
                                            bank.methods.withdrawClient(clientName, withdrawAmount, accountName)
                                            bank.methods.userInterface();
                                        } else {
                                            console.log('\n')
                                            console.log('Withdraw has been canceled')
                                            console.log('=============================================================================')
                        console.log('\n')
                                            bank.methods.userInterface();
                                        }
                                    } else {
                                        console.log('\n')

                                        console.log('Missing a required parameter!')
                                        console.log('=============================================================================')
                        console.log('\n')
                                        bank.methods.userInterface()
                                    }
                                    })
                                


                                })
                            })
                        })
                        break;
                    case 5:
                        rl.question(`Client Name?          `, clientName => {
                            rl.question(`Amount to deposit?          `, depositAmount => {
                                rl.question(`Account to deposit to?          `, accountName => {
                                    rl.question(`Is Account:${clientName}, $${depositAmount} to ${accountName} correct? [Y/n]          `, confirmation => {
                                        if(clientName && depositAmount && accountName){
                                        if (confirmation === 'Y' || confirmation === 'y') {
                                            bank.methods.depositClient(clientName, depositAmount, accountName)
                                            bank.methods.userInterface();
                                        } else {
                                            console.log('\n')
                                            console.log('=============================================================================')

                                            console.log('Deposit has been canceled')
                                            console.log('=============================================================================')
                        console.log('\n')
                                            bank.methods.userInterface();
                                        }
                                    }else {
                                        console.log('\n')
                                        console.log('=============================================================================')

                                        console.log('Missing a required parameter!')
                                        console.log('=============================================================================')
                        console.log('\n')
                                        bank.methods.userInterface()
                                    }
                                    })
                                })
                            })
                        })

                        break;
                    case 6: 
                    //(firstName, lastName, age, address, phoneNumber, initialDeposit, pin, savings)
                    rl.question(`First name?   `, firstName => {
                      rl.question(`Last name?   `, lastName => {
                         rl.question(`Age?   `, age => {
                         rl.question(`Address?   `, address => {
                         rl.question(`Phone Number?   `, phoneNumber => {
                         rl.question(`Initial Deposit?   `, initialDeposit => {
                           rl.question(`Pin Number?    `, pin => {
                           rl.question(`How much of ${initialDeposit} do you want in savings?`, savings => {
                         console.log(`Is Name:${firstName} ${lastName}| Age:${age} | Address: ${address} | Phone Number ${phoneNumber} | Initial Deposit: ${initialDeposit} | Pin: ${pin}`)
                         rl.question(`[Y/n]`, confirmation => {
                         if(confirmation === 'Y' || confirmation === 'y') {
                            bank.methods.clientAccount(firstName, lastName, age, address, phoneNumber, initialDeposit, pin, savings)
                            bank.methods.userInterface()
                         }else {
                         console.log(`${firstName}'s application has been cancelled`)
                            bank.methods.userInterface()
                            return false
                         }
                      })   
                      })
                      }) 
                      }) 
                      }) 
                      }) 
                      })
                    })
                    })
                    break;
                    case 7: 
                    console.log('Client Name:')
                    rl.question(``, name => {
                            console.log(`Client Address`)
                            rl.question(``, address => {
                                
                        bank.methods.removeClientSearch(name, address)
                            
                            })           
                    })
                    break;
                    
                    case 8:
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
bank.methods.clientAccount("Jill", "Drischell", "54", "123 Silicon Blvd. 12432", "412-324-3342", "900.32", "1720", "233.12")
bank.methods.clientAccount("John", "Drischell", "22", "123 JavaScript Cir. 12321", "412-297-7352", "1100.32", "1999", "245.20")

bank.methods.userInterface();

