

// 2619. Array Prototype Last

// Solved
// Easy
// premium lock icon
// Companies
// Hint
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
//  If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.
 

// Constraints:

// arr is a valid JSON array
// 0 <= arr.length <= 1000


Array.prototype.last = function() {
    if(this.length === 0){
        return -1; 
    }
    return this[this.length - 1];
}

const arr = [1, 2, 3];
const lastElement = arr.last();
console.log(lastElement);  


 
//  2621. Sleep
// Solved
// Easy
// premium lock icon
// Companies
// Hint
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.
 

// Constraints:

// 1 <= millis <= 1000

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}



 
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
