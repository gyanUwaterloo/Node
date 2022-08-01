const readline = require("readline");
const { log } = require("util");

const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

rlInterface.question("What is your name?",answer=> {
    log("Welcome to Node Concept Session "+ answer);
    process.exit();
})