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

    // Percurso em-ordem
    inOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            this.inOrderTraversal(fnCallback, root.left) // Sub-arvore lado esquerdo
            fnCallback(root.data) // Node raíz
            this.inOrderTraversal(fnCallback, root.right) // Sub-arvore lado direito
        }        
    }

    // Percurso pré-ordem
    preOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            fnCallback(root.data) // Node raiz
            this.preOrderTraversal(fnCallback, root.left) // Sub-arvore lado esquerdo
            this.preOrderTraversal(fnCallback, root.right) // Sub-arvore lado direito
        }        
    }

    // Percurso pós-ordem
    postOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {                
            this.postOrderTraversal(fnCallback, root.left) // Sub-arvore lado esquerdo
            this.postOrderTraversal(fnCallback, root.right) // Sub-arvore lado direito
            fnCallback(root.data) // Node raiz
        }        
    }

    // Encontrar o menor valor da arvore
    min() {
        let minimo = this.minNode(this.root)
        
        if(minimo) return minimo.data
        else null
    }

    minNode(root) {
        let minimo = root
        // Vira a esquerda do root e desce
        while(minimo != null && minimo.left != null) {
            minimo = minimo.left
        }
        return minimo
    }

    // Encontrar o maior valor da arvore
    max() {
        let maximo = this.maxNode(this.root)
        
        if(maximo) return maximo.data
        else null
    }

    maxNode(root) {
        let maximo = root
        // Vira a esquerda do root e desce
        while(maximo != null && maximo.right != null) {
            maximo = maximo.right
        }
        return maximo
    }
}