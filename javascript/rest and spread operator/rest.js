//rest operator ...

function sum(...args){
    return args.reduce((acc, value)=> acc + value, 0); //reduce acc( reducer acumulador)
}

console.log(sum(5,5,5,2,3));
