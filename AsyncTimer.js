//Use of Timer functions for Anync calls
// Explanation: We get handle to setInterval, setTimeout triggers setInterval and clears Interval on timeup

let progressBar = "|| ";
let seconds = 0;
const getCurrentDate = () =>{
    let date = new Date();
    return date.toLocaleTimeString();
}
const printTime = () =>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    progressBar = "||"+progressBar;
    seconds += 1;
    process.stdout.write(progressBar+ "["+seconds+"]"+ getCurrentDate());
    return 1;
}
const clearTimer = () =>{
    clearInterval(interval);
    console.log("done!");
}


const interval = setInterval(printTime,1000);
setTimeout(clearTimer,10000); 