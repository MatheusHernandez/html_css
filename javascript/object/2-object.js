const user = {
    name: 'Matheus',
    lastName: 'Hernandez'
}
//recura as chaves do objeto (retorna [ 'name', 'lastName' ])
console.log(Object.keys(user));
//  ''   os valores das chaves do obj (retorna [ 'Matheus', 'Hernandez' ])
console.log(Object.values(user))
//retorna um array de arrays contento [nome_prop, valor_prop]
console.log(Object.entries(user))
//mergear propiedades do obj
Object.assign(user, {fullName:'Matheus Hernandez'})
console.log(Object.assign({}/*passar o primeiro vazio*/, user, {age:26}))
// previne todas as altereações de um obj
const newObj = { foo: 'bar'}
Object.freeze(newObj);
console.log(newObj)
//permite apenas alterar propriedades de um obj
const person = {name: 'matheus'}
console.log(Object.seal(person));
