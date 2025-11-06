// 5) Write a program to implement spiral matrix pattern
// spiralMatrix( 2 ) => [ [1, 2 ] ,
// [ 4, 3]
// ]
// spiralMatrix( 4 ) = >
// [
// [ 1 , 2 , 3, 4 ],
// [ 12 13 14 5 ],
// [ 11 16 15 6 ]
// [ 10 9 8 7 ]
// ]



function spiralMatrix(n){

    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));

    let top=0;
    let bottom=n-1;
    let left=0;
    let right=n-1;

     let num=1;
   while(num <=n*n){

     for(let x=left;x<=right;x++){

     matrix[top][x]=num++;
    

     }
      top++;

      for(let x=top;x<=bottom;x++){
        matrix[x][right]=num++;
      }
      right--;


      for(let x=right;x>=left;x--)
      {
           matrix[bottom][x]= num++;
      }
      bottom--;


      for(let x=bottom;x>=top;x--)
      {
        matrix[x][left]=num++;

      }
      left++;

   }
    


    return matrix;

}

 console.log(spiralMatrix(4));

 console.log("This Other Function");

console.log(spiralMatrix(2));




// 6) Write a program to implement diagonal matrix pattern
// n = 4
// 1 2 4 7
// 3 5 8 11
// 6 9 12 14
// 10 13 15 0



// function diagonal(n)
// {
//       let diagonal = new Array(n).fill().map(()=> new Array(n).fill(0));



//     let num=1;


//     for(let d=0;d<2*n-1;d++)
//     {  
//         for(let i=0;i<n;i++)
//     {
        
//         let j=d-i;

//         if(j>=0 && j<n)
//         {
//             diagonal[i][j]=num++;
//         }
//     }
//     }

//       return diagonal;
// }

// console.log(diagonal(4));


// console.log(2+'2');

function foo1() {
  return 
{
    bar: "hello"
  };
}

function foo2() {
  return{
    bar: "hello"
  };
}
console.log(foo1(),foo2());