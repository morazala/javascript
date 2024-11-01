// OBJECT
// const cars ={type:"Flat",model:"2024",color:"white"};
// // Create an Object
// const person = {};
// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person['firstName'])

// constructor (hard)
// function father(name, age, eyes, hair, job) {
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.job = job;
//     this.startwalk = function() {
//         return console.log("Walking....");
//     }
// }

// const myfather = new father("John","58","Blue eyes", "Brown hair", "worker");
// const yourfather = new father("Sam","59","Brown eyes", "Black hair", "farmer");
// myfather.startwalk();
// console.log(yourfather);

// function cars(carname, carmodel, carcolor, carid){
//     this.carname = carname;
//     this.carmodel = carmodel;
//     this.carcolor = carcolor;
//     this.carid = carid;
// }

// const owner1 = new cars("Flat","2024","White","29283");
// const owner2 = new cars("LLC","2025","Red","58292");

// cars.prototype.carowner = "unknown";


// console.log("Car information: "+ "Car name: "+ owner1.carname + " "+ "Car model: " + owner1.carmodel + " "+ "Car color: " + owner1.carcolor + " " + "Car id: " + owner1.carid + " "+ "Car owner: "+ owner1.carowner );
// console.log("Car information: "+ "Car name: "+ owner2.carname + " "+ "Car model: " + owner2.carmodel + " "+ "Car color: " + owner2.carcolor + " " + "Car id: " + owner2.carid + " "+ "Car owner: "+ owner2.carowner );

// function father(name, age, eyes, hair, job) {
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.job = job;
//     this.startwalk = function() {
//         return console.log("Walking....");
//     }
// }

// const myfather = new father("John","58","Blue eyes", "Brown hair", "worker");
// const yourfather = new father("Sam","59","Brown eyes", "Black hair", "farmer");

// myfather.changemethod = function(anothername) {
//     this.name = anothername
// }

// myfather.changemethod("steve")

// console.log(myfather.name)



// function airline(passanger, id, from, to, delay){
//     this.passanger = passanger;
//     this. id = id;
//     this.from = from;
//     this.to = to;
//     this.delay = delay;
// }

// const airline1 = new airline("249","KLM0923","Lui","Pep","Yes");
// const airline2 = new airline("150","ABc1212","Pep","Lui","Yes");

// airline.prototype.time = "2 hours"; // add time for all
// console.log(airline1.time);
// console.log(airline2.time);

// airline1.changedelay = function(timedelay){
//     return this.delay = timedelay; // change value only for airline1
// }
// airline1.changedelay("delay for 1 hours 30 minutes");

// airline.prototype.timedelay = function(timedelay){
//     return this.delay = timedelay
// }
// airline1.timedelay("delay yo bro what sup")

// console.log(airline1);
// console.log(airline2);


// function Circle(radius) {
//     this.radius = radius;
//     this.areas = ()=> { // arrow function
//         return Math.PI * this.radius * this.radius;
//     };
// }

// let defaultclass = new Circle(3);
// let usemethod = defaultclass.areas()
// console.log(usemethod)
// use method


// function party(male, female){
//     this.male = male;
//     this.female = female;
//     this.cal1 = ()=>{
//         return this.male - this.female;
//     };
//     this.cal2 = ()=>{
//         return this.female - this.male;
//     };
// };

// let object = new party(10,5);
// let use1 = object.cal1();
// let use2 = object.cal2();

// console.log(use1);
// console.log(use2);


// defineProperty method
//const person = {
//	firstName: "John",
//	lastName: "Doe",
//	language: "EN"
//};

//// Add a Property // syntax Object.defineProperty( objectName, keyName, { value: "valueHere" }   )
//Object.defineProperty(person, "year", {
//	value: "2008",
//	writable: true, // some methods // changeable
//	enumerable: true, // can be displayed
//	configurable: false // cannot changeable
//}); // use for add
//Object.defineProperty(person, "language", { value: "NO" }); // use for change value
//let a = Object.getOwnPropertyNames(person)
//console.log(a)
//console.log(person)



// object methods

//const target1 = { key: "for target1", key2: "abc" };
//const target2 = { key: "for target2" };
//Object.assign(target1, target2)
//// mergin the target2 to the source target1
//console.log(target1) // output: { key: "for target2" }
//let a = Object.entries(target1)
//console.log(a)

//const planes = {
//    type1: "Boeing",
//    type2: "abc",
//    type3: "abc"
//}
//for ([key, value] of Object.entries(planes)) {
//    let display = key + ": " + value
//    console.log(display)
//}

// get set

//const planes = {
//    type1: "Boeing",
//    type2: "abc",
//    type3: "abc",
//    get inline(){
//        return this.type1;
//    }
//};

//console.log(planes.inline)


//const planes = {
//    type1: "Boeing",
//    type2: "abc",
//    type3: "abc",
//    set inline(value) {
//        return this.type1 = value;
//    }
//};
//planes.inline = 4
//console.log(planes.type1)



