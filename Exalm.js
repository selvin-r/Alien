// 🧩 Q3: Write a Program to Reverse the Given Integer 


// let num =1234;

// let Reverse =0;


// while(num>0)
// {
//     let dig=num%10;

//     Reverse =Reverse *10+dig;

//     num=Math.round(num/10);
// }

// console.log("Revers Function ",Reverse);





// let nums = 1234;
// let reverse = Number(nums.toString().split('').reverse().join(''));
// console.log(reverse);



// ✅ 1️⃣ Using Built-in Method (Easiest Way)


let arr = [1, 2, 3, 4, 5];

// arr.reverse();
// console.log(arr);



// 2 Methods 

// let output =[];

// for(let i=arr.length-1;i>=0;i--)
// {

//     output.push(arr[i]);
// }
// console.log(output);



// 3 Methods 

// let i=0;
// let j=arr.length-1;



// while(i<j)
// {
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }

// console.log(arr);



// ✅ 4️⃣ Using map() or reduce() (Functional Style)


// let reverse =arr.reduce((acc,curr)=>[curr,...acc],[])
// console.log(reverse);



// // 4) Write a function to reverse the words in a given string.
// console.log(reverseWords("The quick brown fox
// "));
// // "fox brown quick The
// "
// console.log(reverseWords("hello world"));
// //"
// world hello
// "


// One Way 


// function Revers(str){

//     let word =str.split(" ");

//     let res =word.reverse();

//     return res.join(" ");
// }

// console.log(Revers("The quick brown fox"));



// 💡 Alternative Version (Using one line)


// const reverse = str => str.split(" ").reverse().join(" ");

// console.log(reverse("The quick brown fox"));




// 🌟 METHOD 3 — Using stack concept (push & pop) 

// function reverse(str){

//     let word=str.split(" ");

//     let stack =[];
//     let normal ="";


//     for(var i=0;i<word.length;i++)
//     {
//         stack.push(word[i]);
//     }


//     while(stack.length>0){
//         normal +=stack.pop() +" ";
//     }

//     return normal.trim();
// }


// console.log(reverse("The quick brown fox"))



// 🌟 METHOD 5 — Using reduce() ⚙️ (Functional Style)


// function reverseWords(str) {
//   return str.split(" ").reduce((acc, word) => word + " " + acc).trim();
// }

// console.log(reverseWords("The quick brown fox"));
