let pilha = []

let texto = 'SER OU NAO SER EIS A QUESTAO'

for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

let inverso = ''
while(pilha.length > 0) {
    inverso += pilha.pop()
}

console.log(pilha)
console.log(inverso)

