
//use the debugging tool to find memory creation phase of the variables and functions
//hoisting is a process of moving the variables and functions to the top of their scope before the execution of the code.
//getName(), will create a memory which will hold the complete code of the function
//var x, will get created with a value of undefined
getName();
console.log(x);
console.log(fun); //will store the value of the function in fun not the code of the function
console.log(arrowFun); //will store the value of the function in fun not the code of the function
//console.log(y); have created the memory but cannot be accessed before initialization

var x = 7;

function getName() {
    console.log("Hi, This is Mishal Al Shahari");
    //add breakpoint to the above line to check the call stack for the function to understand the excecution context of the function
}

//at this point of line the execution xontext of the above function will be removed from the call stack

getName();
console.log(x);

//using let and const
//console.log(y); will generate and error as ReferenceError: Cannot access 'y' before initialization

let y = 10;

console.log(y);

const z = 20;
console.log(z);
//z = 30; will generate an error as TypeError: Assignment to constant variable.

var fun = function () { //normal function
    console.log("Hi, This is Mishal Al Shahari");
}

console.log(fun);

var arrowFun = () => { //arrow function
    console.log("Hi, This is Mishal Al Shahari");
}

console.log(arrowFun);