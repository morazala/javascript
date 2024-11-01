"use strict"; 
// print 1 to 100
//for (let i = 0; i <= 100; i++) {
//    console.log(i);
//}


// print odd numbers
//for (let i = 0; i <= 20; i++) {
//    if (i % 2 === 0) {
//        continue // <-- this is important CONTINUE (skip if i divisible by 2)
//// what does continue do: only executes if in a (if loop) it will skip depend on the condition
//    }
//    console.log(i) // only print odd numbers
// or use if (i % 2 !== 0) {
//          console.log(i)
//  } if i isn't divisible by 2
//  much easier



// print even numbers
//for (let i = 0; i <= 20; i++) {
//    if (i % 2 === 0) {
//        console.log(i);
//    }
//}



// print all numbers which are divisible of 5 in 1 to 100
//for (let i = 1; i <= 100; i++) {
//    if (i % 5 === 0) {
//        console.log(i)
//    }
//}


// Print all numbers which are divisible of 5 and 15 in 1 to 100.
//for (let i = 1; i <= 100; i++) {
//    if (i % 5 === 0 && i % 15 === 0) {
//        console.log(i);
//    }
//}



// Print 2's table which is the muplication table of 2
//let mul = 2;
//for (let i = 1; i <= 10; i++) {
//    let result = mul * i;
//    console.log(`${mul} x ${i} = ${result}`);
//}



// Calculate sum of all numbers from 1 to 100
//let sum = 0;
//for (let i = 0; i <= 100; i++) {
//    sum += i;
//}
//console.log(sum);



// Calculate sum of all odd numbers from 1 to 100.
//let sum = 0;
//for (let i = 1; i <= 100; i++) {
//    if (i % 2 === 0) {
//        continue;
//    }
//    sum += i
//}
//console.log(sum)



//Calculate sum of all even numbers from 1 to 100.
//let sum = 0;
//for (let i = 1; i <= 100; i++) {
//    if (i % 2 === 0) {
//        sum += i;
//    }
//}
//console.log(sum)



//Print 1,2,4,8,16,32,64.......upto 2048.
//let mul = 1;
//let mul2 = 2;
//for (let i = 1; i <= mul; i++) {
//    mul *= mul2;
//    if (mul > 2048) {
//        break;
//    }
//    console.log(mul);
//}



/*Print 1 to 100, but with a specific condition. If a number is divisible by both 
3 and 5, it logs "fizzbuzz" to the console instead of the number itself.
*/
//for (let i = 1; i <= 100; i++) {
//    if (i % 15 === 0) {
//        console.log("fizzbuzz");
//    } else {
//        console.log(i)
//    }
//}

/**
Run a loop from 1 to 50
From 1 to 10 print "A"
From 11 to 20 print "B"
From 21 to 30 print "C"
From 31 to 40 print "D"
From 41 to 50 print "E"
 */
//for (let i = 1; i <= 50; i++) {
//    if (i <= 10) {
//        console.log("A")
//    } else if (i >= 11 && i <= 20) {
//        console.log("B")
//    } else if (i >= 21 && i <= 30) {
//        console.log("C")
//    } else if (i >= 31 && i <= 40){
//        console.log("D")
//    } else {
//        console.log("E")
//    }
//}



//for (let i = 50; i >= 0; i--) {
//    if (i <= 50 && i >= 41) {
//        console.log("A")
//    } else if (i <= 40 && i >= 31) {
//        console.log("B")
//    } else if (i <= 30 && i >= 21) {
//        console.log("C")
//    } else if (i <= 20 && i >= 11) {
//        console.log("D")
//    } else {
//        console.log("E")
//    }
//}




/*Print below series:
5 25 125..till number is less than equal to 10000
*/

//let power = 5;
//let base = 0;
//for (let i = 0; i <= base; i++) {
//    base += power;
//    if (base > 10000) {
//        break;
//    }
//    console.log(base);
//}

// that one is bad
// instead of that do this:
//for (let i = 5; i <= 10000; i += 5) {
//    console.log(i)    // i start from 5 and each loop it increases by 5 in the third expression
//}                     // defined how the loop run in the third expression




/*Print below series:
5 25 125..till number is less than equal to 10000
*/
//for (let i = 0; i <= 500; i += 3) {
//    console.log(i)
//}




