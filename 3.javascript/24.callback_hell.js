//  callback 
function first(){
    console.log("This is my function");
}

function second(call){
    console/log("This is my a second function");
    call();

}

// call 1st function inside 2nd function
second(first);



//  callback hell or pyramid od Doom;


const items = [ " jeans" , " pant" ,  " shoes"];

api.createOrder(items, () =>{
    api.procedToPayment(()=>{
        api.orderSummary(() =>{
            api.wallet();
        });
    });
});


//  write a program where ur making maggie:
//  buy the maggie;
//  maggie got it;
// start preparing maggie;
// maggie prepared;
// maggie eaten
// maggie eating done 



console.log("Buy maggie");
setTimeout(function(){
    console.log("maggie buy");
    console.log("maggie prepare");
    setTimeout(() => {
        console.log("maggie prepared");
    console.log("maggie eaten");
    }, 2000);

setTimeout(()=>{
    console.log("maggie eating done");
},3000);
},5000);

//    we will have structural aproach to avoid 
// Step 1: Buy Maggie
function buyMaggie(callback) {
    console.log("Buy maggie");

    setTimeout(() => {
        console.log("Maggie bought");
        callback();
    }, 5000);
}

// Step 2: Prepare Maggie
function prepareMaggie(callback) {
    console.log("Maggie preparing");

    setTimeout(() => {
        console.log("Maggie prepared");
        callback();
    }, 2000);
}

// Step 3: Eat Maggie
function eatMaggie(callback) {
    console.log("Maggie eating");

    setTimeout(() => {
        console.log("Maggie eating done");
        callback();
    }, 3000);
}

// Final Step
function finishMaggie() {
    console.log("Maggie eaten 😋");
}

// Function Call Flow
buyMaggie(() => {
    prepareMaggie(() => {
        eatMaggie(() => {
            finishMaggie();
        });
    });
});
