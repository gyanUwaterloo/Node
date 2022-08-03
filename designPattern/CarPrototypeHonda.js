var Car = require("./PrototypeCar")

var hondaCar = new Car("Honda");
hondaCar.addItemsToAddon("Wiper");
hondaCar.addItemsToAddon("Cabin");

module.exports = hondaCar;