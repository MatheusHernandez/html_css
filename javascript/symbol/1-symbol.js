const symbol1 = Symbol()
const symbol2 = Symbol()

// symbols sao unicos
console.log(symbol1 === symbol2)

//prevnir conflito entre nomes de propriedades

const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Math',
    [nameSymbol2]: 'math 2',
    lastname: 'Hernandez'
}

console.log(user);

//symbols criam propriedades nao enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`1 - ${key}: ${user[key]}`);
    }
}

console.log('2 -', Object.keys(user))
console.log(Object.values(user))

// exiir symbols de um obj
console.log(Object.getOwnPropertySymbols(user))

// acessando tds as propriedades do obj
console.log(Reflect.ownKeys(user))

// criar um enum
const directions = {
    UP : Symbol ('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}