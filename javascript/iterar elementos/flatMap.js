const array = [1,2,3,4,5]
console.log(array.flatMap(value=>[value *2]))
var a = array.flatMap(value=>[[value * 2]])
console.log(a)
console.log(a.flat(1))
