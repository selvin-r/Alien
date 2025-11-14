// let query = "?name=Darling&age=22&city=Tirunelveli";

// let obj = {};
// query.split('&').forEach(pair => {
//   const [key, value] = pair.split('=');
//   obj[key] = value;
// });

// console.log(obj);


// Second Options =====================================================================


// const params = new URLSearchParams("?name=Darling&age=22&city=Tirunelveli");
// const obj = Object.fromEntries(params);
// const jsonStr = JSON.stringify(obj);

// console.log(obj);


// 3 Options =======================================================================================

// const s = "Hello world & = ? / Selvin # 中文";
// console.log(encodeURIComponent(s));
// console.log(decodeURIComponent(s));
// // "Hello%20world%20%26%20%3D%20%3F%20%2F%20%23%20%E4%B8%AD%E6%96%87"


// const base = "https://example.com/search?q=";
// const term = "selvin & Enna Pannder = i / Love You";
// console.log(base + encodeURI(term));          // bad: leaves & and = unencoded
// console.log(base + encodeURIComponent(term)); // correct

// console.log(base + decodeURI(term));
// console.log(base + decodeURIComponent(term));






// const basee ="https://www.google.com/search?q=kaggle&sca_esv=fdbee006c2834579&sxsrf=AE3TifOPREOaoJCyGQ6blvZetRvGOt0QFg%3A1762762871247&source=hp&ei=d6ARabnPDLCVseMPloHAsAM&iflsig=AOw8s4IAAAAAaRGuh8n6ipU_hgKOCZ-5cFjkgOca62_W&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggAMg0QIxiABBgnGIoFGOoCMhAQIxjwBRiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMhMQIxjwBRiABBgnGMkCGIoFGOoCMhMQLhiABBjRAxjHARgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMhAQIxjwBRiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCSP0IUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCYAgGgAiOoAgqYAyPxBUdDOfY7hZcckgcBMaAHALIHALgHAMIHAzQtMcgHIQ&sclient=gws-wiz";

// const termm ="selvin";

// console.log(basee + encodeURIComponent(termm));
// console.log(basee + decodeURIComponent(termm));



// 4 Common URL/query serializations in JS =====================================================================================

// function toQueryString(obj) {
//   return Object.keys(obj)
//     .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
//     .join('&');
// }
// console.table(toQueryString({name:"Darling", city:"Tirunelveli & Co"}));
// "name=Darling&city=Tirunelveli%20%26%20Co"



// function toQueryString(params) {
//   return Object.entries(params)
//     .map(([key, value]) => 
//       `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//     )
//     .join('&');
// }

// const params = {
//   name: 'Darling',
//   role: 'Student',
//   country: 'USA',
//   city: 'New York',
//   page: 42,
//   interests: 'AI, Data Science, Machine Learning, Coding',
//   bio: 'Learning big data and web technologies in 2025 🚀'
// };

// const queryString = toQueryString(params);
// const fullURL = `https://example.com/profile?${queryString}`;

// console.log(fullURL);


// function toQueryString(params) {
//   return Object.entries(params)
//     .map(([key, value]) => 
//       `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//     )
//     .join('&');
// }

// const user = {
//   name: 'Darling',
//   course: 'Big Data Fundamentals',
//   level: 'Beginner',
//   age:   '22'
// };

// const query = toQueryString(user);
// console.log(query);


// const url = `https://school-api.com/enroll?${query}`;
// console.log(url);


