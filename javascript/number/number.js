const myNumber = 3.14159265359;

// number to string
const numberAsString = myNumber.toString();
console.log(typeof numberAsString);

// Retorna o numero com o numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(fixedTwoDecimals);

// String em float
console.log(parseFloat('3.14159265359'));

// string em int
console.log(parseInt('3.14159265359'));
