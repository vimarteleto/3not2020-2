let comparacoes = 0, divisoes = 0, juncoes = 0

// fnComp -> função de comparação
// Parâmetros: dois valores a serem comparados
// Retorno:
// - true: se primeiro valor for MAIOR que segundo
// - false: caso contrário
function mergeSort(vetor, fnComp) {

    // Recebe dois vetores JÁ ORDENADOS PREVIAMENTE e os mescla
    // em um único vetor, também ORDENADO
    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length) {
            comparacoes++
            //if(vetEsq[posEsq] < vetDir[posDir]) {
            if(fnComp(vetDir[posDir], vetEsq[posEsq])) { // Parâmetros invertidos
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else { // vetDir[posDir] < vetEsq[posEsq]
                vetRes.push(vetDir[posDir])
                posDir++
            }
        }
        
        // slice(): retorna um subvetor a partir da posição espeficada até o fim
        
        // Sobra no vetor da esquerda
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
        // Sobra no vetor da direita
        else sobra = vetDir.slice(posDir)

        //console.log({posEsq, posDir, sobra})
        
        // A sobra é acrescentada ao resultado final
        return vetRes.concat(sobra)
    }
    
    if(vetor.length > 1) {
        // Encontra o meio do vetor
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio) // A posição do meio NÃO entra
        let vetDir = vetor.slice(meio)
        divisoes++
        //console.log('ANTES:', {vetor, vetEsq, vetDir})
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)
        //console.log('DEPOIS:', {vetEsq, vetDir})
        juncoes++
        return mesclarVetores(vetEsq, vetDir)        
    }
    return vetor
}

// Resultado esperado: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(mesclarVetores([0, 4, 7, 8, 9], [1, 2, 3, 5, 6]))

// console.log(mergeSort([33, 98, 77, 49, 2, 26, 93, 51, 14, 64]))

/*
const nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
console.log(mergeSort(nomes))
console.timeEnd('Teste nomes')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB):', memoria)
console.log({comparacoes, divisoes, juncoes})
*/

const candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
console.log(mergeSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO))
console.timeEnd('Teste candidatos')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB):', memoria)
console.log({comparacoes, divisoes, juncoes})