a();
//b();

// function statement aka function declaration
function a() {
    console.log("a called");
}

// function expression
var b = function () {
    console.log("b called");
}

// anonymous function
function as() { //anonymous function are used when there is requirement of assigning it to a variable
    console.log("anonymous function called");
}

// named function expression
var c = function xyz() { //an expression with named function rather than anonymous function
    console.log("c called");
}
// we cannot call xyz() i.e. it will give error because xyz() is not created in the outer scope rather it is created for a local variable.

//arguments and parameters
// function z(param1, param2) { param1, param2 are parameters i.e. labels, identifiers, the values which functions get
//      console.log("hello");
// }
// 
// z(5,10); 5 and 10 are arguments, the values which we pass to the functions

// First Class Function
//first class functions are functions when it is treated as a variable and can be passed as well as returned
// i.e. the ability of a function to be used as values is known as first class functions

function abc(n) {
    console.log("hello");
    n();
}

function m() {
    console.log(" Mishal");
}

abc(m);

//or

var x = function () {
    y();
    console.log("Batman");
    return function () {

    }
}

function y() {
    console.log("I'm ");
}

console.log(x());

// First Class Citizen is same as First Class Function

// arrow function