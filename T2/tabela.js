const HashTable = require('./HashTable')

let tabela = new HashTable()

// Inserção de valores na tabela pelo método insert()
tabela.insert(1)
tabela.insert(2)
tabela.insert(3)
tabela.insert(4)
tabela.insert(5)
tabela.insert(6)
tabela.insert(7)
tabela.insert(8)
tabela.insert(9)
tabela.insert(10)
tabela.insert(71)
tabela.insert(52)
tabela.insert(83)
tabela.insert(94)
tabela.insert(125)
tabela.insert(66)
tabela.insert(47)
tabela.insert(38)
tabela.insert(229)
tabela.insert(50)
tabela.insert(15)

// Visualização dos vetores com console.log()
console.log(tabela)

// Visualização em tabela com console.table()
console.table(tabela)