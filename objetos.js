// Declaração de objeto vazio
let pessoa1 = {}                // Método "moderno"
let pessoa2 = new Object()      // Método "tradicional"

// Declarando e inicializando um objeto já com propriedades
// - propriedade -> atributo + valor
let pessoa3 = {
    nome: 'João das Couves',
    naturalidade: 'Franca/SP',
    "data de nascimento": '1997-11-03',
    estudante_fatec: true
}

// Acessando uma propriedade de um objeto
// Atributo é uma única palavra -> sintaxe do ponto
console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

// Acessando uma propriedade composta por várias palavras ->
// sintaxe dos colchetes
console.log(pessoa3['data de nascimento'])

// Sintaxe dos colchetes SEMPRE funciona, mesmo com propriedades
// cujo nome é uma única palavra
console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

// Criando novas propriedades em um objeto
// -> basta atribuir o valor a um nome de atributo, segundo
// a sintaxe apropriada a cada caso
pessoa3.nacionalidade = 'portuguesa'            // Única palavra
pessoa3['registro de estrangeiro'] = 123456789  // Várias palavras

console.log(pessoa3)

// Eliminando uma propriedade
delete pessoa3.estudante_fatec

console.log('-------------------------')

console.log(pessoa3)

console.log('-------------------------')

// Como percorrer todas as propriedades de um objeto: for..in
for(let prop in pessoa3) {
    console.log(prop)
}
console.log('-------------------------')
// Listando atributo e valor de um objeto usando for..in
for(let atrib in pessoa3) {
    // console.log('Atributo: ' + atrib + '; valor: ' + pessoa3[atrib])
    
    // Usando string template (delimitado por acentos GRAVES)
    console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`)
}