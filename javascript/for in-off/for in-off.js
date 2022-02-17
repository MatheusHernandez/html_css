let arr = [3, 5, 7];
arr.foo = 'salve'

for(let i in arr) {
    console.log(i);  //ele retorna as propriedades
}

for(let i of arr) {
    console.log(i);  //ele fala os definifitos
}

