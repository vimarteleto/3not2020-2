module.exports = class Stack2 {
    constructor() {
        this.data = {} // armazenamento
        this.count = 0
    }

    // inserção
    push(value) {
        this.count++
        this.data[this.count] = value 
    }

    // remoção
    pop() {
        let value = this.data[this.count]
        delete this.data[this.count]
        this.count--
        return value
    }

    // olhadinha do topo da pilha
    peek() {
        return this.data[this.count]
    }

    // retorna o numero de elementos da pilha
    size() {
        return this.count
    }
}