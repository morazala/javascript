// const abc = ["Car1","Car2","Car3"];
// let a = abc[0];
// console.log(a);

// const bcd = [];
// console.log(bcd);
// bcd[0] = "Car1";
// bcd[1] = "Car2";
// bcd[2] = "Car3";  // provide items
// console.log(bcd);

// const car = ["Car1 ","Car2 ","Car3 ","Car4 ","Car5 ","Car6 "];
// let convert = car.toString(); // convert to string
// let a = car.length;  // Returns the number of elements
// let b = car.sort();   // Sorts the array
// console.log(a);
// console.log(b);

// const car = ["Car1 ","Car2 ","Car3 ","Car4 ","Car5 ","Car6 "];
// car.push("Lemon") // add a item
// console.log(car)

// const fruits = ["Lemon","Apple","Banana"];

// function checkcondition(name){
//     if (fruits[0] == "Lemon" || fruits[0] =="something"){
//         fruits[0] = name;
//     } else if (fruits[fruits.length -1] == "AAAA");{
//         fruits[fruits.length -1] = name; // always last item
//     };
// };

// let a = fruits.push("ABC");
// checkcondition("ABC");
// fruits[fruits.length] = "AAAA"; // another way

// console.log(fruits);

// METHODS
// const group = ["person1","person2","person3","person4"]
// let a = group.length; method 1 get the index length each item += 1
// let a = group[0;]; // get the first item
// let a = group[group.length -1]; // get the last item -1
// let a = group.join(", "); // create something
// let a = group.shift(); // removes the first element from an array and returns it
// let a = group.pop(); // some as shift, but at last index
// let a = group.splice(0,1,"person99","person9999"); //returns deleted item where and how many can also be used to remove item
// let a = group.slice(1) // slice
// console.log(a);
// console.log(group)


// merge 2 array
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys); //use concat() x.concat(y);
// console.log(myChildren);

// SEARCH ARRAY
// const s = ["a","b","c","d"];
// position = s.indexOf("c")
// console.log(position)

// const abc = [5,2,4,2,34,3,3,43,3];
// let find = abc.find(myfunction);
// function myfunction(value,array,index){
//     return value > 3
// };
// console.log(find);

// const abc = [5,2,4,2,34,3,3,43,3];
// let find = abc.findLast(x => x > 10);
// console.log(find);


// SORT ARRAY

// const s = ["b","d","a","c"];
// let abc = s.sort(); // sorts an array alphabetically:
// console.log(abc);

// const s = ["b","d","a","c"];
// let abc = s.reverse(); // reverse
// console.log(abc);

// const s = [1,5,6,2,78,34,65];
// let abc = s.sort(function(a,b){return a - b}); // sort number low to high
// console.log(abc);

// const s = [1,5,6,2,78,34,65];
// let abc = s.sort(function(a,b){return b - a}); // sort number high to low
// console.log(abc);


// const numbers = [1,2,4,78,333,554,32,53,454,432,11];
// find = arras(numbers);

// function arras(arr){
//     Math.min.apply(null, arr)
// };                             
// console.log(find);


// const numbers = [1,25,42,32,54,23,64,12,33];

// let txt=""
// numbers.forEach((value,index,array)=> txt += value +"--"+ index+"--"+array +"\n");
// console.log(txt);// take 3 args 

// const numbers = [1,25,42,32,54,23,64,12,33];
// const over18 = numbers.filter((value) => {return value > 18});
// console.log(over18);

// const numbers = [1,25,42,32,54,23,64,12,33];
// const calsum = numbers.reduce((total, value, index, array) =>{return total + value});
// console.log(calsum)




































