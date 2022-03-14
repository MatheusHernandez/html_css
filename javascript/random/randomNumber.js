//lazy evaluation
function randomNumber() {
    return Math.random() * 5
}

function multuply (a,b = randomNumber()){
    return a * b;
}

console.log(multuply(5));