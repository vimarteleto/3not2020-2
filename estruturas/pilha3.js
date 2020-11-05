const Stack = require('./lib/Stack2')

let pilha = new Stack()

console.log(pilha)

pilha.push(46)
pilha.push(37)
pilha.push(98)

console.log(pilha)

let x = pilha.pop(pilha)

console.log(pilha)
console.log('x:', x)
console.log(pilha)