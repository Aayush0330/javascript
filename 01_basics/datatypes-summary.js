// # primitive

//  7 types : string=""

// number=123 
//  boolean= true ,false 
//   null 
//   undifined
//   Symbol
//   BigInt

const score= 100
const scoreValue= 100.3
const isLoggedIn= false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

// const bigNumber = 2122222222222



// reference (non-primitive):
// Array
// objects
// functions

const heros = ["krrish" , "shaktiman" , "doga"]


let myobj = {
    name:"aayush",
    age:20,
}

const myFunction =function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);