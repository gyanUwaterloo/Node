class Car{
    constructor(nam='default'){
        this._name = nam;
        this._addOns = [];
    }
    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }

    get addOns(){
        return this._addOns.join(', ');
    }

    addItemsToAddon(item){
        this._addOns.push(item);
    }

    clone(){
        let propto = Object.getPrototypeOf(this);
        let cloned = Object.create(propto);
        cloned._name = this._name;
        cloned._addOns = [...this._addOns];
        return cloned;
    }
}

module.exports = Car;