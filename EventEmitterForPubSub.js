//Core module odf node js
const events = require("events");

const emitter = new events.EventEmitter();
//Cal back to handle custome events, arguments that ar epassed appears as 2nd and 3rd.. arguments
emitter.on("CustomEvent", (message,sender) => {
    let messageAsJson = {
        "Message": message,
        "SendBy":sender
    }
    console.log(messageAsJson);
})

//This Custome Event handles messages send from any device
emitter.emit("CustomEvent","Message Data","Computer");
