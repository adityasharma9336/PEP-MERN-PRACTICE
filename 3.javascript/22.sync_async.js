//  synchronous code;

 console.log(1);
 console.log(2);
 console.log(3);
 console.log(4);

//  example;
console.log("This is a synchronous line of code");
for ( let i = 1; i < 10000; i++){
console.log("loop is running");
}
console.log("Synchronous execution ends here");


//  B. Asynchronous:
console.log("Execution started......");
setTimeout(() => {
    console.log("this is settimeout function which is persforming asynchronous execution ");
}, 1000);
console.log("Execution ends here ");
  

// example 2;
console.log("Start of asynchronous example");

setTimeout(() => {
    console.log("This message is from the asynchronous setTimeout function");
}, 2000);

console.log("End of asynchronous example");     
//  example 3 : using callback function
function fetchData(callback){
    console.log("Fetching data from server...");
    setTimeout(() => {
        const data = {name: "Aditya", age: 22};
        console.log("Data fetched successfully.");
        callback(data);
    }
    , 1500);
}

function processData(data){
    console.log("Processing data:", data);
}

console.log("Starting data fetch...");
fetchData(processData);
console.log("Data fetch initiated, waiting for data...");

