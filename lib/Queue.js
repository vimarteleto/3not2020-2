module.exports = class Queue {

    constructor() {
        this.data = []  // Armazenamento
    }

    // Inserção
    enqueue(value) {
        this.data.push(value)
    }

    // Remoção
    dequeue() {
        return this.data.shift()
    }

    // Olhadinha (no inicio da fila)
    peek() {
        return this.data[0]
    }

    // Tamanho
    size() {
        return this.data.length
    }
}