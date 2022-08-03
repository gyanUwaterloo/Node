const {stdout} = require("process");
class Logger{
    constructor(props){
        this.logs = [];
    }
    get count(){
        return this.logs.length;
    }

    log(message){
        this.logs.push(message);
        const timeStamp = new Date().toString();   
        stdout.write(timeStamp+" >>> "+message+"\n");
    }
}

// If we return the Class , then every new call will create a new instance of Logger
//module.exports = Logger;

//But, if we return an instance of Logger, Node will store a single instance in cache and deliver it
module.exports = new Logger();