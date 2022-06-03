//conatena duas arrays retornando um objeto, caso o parametro b seja menor que o parametro a retorna null em seu valor

function func(a,b) {
    return Object.assign(...a.map((key, index)=> ({[key]:b[index] ||null})) )

   
 }
console.log(func(['a','b','c','d','e'],[1,2,3]));

console.log('');
//forma sem formula abreviada

function funcao(a,b) {
    const obj={}//cria uma objeto vazio 
    for (let i = 0; i < a.length; i++) {//percorre o parametro a
        const key=a[i];//atribuio valor da chave do objeto com os valores da array a
        obj[key]=b[i] || null; //atribui o valor de cada chave do objeto os valores da array b caso seja diferente-que sera indefined quando nao existir a posiçãoem relação ao parametro a- add null como valor.   
    }
    return obj
}
console.log(funcao(['a','b','c','d'],[1,2,3]));
