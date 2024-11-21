const prompt = require("prompt-sync")({sigint:true})

let fact = parseInt(prompt("ender a number to find a factorial")) 

let num1 = 1;

for(let i = 1; i <= fact; i++){
    num*=1;
}

console.log(`factolrial of ${fact} is ${num}`)