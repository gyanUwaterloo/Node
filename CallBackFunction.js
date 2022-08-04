let { promisify} = require("util");
var delay = (seconds, callback)=>{
    if(seconds > 3){
        callback(new Error(`Waiting ${seconds} seconds should be less than 3`))
    }else{
        setTimeout(()=>{  callback(null, "Hello",seconds)},seconds*1000);
    }
}

var promiseDelay = promisify(delay);

promiseDelay(4)
    .then((a,b)=>{ console.log(a+ " "+ b)})
    .catch((error)=>{ console.log(error.message)})

// delay(4,(error, args,seconds)=>{
//     if(error){
//         console.log(error.message);
//     }else{
//         console.log(args+" "+seconds);
//     }
// })
