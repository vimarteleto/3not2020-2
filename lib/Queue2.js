module.exports = class Queue {

    constructor() {
        this.data = []  // Armazenamento
        this.head = 0   // Inicio da fila
        this.tail = -1  // Final da fila
    }

    // Inserção
    enqueue(value) {
        this.tail++
        this.data[this.tail] = value
    }

    // Remoção
    dequeue() {
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // Olhadinha (no inicio da fila)
    peek() {
        return this.data[this.head]
    }

    // Tamanho
    size() {
        return this.tail - this.head + 1
    }
}