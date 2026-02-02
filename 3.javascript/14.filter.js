//  filter out the element even element greater than 50
let arr = [10, 25, 36, 47, 58, 62, 70, 81, 92, 103];
let set = 50;
let a = arr.filter((num)=> num >= set && num % 2 === 0);
console.log("even number is greater than 50:", a);

//  dynamic function to filter out the element
const constFilter = (minval, maxval)=>(num)=> num >= minval && num <= maxval;
 let  g = arr.filter(constFilter(20, 70));
 console.log("custom range [20- 70]:", g);