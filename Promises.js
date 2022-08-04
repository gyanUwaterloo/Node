//Idea behind is to not return a value but wait for an async operator to complete
var printMessage = (message)=> { return message}
var delay = (seconds) => new Promise((resolves,rejects)=>{
    //It can be either done by directly passing the resoves fuction
    //setTimeout(resolves,seconds*1000);
    //or it can pass afuction that can be used to pass resolves with params
    setTimeout(()=>{
        resolves(seconds.toString())
    },seconds*1000);
})

delay(5)
    .then((result)=>{
        console.log(`We have waited for ${result} seconds`);
    })
    .then(()=>42)
    .then((number)=> console.log(number));