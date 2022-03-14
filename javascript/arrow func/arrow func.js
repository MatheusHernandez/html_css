var sumOld = (a,b) => /*é como se tivesse um retorn explicito aqui */a+b;

console.log(sumOld(5,15))

//se tiver apenas um argumento, posso emitir os argumentos

var obj = {
    test: '123'
}

var sum = a => a;

console.log(sum(5,5))

//return literal

var createObj = () => ({ test: 123 });
console.log(createObj())


