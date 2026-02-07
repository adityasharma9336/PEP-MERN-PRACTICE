//  setinterval.js: its  a function which is used to execute the code repeatedly after certain intervals


setInterval(() => {
    console.log("This message is printed every 2 seconds");
}, 2000); // every 2 sec it will print this message

//  celar interval : it is used to stop the setinterval function
console.log("Interval working started");
let a = setInterval(() => {
    console.log("This  is a setInterval function");
},2000);
 console.log("Interval working stopped");

 clearInterval(a);



//  create a variable  cpount name its intitial is 0 in this add set inetrval which show  message hello and its count increase every 2 secode and 3 second 
  let count = 0;
  const inetrval = setTimeout(() => {
    count++;
    console.log(`Hello : ${count}`);

  }, 2000);
  