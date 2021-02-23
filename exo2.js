//Lib
var scanf = require("scanf");

//Input 
console.log("Merci d'entrer un nombre : ");
let nb = scanf("%d");
let res = 0;

//algo
for (let i = 1; i <= nb; i++){
    res += i;
}

console.log(`${nb} factoriel = ${res}`);