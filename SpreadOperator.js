
// 🧩 1️⃣ Spread in Arrays
// ➤ Example: Copy an array


const a =[1,2,3,4];
const b=[3,4,5,6,7];
const clone =[...a];

console.log(clone);

const com =[...a,...b];

console.log(com);



// ➤ Example: Add elements in between


const number =[1,2,3,4];

const result =[0,...number,5];

console.log(result);


// 🧱 2️⃣ Spread in Objects (ES6+)
// ➤ Example: Copy an object 


const user = { name: "Darling", age: 22,place: "Ooty" };

const resullt={...user};


console.log("This is Copy in Object", resullt);


// ➤ Example: Merge objects


const info={name: "selvin",age: 33, place: "Kerala"};
const extr={mobile: 239838,Address: "wjdhwjdhwjdhd"};

const Merge ={...info,...extr};

console.log("Merge In Object ::",Merge);


const a1 = { name: "Darling" };
const b1 = { name: "Zoho Dev" };
const merged = { ...a1, ...b1 };
console.log("Last is Win ",merged); // { name: "Zoho Dev" }



// 💎 3️⃣ Spread in Function Calls


function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); 




// 🔁 4️⃣ Spread vs Rest (important difference)


function show(a, b, ...rest) {
  console.log(a); // first
  console.log(b); // second
  console.log(rest); // remaining as array
}

show(1, 2, 3, 4, 5);
// a=1, b=2, rest=[3,4,5]


// 🎯 5️⃣ Practical Use Cases

// ✅ Clone arrays/objects
// ✅ Merge arrays or objects
// ✅ Pass dynamic arguments
// ✅ Immutability (avoid modifying original data) 


const state = { count: 1 };
const newState = { ...state, count: state.count + 1 };

console.log("Count the object ::>> ",newState);



// ⚡ Quick Interview Examples

 // Q1:

// const arr = [1, 2, 3];
// const arr2 = arr;
// arr2.push(4);
// console.log(arr); // ?


// Q2 (Using spread): ✅ Independent copy

const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
console.log(arr); // [1,2,3]


                                                                                                                                                           