const LinkedList = require('../lib/LinkedList.js')

let lista = new LinkedList()
console.log(lista.toString(), lista.size())

lista.push('amarelo')
console.log(lista.toString(), lista.size())

lista.push('branco')
console.log(lista.toString(), lista.size())

lista.push('rosa')
console.log(lista.toString(), lista.size())

lista.push('azul')
console.log(lista.toString(), lista.size())

// Inserção na primeira posição
lista.insertAt(0, 'roxo')
console.log(lista.toString(), lista.size())

// Inserção na última posição (mesmo efeito que push())
lista.insertAt(5, 'verde')
console.log(lista.toString(), lista.size())

// Inserção na posição 3
lista.insertAt(3, 'laranja')
console.log(lista.toString(), lista.size())

// Inserção na posição 1
lista.insertAt(1, 'preto')
console.log(lista.toString(), lista.size())

// Remoção do ultimo elemento
let removido = lista.pop()
console.log(lista.toString(), lista.size(), {removido})

// Remoção do primeiro elemento com removeAt()
removido = lista.removeAt(0)
console.log(lista.toString(), lista.size(), {removido})

// Remoção na posição 3:
removido = lista.removeAt(3)
console.log(lista.toString(), lista.size(), {removido})

let p0 = lista.getAt(0)
let p4 = lista.getAt(4)
console.log(lista.toString(), lista.size(), {p0, p4})

let posCinza = lista.indeOf('cinza') // Cinza nao existe, deve retornar -1
let posAmarelo = lista.indeOf('amarelo')
let posRosa = lista.indeOf('rosa')
console.log(lista.toString(), lista.size(), {posCinza, posAmarelo, posRosa})