// Deque = double-ended queue
// Fila de duas pontas
// Permite inserções e remoções em qualquer extremidade

module.exports = class Deque {

    constructor() {
        this.data = []  // Armazenamento
    }

    // Inserição no inicio
    insertFront(value) {
        this.data.unshift(value)
    }

    // Inserção no fim
    insertRear(value) {
        this.data.push(value)
    }

    // Remoção no inicio
    removeFront() {
        return this.data.shift()
    }

    // Remoção no fim
    removeRear() {
        return this.data.pop()
    }

    // Olhadinha no inicio
    peekFront() {
        return this.data
    }

    // Olhadinha no final
    peekRear() {
        return this.data[this.data.length - 1]
    }

    size() {
        return this.data.length
    }
}