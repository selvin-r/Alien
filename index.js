// Given data
var obj = {
  '208997987399': ['208997987399', '208997987377', '6', '1'],
  '208997987397': ['208997987397', '208997987377', '3', '10'],
  '2089979448417': ['2089979448417', '2089979448363', '3', '20'],
  '2085415402309': ['2085415402309', '2085414022965', '2', '30'],
  '208997987395': ['208997987395', '208997987377', '2', '40']
};

var names = {
  '208997987399': 'show_otp_dialog',
  '208997987397': 'add_vendor_bank_account',
  '2089979448417': 'print_pdf',
  '2085415402309': 'test_event_dho',
  '208997987395': 'country_code_change'
};

var groupnames = {
  '208997987377': 'Payments',
  '2089979448363': 'Bills',
  '2085414022965': 'test_group_ek',
  '208997987395': 'Paid'
};

var platform = {
  '1': 'Windows',
  '2': 'Android',
  '3': 'tvOS',
  '4': 'macOS',
  '5': 'watchOS',
  '6': 'iOS'
};

// Now combine all into one table structure
var finalOutput = [];

for (var key in obj) {
  let details = obj[key];
  let id = details[0];
  let groupId = details[1];
  let platformId = details[2];
  let count = details[3];

  finalOutput.push({
    ID: id,
    Name: names[key],
    'Group Name': groupnames[groupId],
    Platform: platform[platformId],
    Count: count
    
  });
}

// Display as table in console
console.table(finalOutput);



// 2 Qustion ===================


// var obj = {
//   '101': ['101', '201', '1', 499],
//   '102': ['102', '201', '2', 999],
//   '103': ['103', '202', '3', 299],
//   '104': ['104', '203', '4', 699],
//   '105': ['105', '201', '1', 799]
// };

// // Product Names
// var productNames = {
//   '101': 'Mobile Charger',
//   '102': 'Bluetooth Speaker',
//   '103': 'Coffee Mug',
//   '104': 'Desk Lamp',
//   '105': 'Power Bank'
// };

// // Category Mapping
// var category = {
//   '201': 'Electronics',
//   '202': 'Kitchen',
//   '203': 'Home'
// };

// // Platform Mapping
// var platform = {
//   '1': 'Android',
//   '2': 'iOS',
//   '3': 'Windows',
//   '4': 'macOS'
// };


// var fainaloutput =[];

// for(var key in obj ){

//     let ditele=obj[key];

//     let id=ditele[0];
//     let categoryid=ditele[1];
//     let platformid=ditele[2];
//     let price=ditele[3];


//     fainaloutput.push({

//         Id: id,
//      product:productNames[key],
//      category:category[categoryid],
//      platform:platform[platformid],
//      price:price





//     });

// }

// console.table(fainaloutput);


// 3 Qustion 


// var obj = {
//   '501': ['501', 'D1', 'P1', 60000],
//   '502': ['502', 'D2', 'P2', 50000],
//   '503': ['503', 'D3', 'P3', 65000],
//   '504': ['504', 'D1', 'P4', 70000]
// };

// var empNames = {
//   '501': 'Arjun',
//   '502': 'Priya',
//   '503': 'Mano',
//   '504': 'Keerthi'
// };

// var department = {
//   'D1': 'IT',
//   'D2': 'HR',
//   'D3': 'Finance'
// };

// var project = {
//   'P1': 'Zoho Mail',
//   'P2': 'Zoho People',
//   'P3': 'Zoho Books',
//   'P4': 'Zoho CRM'
// };



// const fainaloutput =[];


// for(const key in obj){

//     let d =obj[key];

//     fainaloutput .push({

//         EmpID: d[0],
//         Name:  empNames[key],
//         Department: department[d[1]],
//         Project:project[d[2]],
//         salary:d[3]



//     })


// }
// console.table(fainaloutput);


// 4 Qustion 


// var data = {
//   '101': ['101', 'S1', 'M1', 95],
//   '102': ['102', 'S2', 'M2', 85],
//   '103': ['103', 'S3', 'M3', 78],
//   '104': ['104', 'S4', 'M1', 88]
// };

// var names = {
//   'S1': 'Raj',
//   'S2': 'Meena',
//   'S3': 'Siva',
//   'S4': 'Divya'
// };

