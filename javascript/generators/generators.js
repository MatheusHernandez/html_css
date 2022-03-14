function* hello() {
    console.log('hello');
    yield;
    console.log('from');
    yield;
    console.log('func');
}
const it= hello()

console.log(it.next())
console.log(it.next())
console.log(it.next())