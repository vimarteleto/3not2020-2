class Node {
    constructor(value) {
        this.data = value
        this.left = null    // Esquerda
        this.right = null   // Direita
    }
}

module.exports = class BinarySearchTree {
    
    constructor() {
        this.root = null // Raiz da arvore
    }

    insert(value) {
        let node = new Node(value)

        // Inserção do nodo raiz (primeiro nodo)
        if(this.root === null) this.root = node
        // Busca recursiva pelo local correto de inserção
        else this.insertNode(node, this.root)
    }

    // Insere um nodo em uma subarvore a partir da raiz indicada
    // Parametros
    // - node: o nodo a ser inserido
    // - root: o nodo a partir do qual será efetuada a busca
    insertNode(node, root) {
        if(node.data < root.data) { // Lado esquerdo
            // Caso 1: a esquerda do nó root está livre
            if(root.left === null) root.left = node // O nodo entra no lugar livre

            // Caso 2: a esquerda do nó root está ocupada, reinicia a busca a partir da nova raiz
            else this.insertNode(node, root.left)
        }
        else if(node.data > root.data) { // Lado direito
            if(root.right === null) root.right = node
            else this.insertNode(node, root.right)
        }
    }
}