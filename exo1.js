//Lib
var scanf = require("scanf");

//Input 
console.log("Merci d'entrer une première chaine de charactère : ");
let str1 = scanf("%s");
console.log("Merci d'entrer une seconde chaine de charactère : ");
let str2 = scanf("%s");

//algo
if (str1.length >= 2*str2.length){
    console.log("la première chaine de charactère est\n au moins deux fois plus longue que la seconde");
}
else{
    console.log("la première chaine de charactère n'est\n pas deux fois plus longue que la seconde");
}