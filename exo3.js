//Lib
const scanf = require("scanf");

//Input 
console.log("Merci d'entrer 5 chiffres");
let table = scanf("%d %d %d %d %d");
console.log(table);

let max = table[0];
let mean = 0;

for (let i = 1; i <= table.length; i++){
    if (table[i] > max){
        max = table[i];
    }
    mean += table[i];
    mean = mean / 5
}

console.log(`max value = ${max}\n mean = ${mean}`);