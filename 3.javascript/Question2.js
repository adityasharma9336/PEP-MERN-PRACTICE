// 21 Using map(), add 5 to each element in [10,20,30].
const arr = [10, 20, 30];
const result = arr.map(num => num + 5);
console.log(result);
// [15, 25, 35]

// 22  Using filter(), extract only strings from ['a',1,'b',2,'c'].
const arr1 = ['a', 1, 'b', 2, 'c'];
const result1 = arr.filter(item => typeof item === 'string');
console.log(result);
// ['a', 'b', 'c']

// 23  Using reduce(), find the product of numbers in [1,2,3,4].
const nums = [1, 2, 3, 4];
const product = nums.reduce((total, num) => total * num, 1);
console.log(product);

// 24 Convert an array of prices to prices with 18% GST added.
const prices = [100, 200, 300];
const gstPrices = prices.map(price => price + (price * 0.18));
console.log(gstPrices);
// [118, 236, 354]

// 25 Count numbers greater than 50 in [20,60,80,40,90].
const arr3 = [20, 60, 80, 40, 90];
const count = arr.filter(n => n > 50).length;
console.log(count); // 3

// 26 Extract email addresses from an array of user objects.
const users = [
    { name: 'A', email: 'a@gmail.com' },
    { name: 'B', email: 'b@gmail.com' }
];
const emails = users.map(u => u.email);
console.log(emails);

// 27  Convert ['js','html','css'] into uppercase using map().
const tech = ['js', 'html', 'css'];
const results = tech.map(t => t.toUpperCase());
console.log(result);

// 28 Find the average of numbers in [10,20,30,40].
const nums1 = [10, 20, 30, 40];
const avg = nums1.reduce((a, b) => a + b, 0) / nums1.length;
console.log(avg); // 25

// 29 Separate even and odd numbers from [1,2,3,4,5,6].
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(n => n % 2 === 0);
const odd = numbers.filter(n => n % 2 !== 0);
console.log(even); // [2,4,6]
console.log(odd);  // [1,3,5]

// 30 From an array of users, return names of users who are active.
const usersList = [
    { name: 'Ram', active: true },
    { name: 'Sam', active: false },
    { name: 'Tom', active: true }
];
const activeNames = usersList
    .filter(u => u.active)
    .map(u => u.name);
console.log(activeNames);

// closuer;
// 1
function createGreeting(name) {
    return function () {
        console.log("Hello " + name);
    };
}
const greet = createGreeting("Aditya");
greet();

// 2 Create a score tracker using closure with methods addScore(points) and getScore().
 function scoreTracker() {
    let score = 0;
    return {
        addScore: p => score += p,
        getScore: () => score
    };
}
const game = scoreTracker();
game.addScore(10);
console.log(game.getScore());

// 3 Create a function that limits an action to run only a fixed number of times.

function limit(fn, times) {
    let count = 0;
    return function () {
        if (count < times) {
            fn();
            count++;
        }
    };
}

//4 Create a function createUser(role) that returns a function to check role-based access.
function createUser(role) {
    return function (checkRole) {
        console.log(role === checkRole);
    };
}
const user = createUser("admin");
user("admin"); // true

//5  Create a private settings object using closure with methods to read and update values.
function settings() {
    let data = {};
    return {
        set: (k, v) => data[k] = v,
        get: k => data[k]
    };
}
//6 Create a simple incremental ID generator using closure.
function idGenerator() {
    let id = 0;
    return () => ++id;
}
const gen = idGenerator();
gen(); gen();

// 7 Store a secret message using closure and allow access only through a returned function.
function secret(msg) {
    return function () {
        console.log(msg);
    };
}
const reveal = secret("Hidden Message");
reveal();

//8  Create a counter using closure that increments by a custom step value.
function counter(step) {
    let count = 0;
    return () => count += step;
}
const c = counter(5);
c(); c();

//9 Create a voting system using closure that tracks yes and no votes.
function vote() {
    let yes = 0, no = 0;
    return {
        yes: () => yes++,
        no: () => no++,
        result: () => ({ yes, no })
    };
}
// 10 Create a discount calculator using closure that applies a fixed discount percentage.
function discount(percent) {
    return price => price - (price * percent / 100);
}
const off = discount(10);
console.log(off(100)); // 90






