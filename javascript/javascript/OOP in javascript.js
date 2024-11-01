class Car { // defind the logic
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getinfo() {
        return `name: ${this.name} \nmodel: ${this.model} \nyear: ${this.year}`;
    }
    static fukcing() {
        return "fukcing static";
    }
}
class Company extends Car { // inheritance
    constructor(name, model, year, company) { // must include all params in class Car in order to have a inheritance
        super(name, model, year); // use super to extract all params in class Car
        this.company = company;
    }
    fullinfor() {
        return `${this.getinfo()}\nsecretInfor: ${this.company}`;
    }              // use a method of the Car constructor
}

let object3 = new Company("Volvo", "V12", "2025", "XX-212XX-123XX-9123");
let use = object3.fullinfor();
console.log(use);


// defind how to use classes

//let name = "Volvo";
//let model = "V4";
//let year = "2022";
//let object = new Car(name, model, year);
//let object2 = new Car("Volvo", "V12", "2025");
//let use = object.getinfo();
//let use2 = object2.getinfo();
//console.log(use);
//console.log(use2);
