const { promisify } = require('util');

//This is an async process tahat takes as input param No. of seconds after which to execute callback
//Make sure to return the =first argument of call back as error or null and catch it appropriately at end
delay = (seconds, callback) =>{
    if(seconds > 4){
        callback(new Error("Error mesage"));
    }else{
        setTimeout(()=>{
            callback(null,"Message after delay")
        }, seconds*1000)
    }
}

let promisifyDelay = promisify(delay);
promisifyDelay(3)
    .then(console.log)
    .catch((error)=>console.log(error.message));
// delay(3,()=>{
//     console.log("The message after timelapse");
// })