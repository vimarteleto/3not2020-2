/* 
    Algoritmo de ordenação Bubble Sort
    Estratégia:
    Percorrer o vetor de dados, comparando elementos adjacentes
    e promovendo a troca quando o sucessor é maior que o antecessor.
    O percurso no vetor é feito tantas vezes quando necessário, até
    que nenhuma troca seja efetuada no percurso.
*/

function bubbleSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

        // Percurso do vetor até a PENÚLTIMA POSIÇÃO (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            // Comparando o elemento da posição atual (i)
            // com o elemento da frente (i + 1)
            if(fnComp(vetor[i], vetor[i + 1])) {
                // Troca usando desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }

    } while(trocas > 0)
    // Exibindo as estatísticas
    console.log({passadas, comparacoes, totalTrocas})
}

const candidatos = require('./dados/candidatos-2018')

console.time('Teste candidatos')
bubbleSort(candidatos, (a, b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)
console.timeEnd('Teste candidatos')

console.log(candidatos.map(o => o.NM_URNA_CANDIDATO)) // exibe apenas a propriedade NM_URNA_CANDIDATO