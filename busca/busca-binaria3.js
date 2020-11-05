// Pré-requisito para a busca binária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca
let comp = 0

// Implementação recursiva:
// Quando uma função chama a si mesma com pelo menos um de seus parametros com valor alterado.
// Toda implementação recursiva precisa de, pelo menos, uma condição de saída, que não chama a função.
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {   
    if(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verifica se o valor na posição média é o valor de busca
        if(res == 0) {
            comp++
            return meio // Condição de saída sem chamada da função recursiva
        }
        else if(res < 0) {
            comp += 2
            // fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        }
        else {  // res > 0
            comp += 2
            // inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
        }
    }
    return -1  // Valor não encontrado

}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]
console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    if(busca === elPos) return 0
    else if (busca < elPos) return - 1
    else return 1
}))