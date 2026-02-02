// closure  :   a function having access to the parent scope, even after the parent function has closed.
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');


// Example 2:
function Add(x){
    return function(y){
        return x + y;
    };
}
const add5 = Add(5);
console.log(add5(3)); // 8
console.log(add5(10)); // 15
console.log("Add5 and 3", add5(3));
console.log("Add5 and 10", add5(10));

// Data Privacy with Closures
// here count cannot be accessed directly, only though functions it can be accesssible . this is called encapsulation.
function Counter(){
    let count = 0; // private variable
    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        getCount: function(){
            return count;
        }
    };
}

const myCounter = Counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.getCount());  // 1

//  creting calculator using closure;
function Calculator(){
    let result = 0;
    return {
        add: function(x){
            result += x;
            console.log("Added " + x + ", Result: " + result);
            return result;
        },
        subtract: function(x){
            result -= x;
            console.log("Subtracted " + x + ", Result: " + result);
            return result;
        },
        multiply: function(x){
            result *= x;
            console.log("Multiplied by " + x + ", Result: " + result);
            return result;
        },
        divide: function(x){
            if(x !== 0){
                result /= x;
                console.log("Divided by " + x + ", Result: " + result);
            } else {
                console.log("Error: Division by zero");
            }
            return result;
        },
        getResult: function(){
            return result;
        }
    };
}

const myCalculator = Calculator();
myCalculator.add(10);      // Added 10, Result: 10
myCalculator.subtract(2);  // Subtracted 2, Result: 8
myCalculator.multiply(3);  // Multiplied by 3, Result: 24
myCalculator.divide(4);    // Divided by 4, Result: 6
console.log("Final Result:", myCalculator.getResult()); // Final Result: 6


// 