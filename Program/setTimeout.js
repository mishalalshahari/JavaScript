console.log("Start");

setTimeout( function cb() {
    console.log("Callback");
},5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

//will wait for 10 secs i.e. do something for 10 secs
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While expires");

// Explanation:

// while executing gec the program will print start take setTimeout will go fo 5000 milliseconds,
// print End, then will do something for 10 seconds but in the mean time cb comes into the callback queue after 5 secs,
// after 10 secs of doing print While expires and gec will complete everything(call stack will be empty),
// then the event loop will look if there is anything i.e. cb will be present in the callback queue
// event loop will put cb in call stack and it will execute cb and Callback will be printed.

// All this is happening due to JS being a synchronous single threaded language i.e. everything runs on a single main thread.