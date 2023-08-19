const users = [
    { firstName:"siddhant", lastName:"kumar", age:20},
    { firstName:"navneet", lastName:"gupta", age:20},
    { firstName:"gulshan", lastName:"singh", age:18}
];

//mapping
let output = users.map((x) => x.firstName+" "+x.lastName );
console.log(output);

//filtering
output = users.filter((x) => x.age>19);
console.log(output);
//chaining
console.log("Chaining using map and filter:");
output = users.filter((x) => x.age>19).map((x) => x.firstName);
console.log(output);

//same above task using reduce
console.log("Doing previous task using reduce:");
output = users.reduce((acc,x) => {
    if(x.age>18){
        acc.push(x.firstName);
    }
    return acc;
},[]);
console.log(output);

// reducing
output = users.reduce((acc,x) => {
    if(acc[x.age]){
        acc[x.age] = ++acc[x.age];
    }else{
        acc[x.age] = 1;
    }
    return acc;
},{});
console.log(output);