const logger = require("./designPattern/SingletonLogger");
const HondaCarProto = require("./designPattern/CarPrototypeHonda");
const userFactory = require("./designPattern/userFactory");
const Inventory = require("./designPattern/Inventory")
const InventoryComposite = require("./designPattern/InventoryComposite")
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


//Composite Pattern
const inv = new InventoryComposite("Inventory",0);
const dairy = new InventoryComposite("Dairy Products",0);
// console.log(inv);
const milk = new Inventory("Milk 1%",20);
const milk2 = new Inventory("Milk 2%",30);
const milk3 = new Inventory("Milk 3%",40);
const bread = new Inventory("WHOLE WHEAT BREAD",5);
// console.log(milk);
dairy.addItems(milk);
dairy.addItems(milk2);
dairy.addItems(milk3);
inv.addItems(dairy);
inv.addItems(bread);
console.log(inv.getItems());
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