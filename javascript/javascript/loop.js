// for (expression 1; expression 2; expression 3) {
//    code block to be executed
//   }

// example
// let txt ="";
// for (let i = 1; i < 5; i++){
//     txt += "The number is "+ i + "\n";
// }
// console.log(txt)
// ex 1 defined var i,
// ex 2 defined the range (i < 5) var i must loop 4 times < 5
// ex 3 defined the increment ++


// LOOP through array
// const array = ["Car1","Car2","Car3"];
// let txt="";
// for (let i = 0, len = array.length; array < len ; i++){
//     txt += "Car names: " + array[i] + "\n";
// }                            // some as array[indexValue]
// console.log(txt);



// LOOP For in key, values use for objects such as index
// const object = {fname:"John",lname:"Doe",age:"18"};
// let txt ="";
// for(let x in object){
//     txt += x+": "+ object[x] +"\n"
// }         // x for key if ((2) object[x]) access to every value  can be changed
// console.log(txt)


// LOOP For of for value use for array or map, set..
// const array ="Javascript";
// let txt ="";
// for (let x of array){
//     txt += x + "\n";
// }        // x for value  if 1 but cant be changed
// console.log(txt)



// WHILE loop
// let txt ="";
// let i = 0;
// while (i <= 1 ) {
//     txt += i +"\n";
//     i++;
//   }
// console.log(txt)

// let text = "";
// for (let i = 0; i <= 1; i++){
//     text += i + "\n"
// }
// console.log(text)

// let txt ="";
// let i = 0;
// while (i <= 10 ) {
//     txt += i +"\n";
//     i++;
//   }
// console.log(txt)

// break
// for(let x = 0; x <= 10; x++){
//     if (x === 5){break;}
//     console.log(x);
// }

// continue
// for(let x = 0; x <= 10; x++){
//     if (x === 5){continue;} // skip the 5
//     console.log(x);
// }


// label
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";
// list: {
//     text += cars[0] + "\n";
//     text += cars[1] + "\n";
//     break list;
//     text += cars[2] + "\n";
//     text += cars[3] + "\n";
//   }
// console.log(text);


// const arr = ["abc","dfg","hij","klm"];

// for( let i of arr){ // for of
//     if (i ==="abc"){
//         i = "2" // cant be change
//     }
// }
// console.log(arr)


// const arr = ["abc","dfg","hij","klm"];

// for( let i in arr){ // for in
//     if (arr[i] ==="abc"){ // if specified it will be a value(arr[i]) else an index(i)
//         arr[i] = "2" // can be change
//     }
// }
// console.log(arr)


// const save = {};
// let txt ="";
// function displaybook(){
//     for(let book in save){
//         txt += `${book}: ${save[book]} \n `;
//     }
//     return console.log(txt);
// }
// function addbook(title,author,year,ISO){
//     save.title = title;
//     save.author = author;
//     save.year = year;
//     save.ISO = ISO;
//     save.status = 'available'

// }
// function checkout(title){
//     for (let book in save) {
//         if (save[book] === title) {
//             if (save.status === 'available') {
//                 save.status = "unavailable";
//             } else {
//                 return console.log("Im gay");
//             }
//         }
//     }
// }

// function returnbook(title){
//     for(let book in save){
//         if (save[book] === title){
//             if (save.status === 'unavailable'){
//                 save.status = "available";
//             } else{
//                 return console.log("im gay");
//             }
//         }
//     }
// }
//addbook("2075 will be", "Unknown", "2045", "27818");
//checkout("2075 will be");
//displaybook();
//returnbook("2075 will be");
//displaybook();

//let txt = "";
//for (let i = 0; i <= 20; i++){
//    if (i % 2 === 0) {
//        txt += i + "\n";
//    }
//}
//console.log(txt);

//let sum = 0;
//for (let i = 1; i <= 100; i++) {
//    sum += i;
//}
//console.log(sum);


//for (let i = 10; i > 0; i--) {
//    console.log(i)
//}

//let n = 7 // 7
//let fac = 1
//for (let x = 1; x <= n; x++) { // stop till x is equal to n(7)
//    fac *= x// in each loop we multiply by x 1,2,3,4,5,6,7
//    /* loop 1 1 = 1 * 1 = 1
//       loop 2 1 = 1 * 2 = 2
//       loop 3 1 = 2 * 3 = 6
//       loop 4 1 = 6 * 4 = 24
//       loop 5 1 = 24 * 5 = 120
//       loop 6 1 = 120 * 6 = 720
//       loop 7 1 = 720 * 7 = 5040
//        returns every loop as calucated number
//       */
//}
//console.log(fac)


//const numbers = [1, 3, 5, 7, 9];
//for (let x of numbers) {
//    console.log(x)
//}


//let multiplication =
//console.log(`multiplication table of ${multiplication}`)
//for (let number = 0; number <= 10; number++) {
//    let result = number * multiplication
//    let display = `${number} x ${multiplication} = ${result}`
//    console.log(display)
//}










