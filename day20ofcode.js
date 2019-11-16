// Darius Rain 																						
// Cohort 9e
//Date: 11-15-19
//Assignment: Create a program for the owner of the Javascript Hotel. The owner needs a program that helps keep tracked of customers checking in or out.

var runProgram = function() {

    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    var hotel = {

        customers: [],

        availableRooms: [],
        occupiedRooms: [],
        suite: '',
        normal: '',
        allRooms: [],
        needsCleaned: [],
        toolBox: {
            generateId: function() {
                hotel.toolBox.roomId += 1
            },
            roomId: 999,
            sortRooms: function() {
                hotel.availableRooms = [];
                hotel.needsCleaned = [];
                hotel.occupiedRooms = [];
                for (let i = 0; i < hotel.allRooms.length; i++) {
                    if (hotel.allRooms[i].available === true && hotel.allRooms[i].clean === true) {

                        hotel.availableRooms.push(`${hotel.allRooms[i].roomNumber}`)
                    } else if (hotel.allRooms[i].clean === false) {

                        hotel.needsCleaned.push(`${hotel.allRooms[i].roomNumber}`)
                    } else {

                        hotel.occupiedRooms.push(`${hotel.allRooms[i].roomNumber}`);

                    }

                }
            },
            displayAvailableRooms: function() {
                console.log(`======================================================`)
                for (let i = 0; i < hotel.availableRooms.length; i++) {

                    console.log(hotel.availableRooms[i])

                }
                hotel.menu()
                console.log(`======================================================`)
            },

            displayOccupiedRooms: function() {
                console.log(`======================================================`)
                for (let i = 0; i < hotel.occupiedRooms.length; i++) {

                    console.log(hotel.occupiedRooms[i])
                }

                hotel.menu();
                console.log(`======================================================`)
            },
            displayEmployeeMemo: function() {
                console.log(`======================================================`)
                console.log(`Employee Memo.`)
                console.log(`Rooms That Need Cleaned`)
                for (let i = 0; i < hotel.needsCleaned.length; i++) {
                    console.log(hotel.needsCleaned[i])
                }
                console.log(`======================================================`)
                hotel.menu();
            },
            recieveQuestion: function() {
                console.log(`Search:`)
                rl.question(``, function(intake) {

                    hotel.toolBox.runSearchEngine(intake);

                })
            },
            searchDocument: function(keyword) {
                console.log(keyword)
                for (let i = 0; i < hotel.allRooms.length; i++) {
                    if (hotel.allRooms[i].roomNumber.includes(keyword) || hotel.allRooms[i].description.includes(keyword) || hotel.allRooms[i].customer.includes(keyword)) {

                        console.log(`${i}. Keyword(s) Found!`)
                        console.log(`==================================`)
                        console.log(hotel.allRooms[i])
                        console.log(`==================================`)

                    }
                }
                hotel.menu();
            },

            collectKeyWordCheckOut: function() {
                console.log(`Checkout:`)

                rl.question(`Room Id     `, function(input2) {
                    //console.log(input)
                    hotel.toolBox.searchKeyWordCheckOut(input2)
                })

                //hotel.menu();									
            },

            searchKeyWordCheckOut: function(roomId) {
                //console.log(keyword)
                console.log(`======================================================`)
                for (let i = 0; i < hotel.allRooms.length; i++) {
                    if (hotel.allRooms[i].roomId == roomId) {
                        console.log(`${hotel.allRooms[i].customer}has sucessfully checked out. Cleaners will be notified ${hotel.allRooms[i].roomNumber} needs cleaned.`)
                        hotel.allRooms[i].available = true;
                        hotel.allRooms[i].clean = false;
                        hotel.allRooms[i].customer = '';
                        hotel.allRooms[i].customerInfo = '';
                        console.log(`======================================================`)
                        hotel.menu();
                    }

                }

                hotel.menu();
            },
            collectKeyWord: function() {
                console.log(`Search:`)
                rl.question(``, function(input) {
                    console.log(`Your search ${input}`)
                    hotel.toolBox.searchDocument(input)
                })

                //hotel.menu();									
            },

            automatic: function() {
                console.log(`1:(Demo Mode) Automaticly Set Amount Of Rooms? (100 Rooms Total, 80 Normal Rooms Price:70pd, 20 Suites Price: 140pd.)`)
                console.log(`2: Custom Set Option? Set rooms to your own amount`)
                rl.question(``, function(option) {
                    if (parseInt(option) === 1) {
                        hotel.toolBox.addRoomsExecute(20, 140, 70, 80)
                    } else if (parseInt(option) === 2) {
                        hotel.toolBox.addRoomsAsk();
                    } else {
                        console.log(`Error Try Again.`)
                        hotel.toolBox.automatic();

                    }
                })

            },

            customerCheckIn: function() {
                rl.question(`Would the customer like a suite? (y or n)      `, function(choice) {
                    rl.question(`How Many Days ?`, function(days) {
                        rl.question(`Is this what you wanted (Suite:${choice})(# of Days:${days})? (y or n)     `, function(final) {
                            this.days = days;

                            if (final === 'n') {
                                hotel.menu()
                            } else {
                                if (choice === 'y') {
                                    let price = hotel.suite * days;
                                    if (price === NaN) {
                                        console.log(`Form Is Invalid`)
                                        hotel.menu();
                                    }
                                    this.pick = 'Suite'
                                    rl.question(`Price: $${price} Paid? y or n     `, function(ifPaid) {
                                        if (ifPaid === 'n') {
                                            hotel.menu();
                                        } else {
                                            rl.question(`What Is Customer Name?     `, function(custName) {

                                                hotel.toolBox.sendCustomerToRoom(custName, price, pick, days)

                                            })
                                        }

                                    })
                                } else {
                                    let price = hotel.normal * days;
                                    this.pick = 'Normal Room'
                                    rl.question(`Price: $${price} Paid? y or n     `, function(ifPaid) {
                                        if (ifPaid === 'n') {
                                            hotel.menu();
                                        } else {
                                            rl.question(`What Is Customer Name?     `, function(custName) {
                                                hotel.toolBox.sendCustomerToRoom(custName, price, pick, days)

                                            })
                                        }

                                    })
                                }

                            }
                        })
                    })
                })
            },
            addRoomsAsk: function() {
                console.log(`======================================================`)
                console.log(`FACTORY INSTALL....`)
                console.log(`ANSWER QUESTIONARE`)
                console.log(`You will be able to edit hotel room information later on.`)
                console.log(`======================================================`)
                rl.question(`How many rooms total?          	`, function(numberOfRooms) {
                    rl.question(`How many are special suites?   	`, function(numberOfSuites) {
                        rl.question(`Price of suite per day?        	`, function(suitePricePerDay) {
                            rl.question(`Price of regular room per day?   	   `, function(normalPricePerDay) {
                                let numberOfRegularRooms = parseInt(numberOfRooms) - parseInt(numberOfSuites)
                                hotel.suite = suitePricePerDay
                                hotel.normal = normalPricePerDay
                                hotel.toolBox.addRoomsExecute(numberOfSuites, suitePricePerDay, normalPricePerDay, numberOfRegularRooms)
                                console.log(`======================================================`)
                            })
                        })
                    })
                })
            },
            addRoomsExecute: function(numOfSuites, suitePrice, normalPrice, numOfRegularRooms) {

                for (let i = 0; i < parseInt(numOfSuites); i++) {
                    hotel.toolBox.generateId()
                    let obj = {
                        roomId: hotel.toolBox.roomId,
                        roomNumber: `Suite #${i + 1}`,
                        numberSort: i + 1,
                        roomType: `Suite`,
                        roomPrice: `Price: $${suitePrice}`,
                        available: true,
                        clean: true,
                        customer: '',
                        customerInfo: '',
                        description: 'Two Rooms, Two Bathrooms, Four Beds, split room'
                    }
                    hotel.allRooms.push(obj)

                }
                for (let i = 0; i < parseInt(numOfRegularRooms); i++) {
                    hotel.toolBox.generateId();
                    let obj = {
                        roomId: hotel.toolBox.roomId,
                        roomNumber: `Room #${i + 1}`,
                        numberSort: i + 1,
                        roomType: `Normal Room`,
                        roomPrice: `Price: $${normalPrice}`,
                        available: true,
                        clean: true,
                        customer: '',
                        customerInfo: '',
                        description: 'Two beds, one bathroom',
                    }
                    hotel.allRooms.push(obj)

                }
                hotel.menu();
            },

            sendCustomerToRoom: function(cname, total, type, numOfDays) {
                this.type = type;
                if (type === 'Suite') {
                    let obj = {
                        customerName: cname,
                        pricePaid: total,
                        roomNumber: '',
                        roomType: type,
                        numberOfDays: numOfDays,

                    }
                    for (let i = 0; i < hotel.allRooms.length; i++) {
                        if (hotel.allRooms[i].available === true && hotel.allRooms[i].clean === true && hotel.allRooms[i].roomType == 'Suite') {
                            obj.roomNumber = hotel.allRooms[i].roomNumber
                            hotel.allRooms[i].customer = obj.customerName;
                            hotel.allRooms[i].customerInfo = obj;
                            hotel.allRooms[i].available = false;
                            break;
                        }
                    }
                    hotel.menu();
                } else if (type == 'Normal Room') {
                    let obj = {
                        customerName: cname,
                        pricePaid: total,
                        roomNumber: '',
                        roomType: type,
                        numberOfDays: numOfDays,

                    }
                    for (let i = 0; i < hotel.allRooms.length; i++) {
                        if (hotel.allRooms[i].available === true && hotel.allRooms[i].clean === true && hotel.allRooms[i].roomType === 'Normal Room') {
                            hotel.allRooms[i].customer = obj.customerName;
                            obj.roomNumber = hotel.allRooms[i].roomNumber;
                            hotel.allRooms[i].customerInfo = obj;
                            hotel.allRooms[i].available = false;
                            break;
                        }

                    }
                    hotel.menu();
                } else {
                    console.log(`Restart Application, Errors Where found regarding type of room`)
                    hotel.menu()
                }

            },

            setRoomAsClean: function(roomId) {
                for (let i = 0; i < hotel.allRooms.length; i++) {

                    if (hotel.allRooms[i].roomId == roomId && hotel.allRooms.clean === false) {
                        hotel.allRooms[i].clean = true;

                    }
                }
                hotel.menu()
            },

            searchRoomModify: function() {
                rl.question(`What room(s) has been cleaned?`, function(roomNum) {

                    hotel.toolBox.setRoomAsClean(roomNum)

                })
            },

        },

        menu: function() {
            hotel.toolBox.sortRooms();
            console.log(`_________________________________________________________________________________`)
            console.log(`				Javascript Hotels.`)
            console.log(``)
            console.log(`						Menu`)
            console.log(`			1: See Available Rooms?`)
            console.log(`			2: See Occupied Rooms?`)
            console.log(`			3: Employee Memo.`)
            console.log(`			4: Check In A Customer?`)
            console.log(`			5: Check Out A Customer?`)
            console.log(`			6: Rooms that need cleaned.`)
            console.log(`			7: Mark room as clean?`)
            console.log(`			8: See all rooms status?`)
            console.log(`			9: Search for information?`)
            console.log(`			10: Exit Program.`)
            console.log(`_____________________________________________|Made By: Darius Rain|______________`)
            rl.question(``, function(input) {
                switch (parseInt(input)) {

                case 1:
                    hotel.toolBox.displayAvailableRooms()
                    break;

                case 2:
                    hotel.toolBox.displayOccupiedRooms()
                    break;

                case 3:
                    hotel.toolBox.displayEmployeeMemo()
                    break;

                case 4:
                    hotel.toolBox.customerCheckIn();
                    break;

                case 5:
                    hotel.toolBox.collectKeyWordCheckOut();
                    break;

                case 6:
                    console.log(hotel.needsCleaned)
                    hotel.menu();
                    break;

                case 7:
                    hotel.toolBox.searchRoomModify();
                    break;

                case 8:
                    console.log(hotel.allRooms);
                    hotel.menu();
                    break;

                case 9:
                    hotel.toolBox.collectKeyWord();
                    break;

                case 10:
                    rl.close()
                    break;
                default:
                    hotel.menu();
                    break;

                }
            })
        }
    }

    hotel.toolBox.automatic();

}
runProgram();
