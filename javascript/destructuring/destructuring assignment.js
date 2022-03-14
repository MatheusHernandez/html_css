var arr = ['green','orange','red'] // maneira verbosa demais
var verde1 = arr[0]
var laranja1 = arr[1]
var vermelho1= arr[2]

var [verde, laranja, vermelho] = ['green','orange','red'] //destructing simples

console.log(verde)

var arr2 = ['green','orange','red', ['yellow']] // maneira verbosa demais
var verde2 = arr2[0]
var laranja2 = arr2[1]
var vermelho2= arr2[2]
var yellow2 = arr2[3][0];

var [verde3, laranja3, vermelho3, [yellow3]] = ['green','orange','red', ['yellow']] //destructing assignment

console.log(yellow3)