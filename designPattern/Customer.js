class Customer{
    constructor(fullname="default", type="none", money=0, employer="none"){
        this._fullname = fullname;
        this._type = type;
        this._money = money;
    }


    deductMoney(money){
        this._money -= money;
    }


    setType(type){
        this._type = type;
        return this;
    }

    setMoney(money){
        this._money = money;
    }

    
    setFullName(fullname){
        this._fullname = fullname;
    }

    get fullname(){
        return this._fullname;
    }

    get money(){
        return this._money;
    }

    get type(){
        return this._type;
    }

}

module.exports = Customer;