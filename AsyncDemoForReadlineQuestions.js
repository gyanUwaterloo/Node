//This is the way an async function should be made 
const { stdin, stdout, exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: stdin,
    output:stdout
})
const questions= [
    "What is your name?",
    "What's your dream company to work for?",
    "Whats your salary expectation?"
]


const done = (answers) => {
    console.log(answers);
    console.log("Done!");
}
const getAnswer = (questions, done) =>{
    const answerArray = [];
    const [q1] = questions;

    const getAnswer = answer =>{
        answerArray.push(answer);
        if(answerArray.length < questions.length){
            rl.question(questions[answerArray.length],getAnswer);
        }else{
            done(answerArray);
            exit();
        }
    }

    rl.question(q1 , getAnswer);
    
}

getAnswer(questions, answers=>{
    console.log(answers);
});