// var subjects = {
//   'M1': 'Maths',
//   'M2': 'Science',
//   'M3': 'English'
// };

// function getGrades(marks){

//     if(marks >=90)
//         return 'A';
//     else if(marks >=80)
//         return 'B';
//     else 
//         return 'c';

// }


// let output =[];


// for(let key in data){
    
//  let d =data[key];
//  let rollno=d[0];
//  let student=d[1]
//  let subject=d[2];
//  let Mark=d[3];


//  output.push({
//    RollNo:rollno,
//    Name:names[student],
//     Subject: subjects[subject],
//     Marks: Mark,
//     Grade: getGrades(Mark)
//   });

 

// }

// console.table(output);


// 2) Given an array, return an array where the each value is the
// product of the next two items: E.g. [3, 4, 5] -> [12, 20, 15] 



// let arr =[3,4,5];

// let result = [];

// for(let i=0;i<arr.length;i++){

//     let next=arr[(i+1)%arr.length];
//     let nextnext=arr[(i+2)%arr.length];

//     result.push(arr[i]*next);
// }

// console.log(result); 


// using in Map =========================================================


// let result =arr.map((value,i)=>{

//     let next=arr[(i+1)%arr.length];

//     return value*next;
// })

// console.log(result);


 // 🧩 Q2: Create a new array with each value doubled==================================================


//  let arr = [2,3,4,5,6];

//  let result =[];



//  for(let i=0;i<arr.length;i++)
//  {
// result.push(arr[i]*2);
//  }

//  console.log(result);

let result =[];

let arr =[2,3,4,5,];
let resultt=arr.map((value,i)=>{

    return result .push( "using Map Function ",arr[i]*2);
})

console.log(result);


//  🧩 Q3: Find sum of all numbers in array


// let sum=0;

// for(let i=0;i<arr.length;i++)
// {
//     sum +=arr[i];
// }
// console.log(sum);



// Q4: Multiply each number by the next number


// let result =[];


// for(let i=0;i<arr.length;i++)
// {
//     let next=arr[(i+1)%arr.length];

//     result.push(arr[i]*next);
// }

// console.log(result);
// console.table(result);


// 🧩 Q5: Add each number with previous number


// let result =[];


// for(let i=0;i<arr.length;i++)
// {
//     let prv=arr[(i-1 +arr.length) % arr.length];

// result.push(arr[i]+prv);
// }

// console.log(result);


// 🧩 Q6: Return all even numbers


// let result =[];


// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0){
//         result.push(arr[i]);
//     }
// }

// console.log(result);


// 🧩 Q7: Count how many odd numbers


// let count=0;


// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2!=0){
//         count++;
//     }
// }

// console.log(count);


// 🧩 Q8: Find the largest number


// let max =arr[0];


// for(let i=1;i<arr.length;i++)
// {
//     if(arr[i] > max)
//     {
//         max=arr[i];
//     }
// }
// console.log(max);



// 🧩 Q7: Replace Negative Numbers with 0


// let arrr =[5, -2, 7, -3];

// for(let i=0;i<arrr.length;i++)
// {
//     if(arrr[i]<0){
//         arrr[i]=0;
//     }
// }

// console.log(arrr);



// 🧩 Q8: Find Difference Between Largest and Smallest Number


// for(let i=0;i<arr.length;i++)
// {
//     var max=Math.max(...arr);
//     var min=Math.min(...arr);
// }
// console.log("Diferance Between :: >>", max-min);


// 🧩 Q9: Count How Many Numbers Are Greater Than 5

// let count=0;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>2)
//     {
//         count++;
//     }
// }

// console.log(count);


// 🧩 Q10: Multiply Each Element by Its Index


// let result =[];


// for(let i=0;i<arr.length;i++)
// {
//     result.push(arr[i]*i);
// }

// console.log(result);



// 🧩 Q11: Find Product of All Elements




// Table Qustion 


// var orders = {
//   'O101': ['O101', 'C1', 'P1', 'PM1', 65000],
//   'O102': ['O102', 'C2', 'P2', 'PM2', 20000],
//   'O103': ['O103', 'C3', 'P3', 'PM3', 3000],
//   'O104': ['O104', 'C4', 'P4', 'PM4', 25000],
//   'O105': ['O105', 'C5', 'P5', 'PM5', 250004]
// };

