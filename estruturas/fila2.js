const Queue = require('../lib/Queue2')

let fila = new Queue()

console.log(fila) // Fila vazia

// Inserção
fila.enqueue('Um')
fila.enqueue('Dois')
fila.enqueue('Tres')
fila.enqueue('Quatro')
fila.enqueue('Cinco')
fila.enqueue('Seis')

console.log(fila) // Fila preenchida

let proximo = fila.dequeue()

console.log({proximo})
console.log(fila)

fila.enqueue('Sete')

let primeiro = fila.peek()

console.log({primeiro})
console.table(fila) // Mostra como tabela

let tamanho = fila.size()
console.log(tamanho)
