class Employee{
    constructor(fullname="default", type="none", money=0, employer="none"){
        this._fullname = fullname;
        this._type = type;
        this._money = money;
    }
   
    addMoney(money){
        this._money += money;
    }

    setType(type){
        this._type = type;
        return this;
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

module.exports = Employee;