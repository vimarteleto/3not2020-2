// Esta classe de tabela de espalhamento armazena números inteiros
// em 10 diferentes vetores. O vetor exato em que cada número irá
// cair é determinado pela função hash, que dividirá o número por 10
// e usará o resto da divisão para isso.

class HashTable {
   
    constructor() {
       // Um vetor com outros 10 vetores dentro
       this.table = [
          [], // vetor para armazenar números com final 0
          [], // vetor para armazenar números com final 1
          [], // vetor para armazenar números com final 2
          [], // vetor para armazenar números com final 3
          [], // vetor para armazenar números com final 4
          [], // vetor para armazenar números com final 5 
          [], // vetor para armazenar números com final 6
          [], // vetor para armazenar números com final 7
          [], // vetor para armazenar números com final 8
          []  // vetor para armazenar números com final 9
       ]
    }
 
    // Função de hash
    hash(num) {
       // Retorna o resto da divisão de num por 10. Esse
       // será o índice do vetor no qual num será armazenado
       return num % 10
    }
 
    // Adiciona um número inteiro à tabela de espalhamento
    add(num) {
       num = parseInt(num)  // Assegura-se de que é um número inteiro
 
       // Somente adiciona se for um número válido
       if(! isNaN(num) && num >= 0) {
          // Chama a função de hash para determinar o índice do vetor
          let idxVetor = this.hash(num)
          
          // Adiciona o número ao vetor apropriado
          this.table[idxVetor].push(num)
       }
    }
 
 }
 module.exports = HashTable
 
 let ht = new HashTable()
 
 ht.add(7)
 ht.add(50)
 ht.add(99)
 ht.add(23)
 ht.add(200)
 ht.add(25)
 ht.add(3)
 ht.add(56)
 ht.add(18)
 ht.add(232)
 ht.add(309)
 ht.add(0)
 ht.add(875)
 ht.add(35.2)
 ht.add(718)
 ht.add(404)
 ht.add('abublebuble') // Será solenemente ignorado
 ht.add(71)
 ht.add(67)
 
 // Exibindo a tabela de espalhamento
 console.log(ht)