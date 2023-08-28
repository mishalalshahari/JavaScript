// const cart = ['shoes','kurta','pants'];

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId); 
// });

// const promise = createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

const GITHUB_API = "https://api.github.com/users/mishalalshahari";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function(data){
    console.log(data);
});

const cart = ["kurta","pant","shoes"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });
});

createOrder(card)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalletBalance(paymentInfo));