//This is the way an async function should be made 
const { stdin, stdout, exit } = require("process");
const readline = require("readline");
const { EventEmitter} = require("events");
const rl = readline.createInterface({
    input: stdin,
    output:stdout
})


module.exports = (questions, done =f => f) =>{
    const answerArray = [];
    const [q1] = questions;
    const emitter = new EventEmitter();
    const getAnswer = answer =>{
        emitter.emit("answer",answer);
        answerArray.push(answer);
        if(answerArray.length < questions.length){
            rl.question(questions[answerArray.length],getAnswer);
        }else{
            emitter.emit("completed",answerArray);
            done(answerArray);
            exit();
        }
    }

    rl.question(q1 , getAnswer);
    return emitter;
}