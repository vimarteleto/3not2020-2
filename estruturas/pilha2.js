const Stack = require('../lib/Stack2')

let pilha = new Stack()

/*
pilha.push(9)
pilha.push(-8)
pilha.push(4)
console.log(pilha)
console.log('Ultimo elemento:', pilha.peek())
console.log('Tamanho:', pilha.size())
*/

let texto = 'SER OU NAO SER EIS A QUESTAO'

for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let inverso = ''
while(pilha.size() > 0) { // agora é objeto e nao tem leght, porém podemos usar size()
    inverso += pilha.pop()
}

console.log(pilha)
console.log(inverso)