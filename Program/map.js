const arr = [5,6,2,10];

let output = arr.map(function fn(x){
    return x*2;
});

// or

// const output = arr.map(double); map takes a function as parameter

// function double(x){
//     return x*2;
// }

console.log(output);

function square(x){
    return x*x;
}

output = arr.map(square);
console.log(output);

function binary(x){
    // num="";
    // while(x>0){
    //     num=num+(x%2);
    //     x=x/2;
    // }
    // return num;
    return x.toString(2);
}

output = arr.map(binary);
console.log(output);