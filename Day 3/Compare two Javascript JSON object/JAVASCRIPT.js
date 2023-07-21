let obj1 = {name:"person1", age:5}
let obj2 = {age:5, name:"person1"}
let a  = JSON.stringify(obj1) === JSON.stringify(obj2); // true
console.log(a);