/*Print below series:
120
221
322
423
524
625
726
827
928
1029
*/
//for (let i = 120; i <= 1029; i += 101) {
//    console.log(i)
//}
/**



Print below series:
100 95 90 85 80 ... till 0
 */
//for (let i = 100; i >= 0; i -= 5) {
//    console.log(i)
//}


//print the number that divisible by 70
//let power = 70;
//for (let i = 1; i <= 70; i++) {
//    if (power % i === 0) {
//        console.log(i)
//    }
//}




// while loop
//let i = 0;
//while (i <= 10) {
//    console.log(i)
//    i++;
//}




// Calculate sum of all numbers from 1 to 10.
//let i = 0;
//let sum = 0;
//while (i <= 10) {
//    sum += i;
//    console.log(sum);
//    i++;
//}



// Counting down from 10 to 1
//let i = 10;
//while (i > 0) {
//    console.log(i);
//    i--; // this is important whenever we do an iteration loop
//}



//print 2's table
//let power = 6;
//let i = 1;
//let res
//while (i <= 10) {
//    res = power * i;
//    console.log(`${power} x ${i} = ${res}`);
//    i++;
//}




//Calculate sum of all odd numbers from 1 to 100.
//let i = 1;
//let sum = 0;
//while (i <= 100) {
//    if (i % 2 !== 0) { // !== is the simplest way to have numbers that dont divisible by 2 odd(numbers)
//        sum += i; // avoid using continue to create odd nums in either while or for loop, if use continue must use both i++ inside if condition and outside otherwise (continue) will skip the whole loop
//        console.log(sum);
//    }
//    i++;
//}





// PATERN QUESTIONS
/*
Question 33
Print pattern

1
11
111
1111
11111

*/
//for (let i = 1; i <= 5; i++) { // row
//    let line = "";
//    for (let j = 1; j <= i; j++) { // column
//        line += 1
//    }
//    console.log(line)
//}




/*
Question 34
Print pattern

---

---

---

*/

//let text = "";
//for (let i = 0; i < 3; i++) {
//    text += "---" + "\n \n";
//}
//console.log(text)




/*
Question 35
Print pattern

***
***
***
***

*/

//let text = "";
//for (let i = 0; i <= 4; i++) {
//    text += "***" + "\n";
//}
//console.log(text)




/*
Question 36
Print pattern

12345
1234
123
12
1

*/

//for (let i = 5; i > 0; i--) { // row
//    let text = "";
//    for (let j = 1; j <= i; j++) { // column
//        text += j;
//    } console.log(text);
//}



/*
Question 37
Print pattern

54321
5432
543
54
5

*/
//for (let i = 0; i <= 5; i++) {
//    let text = "";
//    for (let j = 5; j > i; j--) {
//        text += j;
//    }
//    console.log(text)
//}


/*
Question 38
Print pattern

54321
4321
321
21
1

*/

//for (let i = 5; i > 0; i--) { // row
//    let text = "";
//    for (let j = i; j > 0; j--) { // column
//        text += j;
//    } console.log(text)
//}




/*
Question 40
Print pattern

*****
****
***
**
*
*
**
***
****
*****

*/

//for (let x = 0; x <= 4; x++) { // avoid white space
//    let text = "";
//    for (let y = 5; y > x; y--) {
//        text += "*";
//    }
//    console.log(text);
//}
//for (let x = 1; x <= 5; x++) { // avoid white space
//    let text = "";
//    for (let y = 1; y <= x; y++) {
//        text += "*";
//    }
//    console.log(text);
//}



/*
Question 41
Print pattern

10987654321
987654321
87654321
7654321
654321
54321
4321
321
21
1

*/

//for (let i = 10; i > 0; i--) {
//    let text = "";
//    for (let j = i; j > 0; j--) {
//        text += j
//    }console.log(text)
//}



/*
Question 41
Print pattern

*
**
***
****
*****
****
***
**
*

*/

//for (let x = 1; x <= 5; x++) {
//    let text = "";
//    for (let y = 1; y <= x; y++) {
//        text += "*";
//    } console.log(text);
//}
//for (let x = 4; x > 0; x--) {
//    let text = "";
//    for (let y = x; y > 0; y--) {
//        text += "*";
//    } console.log(text);
//}



/*
Question 43
Print pattern

*********
 *******
  *****
   ***
    *
*/

