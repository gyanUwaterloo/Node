var beep = ()=> process.stdout.write('\x07'); 
var delay = (seconds) => new Promise((resolves)=>{
    setTimeout(()=>resolves("Hello"), seconds*1000);
})


const doStuffSeq = async() => {
    console.log("starting!");
    await delay(2)
    console.log("Waiting for some time!");
    beep();
    await delay(3)
    beep();
    console.log("finished!");
} 

doStuffSeq()
    .then(console.log("Sequentil proces completed!"));