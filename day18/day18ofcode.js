// Darius Rain                                              Day 18 of Code                     			         Date:11-5-19

//		Todays project I will create a readline interface that helps me and anyone else who needs to learn by flash card type of way.
//	1. Use the readline module `require('readline')` 
// 	2. Use functions to make the program run untill user wants to exit.
// 	3. Use arrays to hold questions and answers.
//  4. Use fs module so users can just input Questions and Answers in one '.txt' file, 

var runProgram = function() {
    var readline = require('readline');
    var filesys = require('fs')
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var currentQuestionsLength;
    var verifyAnswersLength;
    var currentAnswersLength;
    var answers = [];
    var questions = [];
    var inconclusive = [];
    var yourAnswerLog = [];

    var rights = [];
    var wrongs = [];

    var userQuestionsFile = filesys.readFileSync('q_and_a.txt', 'utf8');
    var myFunctions = {
        txtToArray: function() {
            userQuestionsFile = userQuestionsFile.split('\n');
            for (let i = 0; i < userQuestionsFile.length; i++) {
                if (userQuestionsFile[i] == '') {
                    userQuestionFile = userQuestionsFile.splice(i, 1)
                }
            }
            //console.log(userQuestionsFile)
        },
        assignQuestionsLength: function() {
            currentQuestionsLength = questions.length
        },

        assignAnswersLength: function() {
            currentAnswersLength = answers.length
        },
        organize: function() {
            for (let i = 0; i < userQuestionsFile.length; i++) {
                if (userQuestionsFile[i][0] == 'Q') {
                    let temp = [userQuestionsFile[i]];
                    questions = questions.concat(temp);
                } else if (userQuestionsFile[i][0] == 'A') {
                    let temp = [userQuestionsFile[i]];
                    answers = answers.concat(temp);
                } else {
                    let temp = [userQuestionsFile[i]];
                    inconclusive = inconclusive.concat(temp);
                }
            }
        },
        askQuestionGetAnswerShowAnswer: function() {

            currentQuestionsLength -= 1;

            let tempQ = rl.question(`${questions[currentQuestionsLength]}     `, function(answers) {
                let temp = [answers]
                yourAnswerLog = yourAnswerLog.concat(`QUESTION: ${questions[currentQuestionsLength]} YourAnswer: ${answers} `);
                //myFunctions.compareAsk(answers);
                if (currentQuestionsLength > -1) {
                    myFunctions.compareAsk(answers)
                    //myFunctions.askQuestionGetAnswerShowAnswer();
                } else {
                    //console.log(yourAnswerLog)
                    myFunctions.menu()
                }
            })
        },
        compareAsk: function(answer) {
            currentAnswersLength -= 1
            console.log(`________________________________________________________________________________`)
            console.log(`Your answer: ${answer}`);
            console.log(`________________________________________________________________________________`)
            console.log(`The Answer: ${answers[currentAnswersLength]}`)
            console.log(`________________________________________________________________________________`)

            rl.question(`Are you correct? |If yes: 'y'|If not: Press any key but 'y'|`, function(option) {
                if (option == 'y') {
                    let temp = [`${questions[currentQuestionsLength]}`]
                    rights = rights.concat(temp);
                    myFunctions.askQuestionGetAnswerShowAnswer();
                } else {
                    let temp = [`${questions[currentQuestionsLength]}`]
                    wrongs = wrongs.concat(temp);
                    myFunctions.askQuestionGetAnswerShowAnswer();
                }

            });

        },

        menu: function() {
            console.log(`________________________________________________________________________________`)
            console.log(`				Menu: `)

            console.log(`				1: Start Now`)
            console.log(`				2: Show Current Results`)
            console.log(`				3: Show Current Q & A file`)

            console.log(`				4: Try again/ Refresh`)
            console.log(`				5: Exit`)
            console.log(`________________________________________________________________________________`);
            rl.question(``, function(option) {
                console.log(`Amount of questions: ${questions.length}`)
                switch (parseInt(option)) {
                case 1:
                    myFunctions.askQuestionGetAnswerShowAnswer();
                    break;

                case 2:
                    console.log(`________________________________________________________________________________`)
                    console.log(`Answered Wrong:`);
                    console.log(wrongs)
                    console.log(`____________________________________________________`)
                    console.log(`Answered Right:`)
                    console.log(rights)
                    console.log(`____________________________________________________`)
                    console.log(`Percentage: ${rights.length / (rights.length + wrongs.length) * 100}%`)
                    console.log(`________________________________________________________________________________`)
                    console.log(`Your Test Log:`)
                    console.log(yourAnswerLog)
                    console.log(`________________________________________________________________________________`)
                    myFunctions.menu()
                    break;

                case 3:
                    console.log(userQuestionsFile)
                    myFunctions.menu();
                    break;

                case 4:
                    console.log(`Refreshed!`);
                    runProgram();
                    break;

                case 5:
                    rl.close()
                    break;

                default:
                    myFunctions.menu();
                    break;
                }
            });
        },

    }

    myFunctions.txtToArray();
    myFunctions.organize();
    myFunctions.assignQuestionsLength();
    myFunctions.assignAnswersLength();
    myFunctions.menu();
    //myFunctions.askQuestionGetAnswerShowAnswer();
    //console.log(rights)
    //console.log(wrongs)
    //console.log(yourAnswerLog);
    //console.log(answers)
    //console.log(questions)
    //console.log(inconclusive)
    //console.log(userQuestionsFile.length, userQuestionsFile)
}
runProgram();
