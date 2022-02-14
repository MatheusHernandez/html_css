let user = {
    name: 'Matheus'
}

// Alterando a propriedade de um objeto
user.name = "Outro nome 1";
user['name'] = 'Outro nome 2' ;
console.log(user)

const prop = 'name' ;
user[prop] = 'Outro nome 3';

console.log(user)

//Criando uma proprieda
user.lastName = 'Hernandez';
console.log(user)
//deletando uma propriedade
delete user.name;
