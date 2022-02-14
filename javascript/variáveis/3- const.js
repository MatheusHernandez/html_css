const name = 'Matheus';

// Não podemos alterar o valor
name = 'Matheus';

const user = {
    name: 'Matheus'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazr o objeto "apontar" para outro lugar
user = {
    name: 'Matheus'
};

const persons = ['Matheus', 'Felipe', 'Pedro' ];

// Podemos adicionar novos itens
persons.push('João');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações:', persons);