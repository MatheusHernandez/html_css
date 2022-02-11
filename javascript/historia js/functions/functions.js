function getName() {
    return 'Matheus Hernandez';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn

logFnResult(getName);
