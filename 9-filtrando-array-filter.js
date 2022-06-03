//filtrando itens de um array, exclui o iten passado pelo parametro e retorna uma nova array filtrada

function verif(x,y) {
const filtrado=[]//criar uma const para retornar depois
for( const item of x)// for percorrera os itens do array x
if (item !== y) {// se item for diferente de y 
    filtrado.push(item)// adicione na const filtrado
}
return filtrado //retornar a cosnt depois de adicionar os itens
}  
console.log(verif([1,2,3,4,false,'alex'], false))

// outra forma FILTER

function verifica(x,y) {
   return x.filter(item => item !==y) // nesse caso o filter percorrera todo o array e eliminara oque for ingual a y com a arrow function
}

console.log(verifica([1,2,3,4,false, 'alex'], false))

    