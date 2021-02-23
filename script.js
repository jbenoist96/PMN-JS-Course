console.log(`test link`);

const ArrayWords = ["word1", "word2", "word3", "word4", "word5"];
const ArrayColors = ["red", "blue", "green", "gold"];

let index_word = 0;
let index_color = 0;
let intervalId;

document.getElementById("bouton").addEventListener("click", colorBack);
document.getElementById("bouton").addEventListener("click", printWord);

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function colorBack(){
    document.body.style.backgroundColor = ArrayColors[index_color];
    let divBal = document.getElementById("roolword");
    printWord(divBal);
    if (index_color == ArrayColors.length - 1){
        index_color = 0;
    }
    else{
        index_color += 1;
    }
}
function printWord(divBal){
    clearInterval(intervalId);
    intervalId = setInterval(function(){
        divBal.innerHTML = ArrayWords[getRandomInt(5)];
    }, 5000)


}
