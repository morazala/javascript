// rectangle
function rectangle(a,b){
    return a * b
}

// square
function square(a){
    return a * a
}

// circle
function circle(r){
    return Math.PI * Math.pow(r,2)
}

// triangle 
function triangle(a,h){
    return (a*h) / 2
}

// parallelogram
function parallelogram(a,h){
    return a*h
}

let a = rectangle(3,7)
let b = square(7)
let c = circle(6)
let d = triangle(8,3)
let e = parallelogram(6,6)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