// var customers = {
//   'C1': 'Karthik',
//   'C2': 'Deepa',
//   'C3': 'Mani',
//   'C4': 'Devi',
//   'C5':'Bot'
// };

// var products = {
//   'P1': 'Laptop',
//   'P2': 'Mobile',
//   'P3': 'Headphones',
//   'P4': 'Tablet',
//   'P5': 'Noki'
// };

// var payments = {
//   'PM1': 'UPI',
//   'PM2': 'COD',
//   'PM3': 'Credit Card',
//   'PM4': 'Net Banking',
//   'PM5': 'Gpay'
// };


// var result =[];


// for(var key in orders)
// {
//     let o= orders[key];

//    result.push({
//      ordersId : o[0],
//      customersID: customers[o[1]],
//      productsID: products[o[2]],
//      PaymentMethod: payments[o[3]],
//      Amount:o[4]
//    })

// }

// const jsonStr =JSON.stringify(result);

// console.table(jsonStr);




var obj = {
  '208997987399': ['208997987399', '208997987377', '6', '1'],
  '208997987397': ['208997987397', '208997987377', '3', '10'],
  '2089979448417': ['2089979448417', '2089979448363', '3', '20'],
  '2085415402309': ['2085415402309', '2085414022965', '2', '30'],
  '208997987395': ['208997987395', '208997987377', '2', '40'],
  '208997987410': ['208997987410', '208997987377', '1', '50'], 
  '208997987411': ['208997987411', '208997987377', '5', '60'],
  '208997987412': ['208997987412', '2089979448363', '4', '70'], 
  '208997987413': ['208997987413', '2085414022965', '6', '80'], 
  '208997987414': ['208997987414', '2089979448363', '2', '90'] 
};

var names = {
  '208997987399': 'show_otp_dialog',
  '208997987397': 'add_vendor_bank_account',
  '2089979448417': 'print_pdf',
  '2085415402309': 'test_event_dho',
  '208997987395': 'country_code_change',
  '208997987410': 'download_invoice',
  '208997987411': 'upload_receipt',
  '208997987412': 'logout_user',
  '208997987413': 'sync_data_cloud',
  '208997987414': 'delete_account'
};

var groupnames = {
  '208997987377': 'Payments',
  '2089979448363': 'Bills',
  '2085414022965': 'test_group_ek',
  '208997987395': 'Paid',
  '208997987420': 'User Management',
  '208997987421': 'Reports'
};

var platform = {
  '1': 'Windows',
  '2': 'Android',
  '3': 'tvOS',
  '4': 'macOS',
  '5': 'watchOS',
  '6': 'iOS',
  '7': 'Web',
  '8': 'Linux'
};

var output =[];


for(let key in obj){

    let o=obj[key];


    output.push({

        ACTIONID:o[0],
        actionName:names[o[0]],
        groupName:groupnames[o[1]],
        platform:platform[o[2]],
        value:o[3]

        

        


    })
}

console.table(output);



//  let query = "?name=Darling&age=22&city=Tirunelveli";


//  let obj ={};

//  query.split('&').forEach(par => {

//     const [key ,value]=par.split('=');

//     obj[key]=value;
//  });

//  console.log(obj);



var obj = {
  '101': ['101', '201', '1', 499],
  '102': ['102', '201', '2', 999],
  '103': ['103', '202', '3', 299],
  '104': ['104', '203', '4', 699],
  '105': ['105', '201', '1', 799]
};

// Product Names
var productNames = {
  '101': 'Mobile Charger',
  '102': 'Bluetooth Speaker',
  '103': 'Coffee Mug',
  '104': 'Desk Lamp',
  '105': 'Power Bank'
};

// Category Mapping
var category = {
  '201': 'Electronics',
  '202': 'Kitchen',
  '203': 'Home'
};

// Platform Mapping
var platform = {
  '1': 'Android',
  '2': 'iOS',
  '3': 'Windows',
  '4': 'macOS'
};

var output =[];


for(let key in obj){
  
  
  let o =obj[key];
  
  let  id= o[0];
  let categoryId=o[1];
  let platformId=o[2];
  let price=o[3];
  
  
  output.push({
    
    Product:productNames[key],
    category:category [categoryId],
    platform:platform[platformId],
    price:price

  })

}

console.table(output);