const logger = require("./designPattern/SingletonLogger");
const HondaCarProto = require("./designPattern/CarPrototypeHonda");
const userFactory = require("./designPattern/userFactory");
// We dont need to call the below line as we already receive an instance
// const logger = new Logger();
logger.log("Hello World");

var hondaCar = HondaCarProto.clone();
var hondaCar1 = HondaCarProto.clone();

hondaCar.addItemsToAddon("Windshield");
console.log(hondaCar);
console.log(hondaCar1);

var emp = userFactory.getUser(type="employee");
var customer = userFactory.getUser(type="customer");
emp.setFullName("Gyanendu");
emp.addMoney(100);
customer.setFullName("shekhar");
customer.setMoney(500);
customer.deductMoney(50);
console.log(emp);
console.log(customer);
//Let's change the name of directory and file
// const fs = require("fs");
// fs.rename("./singleton","./designPattern", err =>{
//     if(err){
//         throw err;
//     }
// });
// fs.rename("./designPattern/Logger.js","./designPattern/SingletonLogger.js", err =>{
//     if(err){
//         throw err;
//     }
// });