//for (let x = 1; x <= 5; x++) { // defind the row
//    let text = "";
//    for (let y = 1; y < x; y++) { // defind how the space work
//        text += " ";
//    }
//    for (let z = 9; z >= (2 * x - 1); z--) { // defind how the * work
//        text += "*";
//    }
//    console.log(text);
//}




/*
Question 44
Print pattern

     *
    ***
   *****
  *******
 *********
***********

*/

//for (let x = 1; x <= 6; x++) {
//    let text = "";
//    for (let y = 6; y > x; y--) {
//        text += " "
//    }
//    for (let z = 1; z <= 2 * x - 1 ; z++) {
//        text += "*"
//    } console.log(text)
//}







// string


/**
 * Question 1:
 * Split this string using space and find length.
 */


//const str = "My name is learn javascript";

//let warr = str.split(" ")
//let len = warr.length
//console.log(len)



/**
 * Question 2
 * Write a program to check if a string is palindrome or not?
 */

// let str = "refer";

// // reverse the string
// const reverse = function reverses(string){
//     return string.split("").reverse().join("");
// }

// let reversed = reverse(str);
// // compare the reversed string with the original
// if (reversed === str){
//     console.log("is a palindrome");
// } else{
//     console.log("not a palindrome");
// }


/**
 * Question 3
Write a program to reverse a string. For example:

Hello -> olleH
Bye -> eyB

 */
// let str = "World";
// const reverves = (string) => string.split("").reverse().join("");
// let a = reverves(str);
// console.log(a)



/**
 * Question 4
 * Captialize first character of the String. For example:
 * learnjavascript -> Learnjavascript
 * hello -> Hello
 */
// let str = "hello";
// const captialize = (string) =>  string[0].toUpperCase() + string.slice(1,);
// let b = captialize(str);
// console.log(b);




/**
 * Question 6
    In a string convert uppercase character to lowercase and vice versa.
    HeLlo -> hElLO
    leArNjavaScript -> LEaRnJAVAsCRIPT
 */

// let str = "leArNjavaScript";
// let x = ""
// for (let i of str){
//     if (i === i.toUpperCase()){
//         x += i.toLowerCase();
//     } else {
//         x += i.toUpperCase();
//     } 

// }
// console.log(x);

/**
 * Question 7
 * Camelize the string. for example:
Hello World -> helloWorld
my name is Sajid -> myNameIsSajid
learn javascript -> learnJavascript
 */
// let str = "hello hello";
// function convert(string){
//    let word = string.trim().split(" ").map((value,index) => {
//       if(index === 0){
//          return value.toLowerCase();
//       }
//       return value[0].toUpperCase() + value.slice(1,) // note: map or any method that need a callback function, always using return statement
//    }).join("");
//    return word;
// }
// let a = convert(str)
// console.log(a)




/**
 * Question 8
 * Count number of spaces in a string.
 */
// let str = "112  hiuds hsad   fuh kidhu  shs  ad";

// function count(string){
//    let result = 0;
//    for(let x of string){
//       if (x === " "){
//          result += 1;
//       }
//    }
//    return result
// }
// let a = count(str);
// console.log(a)



/**
 * Question 9
Print below pattern using repeat function:
1111111111
222222222
33333333
4444444
555555
66666
7777
888
99
0
*/

// for (let i = 1; i <= 10; i++){
//    console.log(i.toString().repeat(10 - i + 1))
// }



/**
 * Question 9
 * Take a string and if in that string anything is there other 
 * than the characters $, _, number, a-z, A_Z then remove them 
 * from the string. Do it with regex and without regex. 
 * for example:
 *    We%^%$Cod!@#e -> We$Code
 */
// WITH REGEX
// let str ="We%^%$Cod!@#e";
// let matched = str.match(/[$_0-9a-zA-Z]/g).join("")
// console.log(matched)
/* note: use [] when we want the string matches any specified
 expressions inside the [] 
 example we only want it appears the result of the number 
 from 1 to 4 [1-4] it will appear 1234.
 not use [] when it is a sentence example
 /abc/
 result: show the exactly abc
 */

// WITHOUT REGEX
// let str = "We%^%$Cod!@#e"
// let str2 = ""
// for(let x of str){
//    if (
//       x >= 'a' && x <= 'z' ||
//       x >= 'A' && x <= 'Z' ||
//       x >= '0' && x <= '9' ||
//       x === "$" ||
//       x === "_"

//    ){
//       str2 += x
//    }
// }
// console.log(str2)





// SOME EXERCISE