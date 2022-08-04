class Chef{
    constructor(){
        this.nextHandler = {}; 
        this.orderList = [];
        this.currentOrder = {};
        this.isProcessing = false;
    }
    setOrder = orders =>{
        console.log("orders pushed");
        orders.map(item=>{
            this.orderList.push(item);
        })
        
    }

    setCurrentOrder=(order)=>{
        console.log("Current order set");
        this.currentOrder = order;
    }
    setNextHandler = (obj) =>{
        this.nextHandler = obj;
    }

    handleCompletedEvent = () =>{
        console.log("Order procesed by chef");
        this.nextHandler.handleCompletedEvent();
        this.handleInputEvent();
    }

    handleInputEvent = ()=>{
        console.log("Order processing by chef...");
        this.setCurrentOrder( this.orderList.pop());
        if(this.currentOrder != null ){
            console.log(this.currentOrder);
            console.log(`Preparing ${this.currentOrder.itemName} ..takes around ${this.currentOrder.time} seconds`)
            setTimeout(this.handleCompletedEvent, this.currentOrder.time*1000) ;
        }else{
            console.log(this.orderList);
        }   
    }
        
        
    
}

module.exports =  Chef;