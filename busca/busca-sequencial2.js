// Para busca em vetores de objetos, precisamos comparar o atributo do objeto


function buscaSequencial(lista, valorBusca, fnComp) {
    for(let i = 0; i < lista.length; i++) {        
        if(fnComp(lista[i], valorBusca)) return i
    }
    return -1 // valorBusca não foi encontrado em lista
}

const listaNomes = require('./dados/lista-nomes')

function comparaNome(objeto, nome) {
    // Retorna true se o atributo first_name do objeto for igual a nome
    return objeto.first_name === nome
}


console.time('Buscando nome VINICIUS')
console.log(buscaSequencial(listaNomes, 'VINICIUS', comparaNome)) // comparaNome() está entrando no fnComp()
console.timeEnd('Buscando nome VINICIUS')


// Fazendo por arrow function diretamente:
console.time('Buscando nome VINICIUS')
console.log(buscaSequencial(listaNomes, 'VINICIUS', (objeto, nome) => objeto.first_name === nome))
console.timeEnd('Buscando nome VINICIUS')
