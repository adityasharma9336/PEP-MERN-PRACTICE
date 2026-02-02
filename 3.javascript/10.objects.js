let users = {
  user1: {
    user2: {
      name: "aditya",
      age: 22
    }
  }
};

console.log(users["user1"]);


// object inside object 
let user = {
  id: 1,
  details: {
    name: "Aditya",
    age: 22,
    address: {
      city: "Delhi",
      country: "India"
    }
  }
};

console.log(user);


// type coherance 

// //  merge object
//  let obj1 = {name: "aditya", age: "25"};
//  let obj2 = {name: "ravi", age:"27"};
//  console.log(merge(obj1))
