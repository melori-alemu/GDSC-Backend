const prompt = require('prompt-sync')({sigint: true});
const user = prompt("an integer?(since i dont include invalid input handling method let's stick to integers:) ");
let num = parseInt(user);

const factors = [];
function Factorial(num){
for(let i = 1;i<=num;i++){
    if(num%i==0){
        factors.push(i);
    }
    
   
}  
console.log("Great! the factorials of " + num+ " are  " + factors);}
Factorial(num);
