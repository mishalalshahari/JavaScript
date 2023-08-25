// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

var arr = [{
        name: 'Mishal',
        key: 50000
    },
    {
        name: 'Lucky',
        key: 50000
    },
    {
        name: 'Aryan',
        key: 1000000
    },
    {
        name: 'Sohail',
        key: 200000
    }];

function comparator(a,b){
    return a.key - b.key;
}

arr.sort(comparator);

// for(let i=0;i<3;i++){
//     console.log(arr[i].name+" "+arr[i].key);
// }

// var res = arr.find((i)=>{
//     return i.key==50000;
// });

// console.log(arr.find((i)=>{
//     return i.key==50000;
// }).name);

// console.log(arr.filter((i)=>{
//     return i.key==450000;
// }));

var num = [2,4,1,3,5];

console.log(num.reduce((acc,i)=>{
    return acc+=i;
},0));