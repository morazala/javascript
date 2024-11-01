// const add = ["Lemon"];

// function addan(a,b){
//     if (a !== b || b !== a){
//         add.push("Lemon");
//     };
// }

// function remove(a,b){
//     if (a == b || a > b )
//         delete add[0];
//         // add[0]= null;
// };

// remove(3,3);
// console.log(add);


// const save = [];
// function addbook(title, author, year){
//     save.push(title);
//     save.push(author);
//     save.push(year);
//     console.log(save);
// }
// function displaybook(){
//         console.log("Title: "+ save[0]);
//         console.log("Author: "+ save[1]);
//         console.log("Year: "+ save[2]);
// }
// addbook("whoever moves first is gay","unknown", "2024");
// displaybook();



// function Book(title, author, year, genre, status){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.genre = genre;
//     this.status = status;
//     this.save = [];
//     this.displaybook = ()=> {
//         console.log("Title: "+ this.save[0]);
//         console.log("Author: "+ this.save[1]);
//         console.log("Year: "+ this.save[2]);
//         console.log("Genre: "+ this.save[3]);
//         console.log("Status: "+ this.save[4]);
//     }
//     this.addbook = ()=>{
//         this.save.push(this.title);
//         this.save.push(this.author);
//         this.save.push(this.year);
//         this.save.push(this.genre);
//         this.save.push(this.status);
//         console.log(this.save)
//     }
//     this.checkout = ()=>{
//         if (this.save[4] === "Available") {
//             this.save[4] = "Not available";
//             console.log("Book checked out successfully!");
//         } else {
//             console.log("Book is already checked out.");
//         }
//     };
//     this.returnback = ()=>{
//         if (this.save[4] === "Not available") {
//             this.save[4] = "Available ";
//             console.log("Book returned successfully!");
//         } else {
//             console.log("Book is already returned.");
//         }
//     };
// }

// let object = new Book(".....","unknown", "2024", "the story","Available");
// let useaddbook = object.addbook();
// let usedisplaybook = object.displaybook();
// let checkoutbook = object.checkout();
// object.displaybook();
// let returnback = object.returnback();
// object.displaybook();

// let object2 = new Book("HADAS","EEEE", "2099", "dead story","Available");
// let useaddbook2 = object2.addbook();
// let usedisplaybook2 = object2.displaybook();
// let checkoutbook2 = object2.checkout();
// object2.displaybook();
// let returnback2 = object2.returnback();
// object2.displaybook();


// const students = [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 72 },
//     { name: "Charlie", score: 90 },
//     { name: "David", score: 88 }
// ];
// function findStudent(name) {
//     const student = students.find(student => student.name === name);
//     if (student) {
//         console.log(`${student.name} has a score of ${student.score}`);
//     } else {
//         console.log(`Student ${name} not found`);
//     }
// };

// function sorthightolow(){
//     let a = students.sort(function(a,b){return b.score - a.score});
//     return console.log(a);
// };

// function sortlowtohigh(){
//     let a = students.sort(function(a,b){return a.score - b.score});
//     return console.log(a);
// };
// findStudent("Bob");
// sorthightolow();
// sortlowtohigh();

// const cars = [
//     {name:"Volvo", model:"2024", owner:"John"},
//     {name:"BMW", model:"2022", owner:"Sarah"},
//     {name:"Toyota", model:"2021", owner:"someone"},
//     {name:"Volvo", model:"2025", owner:"unknown"},
//     {name:"Troyota", model:"2019", owner:"Jack"},
//     {name:"Velvo", model:"2018", owner:"Bob"}
// ];

// function findcar(name){ // parameter
//     let found = cars.find(found => found.name === name);
//     if (found){       // arrow func returns a value if found
//         return console.log(`Found car name: ${found.name}| \n Model: ${found.model}| \n Carowner: ${found.owner}| `);
//     } else {
//         return console.log(`Car named ${name} not found`);
//     };
// };

