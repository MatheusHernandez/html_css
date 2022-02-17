const meuObjeto = {
    a:1,
    b:2
}
const novoObj = Object.create(null)

novoObj.novaPropriedade = 5

function SalaAula(alunos){
    this.alunos = alunos
}

SalaAula.prototype = {
    adicionarAluno: function(aluno) {
        this.alunos.push(aluno)
    }
}

const minhaSala = new SalaAula(['João', 'Maria'])

minhaSala.adicionarAluno('Pedro')

console.log(minhaSala.alunos)