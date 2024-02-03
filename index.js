// Code your solutions in this file
 const arr = [];
function writeCards(arr, event){
   for(let counter = 0; counter < arr.length; counter++){
     arr[counter] = `Thank you, ${arr[counter]}, for the wonderful ${event} gift!`;
   }
   return arr;
} 


/* ## Assignment

To get more acquainted with `while`, your task is to write a function,
`countDown`, that takes in any positive integer and, starting from that number,
counts down to zero using `console.log()`. Note that this means that running
`countDown(10);` would actually log _11_ times: */


function countDown(integer){
   let count = integer;
   while(count > -1){
      console.log(count--)
   }
}
console.log(countDown(10));