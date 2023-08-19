//filter is used to filter things out as the name suggests

const arr = [5,1,2,4,3];

function isOdd(x){
    return x%2;
}

//filtering odd values
let output = arr.filter(isOdd);
console.log(output);

//filtering even values
output = arr.filter((x) => x%2==0);
console.log(output);