// findcar("Toyota")

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(//parameters go here value => //logics go here value > 18 );
// console.log(first)
/* find = (functionname(parameters){logic goes here}) or
		  (parameter => logic goes here)
					^^^^
			WARNING THIS IS ARROW FUNCTION
*/

// const cars = [
//     {name:"Volvo", model:"2024", owner:"John"},
//     {name:"BMW", model:"2022", owner:"Sarah"},
//     {name:"Toyota", model:"2021", owner:"someone"},
//     {name:"Volvo", model:"2025", owner:"unknown"},
//     {name:"Troyota", model:"2019", owner:"Jack"},
//     {name:"Velvo", model:"2018", owner:"Bob"}
// ];

// function findcar(name){ // parameter
//     let found = cars.find(function(found){return found.name === name});
//     if (found){
//         return console.log(`Found car name: ${found.name}| \n Model: ${found.model}| \n Carowner: ${found.owner}| `);
//     } else {
//         return console.log(`Car named ${name} not found`);
//     };
// };

// findcar("Toyota")


// const pplInBoat = [
//     {NameBoat:"Boat1",people:"289"},
//     {NameBoat:"Boat2",people:"182"},
//     {NameBoat:"Boat3",people:"122"},
//     {NameBoat:"Boat4",people:"345"}
// ];

// function findboatname(name){
//     let found = pplInBoat.find(function(value){return value.NameBoat === name});
//     // let found = pplInBoat.find((value) => value.NameBoat === name);
//     if (found){
//         return console.log(`Boat name ${found.NameBoat} has ${found.people} people`);
//     } else{
//         return console.log(`${name} not found`);
//     }
// };

// function sortpplLowtoHigh(){
//     let a = pplInBoat.sort(function(a,b){return a.people - b.people})
//     return console.log(a);
// };

// function sortpplHightoLow(){
//     let a = pplInBoat.sort(function(a,b){return b.people - a.people})
//     return console.log(a);

// };

// findboatname("Boat1");
// sortpplLowtoHigh();
// sortpplHightoLow();

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//                             default:
//                                 day = "no values";

// }

// console.log(`today is ${day}`)


 //const list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 //function evenandodd(){
 //	let txt ="";
 //	list.forEach((value)=> {
 //		if (value % 2 === 0){
 //			txt += `even numbers: ${value}` +"\n";
 //		} else{
 //			txt += `odd numbers: ${value}` +"\n";
 //			}
 //		});
 //	console.log(txt);
 //};
 //evenandodd()

//const arr = [];
//let n = 10;
//for (i = 1; i <= n; i++) {
//	if (i % 15 === 0) { // think outside a box instead of write i % 3 === 0 && i % 5 === 0
//		arr.push("Fizzbuzz");
//	} else if (i % 3 === 0) {
//		arr.push("Fizz");
//	} else if (i % 5 === 0) {
//		arr.push("Buzz");
//	} else {
//		arr.push(i.toString());
//	}
//}
//console.log(arr);

///**
// * @param {string} val
// * @return {Object}
// */
//var expect = function (val) {
//    return {
//        toBe:function (val1) {
//            if (val === val1) {
//                return true;
//            } else if (val !== val1) {
//                throw new Error("Not Equal");
//            }

//        },
//        notToBe: function (val2) {
//            if (val === val2) {
//                throw new Error("Equal");
//            } else if (val !== val2) {
//                return true;
//            }
//        }
//    }
//};
//expect(5).toBe(6);

///**
//* @param {integer} init
//* @return { increment: Function, decrement: Function, reset: Function }
//*/
//var createCounter = function (init) {
//	return {
//		increment: function() {
//			return ++init;
//		},
//		reset: function () {
//			return init = init
//		},

//		decrement: function () {
//			return --init;
//		}

//	}
//};


// const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

///**
// * @param {number[]} arr
// * @param {Function} fn
// * @return {number[]}
// */
//var map = function (arr, fn) {
//	const tranformer = [];
//	for (let i = 0; i < arr.length; i++) {
//		tranformer.push(fn(arr[i],i))
//	}
//};

//var map = function (arr, fn) {
//	const tranformer = [];
//	arr.forEach((value, index) => tranformer.push(fn(value, index)))
//	return tranformer
//};


///**
// * @param {number[]} arr
// * @param {Function} fn
// * @return {number[]}
// */
//var filter = function (arr, fn) {
//    const transformed = [];
//    for (let item = 0; item < arr.length; item++) {
//        if (fn(arr[item], item)) {
//            transformed.push(arr[item]);
//        }
//    }
//    return transformed;
//};


//for (i = 0; i <= 1000; i++) {
//	let a = Math.floor(Math.random() * 101)
//	console.log(a)
//}





///**
// * @param {number[]} nums
// * @param {Function} fn
// * @param {number} init
// * @return {number}
// */
//var reduce = function (nums, fn, init) {
//	res = init
//	for (i = 0; i < nums.length; i++) {
//		res = fn(res, nums[i]);
//	}
//	return res
//};


//function countOccurrences(arr) {
//	const res = {}
//	for (let i = 0; i < arr.length; i++) {
//		if (res[arr[i]]) {
//			res[arr[i]] += 1; // or ++
//		} else {
//			res[arr[i]] = 1;
//		}
//	}
//	return res;
//}
//const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
//console.log(countOccurrences(numbers));
//// Expected output: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

//function countWords(sentences) {
//	const res = {}
//	for (let i = 0; i < sentences.length; i++){
//		let a = res[sentences[i]]
//		console.log(a)
//		if (res[sentences[i]]) { // res["hello"]
//			res[sentences[i]]++;
//		} else {
//			res[sentences[i]] = 1
//		}
//	}
//	return res
//}
//const sentence = "Hello, hello! How are you? Are you fine?";
//const cleanedSentence = sentence.toLowerCase().replace(/[.,?!]/g, '');
//const sens = cleanedSentence.split(' ');
//console.log(countWords(sens))

// what is compostion
//const f = x => x + 1; // create a function f that has a parameter then returns it
//const g = x => 2 * x;// create a function g that has a parameter then returns it
//const n = x => f(g(x)) // create a function n that composes the function f and g passes x

//let a = n(4)
//console.log(a)



///**
// * @param {Function[]} functions
// * @return {Function}
// */

//var compose = function (functions) {
//	// check if the array is empty
//	if (functions.length === 0) {
//		return (x) => { return x }; // for case 3
//	};
//	// using reductRight to reverses the functions
//	return functions.reduceRight((previousfunc, currentfunc) => {
//		return (x) => { // compose happens here
//			return currentfunc(previousfunc(x));// compose 2 function
//		};
//	}) // takes 2 params
//}


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


///**
// * @param {...(null|boolean|number|string|Array|Object)} args
// * @return {number}
// */
//var argumentsLength = function (...args) {
//	return args.length
//};

///**
// * argumentsLength(1, 2, 3); // 3
// */

// what is reverse?

//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function abc(){ // i will start at the begining j will start at the end, ends when i meets j
//	for (let i = 0, j = nums.length - 1; i < j; i++, j-- ) {
//		console.log(nums)
//		let temp = nums[j];
//		nums[j] = nums[i]; // j swaps i, 10,9,8,7,6 = 5,4,3,2,1  1 > 2 output: 10,9,8,7,6
//		nums[i] = temp;		// i swaps temp[j] 5,4,3,2,1 = 10,9,8,7,6 2 > 1 output 5,4,3,2,1
//	}

//	return nums;
//}
//console.log(abc())

//function reversedstring(word) {
//	const reverses = [];
//	let txt = "";
//	for (let char in word) { // convert to array
//		reverses.push(word[char]);
//	}

//	for (let i = 0, j = reverses.length - 1; i < j; i++, j--) { // reverse
//		let temp = reverses[i];
//		reverses[i] = reverses[j];
//		reverses[j] = temp;
//	}

//	for (let char of reverses) { // display correctly
//		txt += char;
//	}
//	return txt;
//}
//let a = reversedstring("Hello");
//console.log(a);


//function cal(nums) {
//	let transformed = []
//	let sum = 0;
//	for (i = 0; i < nums.length; i++) {
//		sum += nums[i]
//	}
//	transformed.push(sum)
//	return transformed
//};
//let a = cal([5,3,6,2,3])
//console.log(a)


//function sum() {
//	let res = 0;
//	for (let i = 0; i < arguments.length; i++) {
//		res += arguments[i]
//	}
//	return res
//}

//let a = sum(1, 2, 3, 4, 4)
//console.log(a)

// find the largest number

//function largestnumber(arr) {
//	const tranformed = [];
//	let lgnum = arr[0]; // store the number
//	for (let i = 0; i < arr.length; i++) {
//		if (arr[i] > lgnum) { // if the value in the array bigger than the varible lgnum else(if the lgnum is bigger than the value in the array) it will keep the lgnum which is already the biggest
//			lgnum = arr[i]; // then update the lgnum = previous arr[i] value
//		} /* example :
//				loop1: if( 10 (which is arr[i]) > 10 (which is lgnum) ) false keep the lgnum = 10 (which is arr[0])
//				loop2: if( 2 (which is arr[i]) > 10 (which is lgnum) ) false keep the lgnum = 10 (which is arr[0])
//				loop3: if( 99 (which is arr[i]) > 10 (which is lgnum) ) true update the lgnum (which is arr[0]) = 99 (which is the current arr[i])
//				loop4: if( 88 (which is arr[i]) > 99 (which is lgnum) ) false keep the lgnum = 99 which is arr[0]
//				*/
//	}
//	tranformed.push(lgnum)
//	return tranformed
//}
//const nums = [10, 2, 99, 88];
//let a = largestnumber(nums);
//console.log(a);



// check whether a number is prime or not
//function isprime(n) {
//	if (n <= 1) { // if n is equal to or smaller than 1
//		return false // return false
//	}
//	for (let i = 2, result = Math.sqrt(n); i <= result; i++) { // check for expression
//		/**
//		The PURPOSE of the for loop is to CHECK the numbers in the RESULT
//		and i MUST be from 2 otherwise, it will always return an incorrect result,
//		and WILL END when all numbers in the result RANGE are CHECKED.
//		EXAMPLE: the square root of 17 is 4.1 then it checks the number
//		start from 2 to 4 2,3,4
//		 */
//		if (n % i === 0) { /* check  the prime number if n(17) is divisible
//						by the numbers in i then return false*/
//			return false
//		}

//	}
//	return true // if none of the above is true then return true
//}
//let a = isprime(7)
//console.log(a)



// remove duplication
//function removeDuplication(arr) {
//	let newarr = [];
//	for (i = 0; i < arr.length; i++) {
//		if (!newarr.includes(arr[i])) {
//			newarr.push(arr[i]);
//		} 
//	}
//	return newarr;
//}

//const nums = [1, 1, 2, 3, 4, 4, 5, 6, 6, 8, 8, 9];
//let a = removeDuplication(nums);
//console.log(a);























