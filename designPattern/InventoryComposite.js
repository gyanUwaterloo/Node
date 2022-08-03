class InventoryComposite{
    constructor( itemName = "Inventory",price=0){
        this.inventoryList = [];
        this.name = itemName;
        this.price = price;
    }

    getItems = () =>{
        return this.inventoryList;
    }

    addItems = (item) =>{
        this.inventoryList.push(item);
        this.price+=item.getPrice();
    }
    getPrice = () =>{
        return this.price;
    }
}

module.exports = InventoryComposite;