//  creating function

function fun(){
    console.log("Hello Aditya");
}
fun();


//   sum of tow numbers;
function addTwonumbers( num1, num2){
    console.log(num1 + num2);

}
addTwonumbers(8,5);
//  FUNCTION RETURN
 function addTwonumbersReturn(num1, num2){
    return num1 + num2;

 }
const result = addTwonumbersReturn(4,6);
console.log("Result" , result);

// Type B: anonymous function : a function without a names is called anonymous function
let arr = [19, 38,48,84];
arr.forEach(function (val) {
    console.log(val);
});

// Arrow function
const greet = (count) => {
    for(i = 0; i<count; i++) {
console.log("Hello aditya");
    }
    
};
greet(4);

//  sum of two numer with arrow function
const sum = (a, b) => {
  return a + b;
};

console.log(sum(79,63)); 
