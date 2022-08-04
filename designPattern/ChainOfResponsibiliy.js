const Server = require("./Server");
const Chef = require("./Chef");

var chef = new Chef();
var server = new Server();
chef.setNextHandler(server)
server.setNextHandler(chef);
var orders1 = [{"itemName":"Cake", "price":10,"time":10},{"itemName":"Burger", "price":5,"time":12}]
var orders2 = [{"itemName":"Pudding", "price":10,"time":5},{"itemName":"Naan", "price":5,"time":7}]
// server.handleInputEvent(orders1);
server.handleInputEvent(orders2);


