//reduce is used when there is any req of aggregation or reducing i.e. get a single value from various
//elements after any computation like sum, max, etc.

const arr = [2,11,3,4,5,6];

//normal function
function sum(arr){
    let s=0;
    for(let i=0;i<arr.length;i++){
        s+=arr[i];
    }
    return s;
}
console.log(sum(arr));

//using reduce
let output = arr.reduce((s,x) => s+=x,0);// function inside of reduce takes two parameters i.e. accumulator and iterator and at last the initial sum
console.log(output);

function max(a,b){
    if(a>b) return a;
    return b;
}

output = arr.reduce((s,x) => s=max(s,x),0);
// output = arr.reduce(function(max,x){
//     if(x>max){
//         max=x;
//     }
//     return max;
// },-1);
console.log(output);