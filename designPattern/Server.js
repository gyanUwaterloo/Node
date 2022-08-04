class Server{
    constructor(){
        this.nextHandler = {}; 
    }
    setNextHandler = (obj) =>{
        this.nextHandler = obj;
    }
    handleCompletedEvent = () =>{
        console.log("Order received from chef");
    }

    handleInputEvent = (order)=>{
        console.log("Order forwarded to chef...");
        this.nextHandler.setOrder(order);
        this.nextHandler.handleInputEvent();
    }
}

module.exports =  Server;