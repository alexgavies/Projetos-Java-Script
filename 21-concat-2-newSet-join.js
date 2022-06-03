//receber dos objets Set e retorna um unico objeto Set com os  valores dos dois parametros concatenados
//new Set recebe desde dados primitivos (strings, numbers,boolean) até objetos
function func(a,b) {
  return new Set([...a,...b]);
}
const result=func(new Set('a@LEEX4'),new Set('345'))//slavar em const para retornar em string
console.log([...result].join(''));// retorna a variavel em um array com a conversão da junção de .join com parametro ('') vazio para transformar em string  

console.log(func(new Set('ALEEX4'),new Set('345')));//retorna em formato Set sendo um objeto iteravel 

//new Set cria um abjeto com valores iteraveis, por exemplo se um new Set recebe uma palavra ele considera como uma array de caractaries exemplo-sem uma new Set recebe a string 'ALEEX' seu valor se torna - new Set('A','L','E','X') sempre mantendo os valoes unicos

