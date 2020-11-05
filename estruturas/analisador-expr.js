/*
    6 + { 8 / [3 - (9 * 2)] + (4 * 3)}
*/

const Stack = require('../lib/Stack')

let analisador = new Stack()

let expr = '6 + { 8 / [3 - (9 * 2)] + (4 * 3)}'
let info

for(let i = 0; i < expr.length; i++) {
    switch(expr.charAt(i)) {
        case '{':
            analisador.push({pos: i, tipo: 'CH'})
            break
        case '[':
            analisador.push({pos: i, tipo: 'CO'})
            break
        case '(':
            analisador.push({pos: i, tipo: 'PA'})
            break
        case '}':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo deve ser CH  
            if(info && info.tipo == 'CH') {
                console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: chave fechando na posição ${i} não tem a abertura correspondente`)
            }
            break
        case ']':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo deve ser CO  
            if(info && info.tipo == 'CO') {
                console.log(`Colchete aberto na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: colchete fechando na posição ${i} não tem a abertura correspondente`)
            }
            break
        case ')':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo deve ser PA  
            if(info && info.tipo == 'PA') {
                console.log(`Parentese aberto na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: parentese fechando na posição ${i} não tem a abertura correspondente`)
            }
            break
    }
}

console.log(analisador)