const askQuestions = (i=0)=>{
    process.stdout.write("\n"+questions[i].toString());
    process.stdout.write(">>");
}

process.stdin.on("data", data => {
    answers.push(data.toString());
    if(answers.length < questions.length){
        askQuestions(answers.length);
    }else{
        process.exit();       
    }
})
    
var questions = ["name?","age?","sex?"];
var answers = [];
askQuestions(0);
