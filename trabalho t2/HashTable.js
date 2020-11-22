// Implementação da classe HashTable

module.exports = class HashTable {
    constructor() {
        // Vetor de armazenamento com 10 subvetores
        this.data = [
            this.zero = [],
            this.um = [],
            this.dois = [],
            this.tres = [],
            this.quatro = [],
            this.cinco = [],
            this.seis = [],
            this.sete = [],
            this.oito = [],
            this.nove = []
        ]

    }


    // Função hash calculando o resto da divisão por 10
    hash(value){
        const resto = value % 10
        return resto
    }
        
    // Método insert() para inserção e armazenamento dos valores na tabela
    insert(value) {
        value = parseInt(value)
        if(value >= 0 && !isNaN(value)) {
            const pos = this.hash(value)
            this.data[pos].push(value)
        }
    }
}
