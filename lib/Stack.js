module.exports = class Stack {
    
    constructor() {
        this.data = [] // armazenamento
    }

    // inserção
    push(value) {
        this.data.push(value)
    }

    // remoção
    pop() {
        return this.data.pop()
    }

    // olhadinha do topo da pilha
    peek() {
        return this.data[this.data.length - 1]
    }

    // retorna o numero de elementos da pilha
    size() {
        return this.data.length
    }
}