const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing: adds the wrapper object to the primitive value
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing: removes the wrapper object from the primitive value
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

const funcLit = (x) => x * x; // function literal
console.log(funcLit, typeof funcLit);


const funcObj = new Function('x', 'return x * x'); // function object
console.log(funcObj(3), typeof funcObj);
