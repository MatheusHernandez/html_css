function SalaAula(alunos){
    this.alunos = alunos || []
}

SalaAula.prototype = {
    adicionarAluno: function(aluno) {
        this.alunos.push(aluno)
    },
    mostraAlunos: function() {
        return this.alunos
    }
}

function NovaSala() {
    SalaAula.call(this)
}

NovaSala.prototype = Object.create(SalaAula.prototype)

const novaSala = new NovaSala()

//const novaSala = Object.create(NovaSala.prototype)
//const NovaAula extends SalaAula {}

novaSala.adicionarAluno('Pedro')

console.log(novaSala.mostraAlunos())