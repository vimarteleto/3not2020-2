function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    
    // Função que encontra o menor número em um segmento de vetor.
    // A função deve retornar a posição do menor valor encontrado.

    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {                      
            if(vetor[i] < vetor[posMenor]) posMenor = i
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
        if(vetor[posMenor] < vetor[i]) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]] // permuta de valores por desestruturação
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

selectionSort(nums)
console.log(nums)

let nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
selectionSort(nomes)
console.timeEnd('Teste nomes')
// Medindo a memória utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(nomes)
console.log('Memoria utilizada (MB):', memoria)