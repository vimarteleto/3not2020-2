/*
    Função de comparação fnComp
    - Recebe dois valores para comparação
    - Retorna:
        - true se o primeiro valor for maior que o segundo
        - false caso contrario
*/


function selectionSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    
    // Função que encontra o menor número em um segmento de vetor.
    // A função deve retornar a posição do menor valor encontrado.

    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            if(fnComp(vetor[posMenor], vetor[i])) posMenor = i
            comparacoes++  
            
        }
        return posMenor
    }

    for(i = 0; i < vetor.length - 1; i++) {
        passadas++
        // Buscamos o menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)

        // Se o valor encontrador for menor que o valor atual, fazemos a troca
        comparacoes++
        if(fnComp(vetor[i], vetor[posMenor])) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]] // permuta de valores por desestruturação
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

let candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
selectionSort(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
console.timeEnd('Teste candidatos')
// Medindo a memória utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(candidatos)
console.log('Memoria utilizada (MB):', memoria)