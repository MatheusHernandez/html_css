// retorno explicito para mais de uma expressao
function fn() {
    return 'code here'
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //mais de uma expressao
    return 'Code here'
}

// functions tb são obj
fn.prop = 'bah tche'

console.log(fn());
console.log(fn.prop);

//recebe parametros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn);

// recebe e retorna funções
const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExec = controlFnExec(fn)
handleFnExec(true); //executa a função fn
handleFnExec();     //nao executa a func fn

//controlFnExec como função
/*
function controlFnExec(fnParam){
    return function(allowed) {
        if(allowed){
            fnParam();
        }
    }
}
*/