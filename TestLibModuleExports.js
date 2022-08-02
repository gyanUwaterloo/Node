const getAnswers = require("./lib/collectAnswers")
const questions= [
    "What is your name?",
    "What's your dream company to work for?",
    "Whats your salary expectation?"
]

const answerEvents = getAnswers(questions,answers =>{
    console.log(answers);
});

answerEvents.on("answer", answer=> console.log(`Event Answer triggered ${answer}`))
answerEvents.on("completed", answers => console.log(`All Answer triggered ${answers}`))