const BinarySearchTree = require('../lib/BinarySearchTree')

let arvore = new BinarySearchTree
console.log(arvore)

arvore.insert(33)
arvore.insert(59)
arvore.insert(10)
arvore.insert(41)
arvore.insert(6)
arvore.insert(70)
arvore.insert(27)
arvore.insert(8)
arvore.insert(64)
console.log(arvore)

// arvore.inOrderTraversal(x => console.log(x))

// in-order
let vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-ordem:', vet)

// pre-order
vet = []
arvore.preOrderTraversal(d => vet.push(d))
console.log('Pré-order:', vet)

// pos-order
vet = []
arvore.postOrderTraversal(d => vet.push(d))
console.log('Pós-order:', vet)

// valor mínimo
console.log('Mínimo:', arvore.min());

// valor máximo
console.log('Máximo:', arvore.max());

