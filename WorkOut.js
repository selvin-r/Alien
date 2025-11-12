
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



var output = [];


for(let key in obj){

    let o =obj[key];

   output.push({

    ACTIONID:o[0],
    ACTIONNAME:names[o[0]],
    GROUPNAMES:groupnames[o[1]],
    PLATFORMNAME:platform[o[2]]
   })
}

console.table(output)

///////////////////////////////////////////////////////////////////////////////////////////////////////


var data = {
  '101': ['101', 'S1', 'M1', 95],
  '102': ['102', 'S2', 'M2', 85],
  '103': ['103', 'S3', 'M3', 78],
  '104': ['104', 'S4', 'M1', 88]
};

var names = {
  'S1': 'Raj',
  'S2': 'Meena',
  'S3': 'Siva',
  'S4': 'Divya'
};

var subjects = {
  'M1': 'Maths',
  'M2': 'Science',
  'M3': 'English'
};

function getGrades(marks){

    if(marks >=90)
        return 'A';
    else if(marks >=80)
        return 'B';
    else 
        return 'c';

}


let outputt =[];


for(let key in data){
    
 let d =data[key];
 let marks=d[3];
outputt.push({
 
  ID:d[0],
  NAME:d[1],
  SUBJECTS:d[2],
  MARKS:marks,
  GRADES:getGrades(marks)

})

}

console.table(outputt);


/////////////////////////////////////////////////////////////////////

function nexttnext(arr){

let result =[];
for(let i=0;i<arr.length;i++){

  let next=arr[(i+1)%arr.length];
  let nextnext=arr[(i+2)%arr.length];


  result.push(arr[i]*next);


}
return result;


}
let arr =[3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

console.log(nexttnext(arr));





// Map Function Using 




function Mapping(arrr){

  let result =arrr.map((valeu,i)=>{

    let next=arrr[(i+1)%arr.length];
     return valeu*next;
  })
 return result;
}

let arrr =[3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
console.log(Mapping(arrr))



// 🧩 Q2: Create a new array with each value doubled==================================================


function Doubled(arrs){

  let selvin =[];
  
  for(let i=0;i<arrs.length;i++){

    selvin.push(arrs[i]*2);

  }
  return selvin;
}

let arrs =[3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
console.log(Doubled(arrs))



// Maping Mathodes===========================================


function Doubled1(arrss){

  let a=arrs.map((value,i)=>{
    let next = arr[(i + 1) % arr.length];
     return value * next;
    
  })
return a;

}

let arrss =[3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
console.log(Doubled1(arrss))


// 
//  🧩 Q3: Find sum of all numbers in array


function sumofNumber(){

  let sum=0;

  for(let i=0;i<sums.length;i++){

    sum+=sums[i];
  }
  return sum;
}

let sums =[3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
console.log(sumofNumber(sums));