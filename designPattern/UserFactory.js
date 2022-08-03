var Employee = require("./Employee")
var Customer = require("./Customer")

class UserFactory{
    constructor(props){
    }
    
    getUser(type){
        if(type == "employee"){
            return new Employee(type="employee").setType(type);
        }
    
        if(type == "customer"){
            return new Customer(type="customer").setType(type);
        }
    }
}

module.exports =  new UserFactory();