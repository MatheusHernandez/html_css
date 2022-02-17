const meuObjeto = {
    a:1,
    b:2
}

/*const novoObj = meuObjeto
novoObj.b = 5

console.log(meuObjeto.b + novoObj.b) ((da 10*))*/

const novoObj = Object.create(meuObjeto)

novoObj.novaPropriedade = 5

console.log(meuObjeto.b + novoObj.novaPropriedade) // da 7






//meuObjeto.__proto__ --> Object.prototype --> null

const meuArray = [1,2,3,'a','b']

//meuArray.__proto__ --> Array.prototype --> Object.prototype --> null

function minhaFuncao() {
    return 1*2
}

//minhaFuncao.__proto__ --> Function.prototype --> --> Object.prototype --> null

//meuArray.map() //verifica se o map esta sendo declarado nesse array
