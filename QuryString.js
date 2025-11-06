// let query = "?name=Darling&age=22&city=Tirunelveli";

// let obj = {};
// query.split('&').forEach(pair => {
//   const [key, value] = pair.split('=');
//   obj[key] = value;
// });

// console.log(obj);



// const params = new URLSearchParams("?name=Darling&age=22&city=Tirunelveli");
// const obj = Object.fromEntries(params);
// const jsonStr = JSON.stringify(obj);

// console.log(obj);

// const s = "Hello world & = ? / # 中文";
// console.log(decodeURIComponent(s));
// // "Hello%20world%20%26%20%3D%20%3F%20%2F%20%23%20%E4%B8%AD%E6%96%87"


// const base = "https://example.com/search?q=";
// const term = "selvin & Enna Pannder = i / Love You";
// console.log(base + encodeURI(term));          // bad: leaves & and = unencoded
// console.log(base + encodeURIComponent(term)); // correct

// console.log(base + decodeURI(term));
// console.log(base + decodeURIComponent(term));

// 4) Common URL/query serializations in JS

function toQueryString(obj) {
  return Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');
}
console.table(toQueryString({name:"Darling", city:"Tirunelveli & Co"}));
// "name=Darling&city=Tirunelveli%20%26%20Co"
