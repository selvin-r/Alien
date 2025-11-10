

// Example 1 — Basic Async + Await =====================================================

// async function getname() {

//     return "Hello Selvin";
    
// }

// getname().then((message)=>console.log(message))


// Example 2 — Async + Await with Delay (Simulate Task)=============================================================================

// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function workProcess() {
//   console.log("Step 1: Start work...");
//   await wait(2000);
//   console.log("Step 2: Doing something...");
//   await wait(1000); 
//   console.log("Step 3: Work completed ");
// }

// workProcess();


// Example 3 — Async with Fetch API (Print Data) ===========================================================================================


async function Printdata() {

try {

     const res=await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await res.json();

    data.forEach((element)=> {
        console.log(`User id ${element.id}`);
        console.log("Name",element.name)
        console.log("Email ",element.email);
        console.log("Address",element.address);
        console.log("Phone ",element.phone);
        console.log("Wibsite Name" ,element.website);
        console.log("Company " ,element.company)

        
    });

    
} catch (error) {
    console.log(error)
}
   
    
}

Printdata() 



//Example 4 — Async Function Return Value

// async function add(a,b) {

//     return a*b;
    
// }

// async function ShowResult() {

//     const result = await add(10,5);

//     console.log("Sum" , result);
// }

// ShowResult()


// Example 6 — Async Function Error Handling (try–catch)


// async function invalide(){

//     try {
//         let res = await fetch("https://invalid-url.example.com")
//         let ress= await res.json();
//         console.log(ress)
//     } catch (error) {
//           console.log("Error The Url is invalide Data so PLz Change tha Url id Api key 400" ,error)
//     }
// }
// invalide()


// Example 7 — Async Function + Array Loop

// async function ShowName() {

//     const names =["selvin","Mary","Anitha"];


//     for(let name of names){
    

//         await new Promise(res => setTimeout(res,1000));

//         console.log("Name",name)

//     }
//     console.log("All Names Printed");
// }

// ShowName()


//// Same Function Data 

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function GetUserData() 
// {
//    try {
    
//   const res =await fetch("https://jsonplaceholder.typicode.com/users")
//    const data=await res.json();
   
//    console.log("Fetching user Data...\n");


//          for(const user of data){


//         console.log(`Name : ${user.name}`)
//         await delay(1000);
//         console.log(`Email: ${user.email}`)
//         await delay(2000);
//         console.log(`Phone: ${user.phone}`)
//         console.log("---------------------------")

//          }

       
    
  
//    console.log("All user Printed successFully")

//    } catch (error) {
//       console.log("Error ",error)
//    } 
// }

// GetUserData()