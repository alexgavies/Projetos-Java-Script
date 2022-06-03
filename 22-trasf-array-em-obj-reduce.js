function func(a) {
    return a.reduce((prev, cur)=>{//
        const letraInicial=cur[0].toLowerCase();//define uma variavel como o numero inicial a ser percorrido [0] do array//.toLowerCase()torna tudo nimuscula
        if (letraInicial in prev) { //se a primeira letra 
            prev[letraInicial]=[...prev[letraInicial], cur];
        }     //cria achave         cria o valor e inclui o valor anterio e o proximo
        else {
            prev[letraInicial]=[cur]
        }    // cria o primerio valor-sai do {} objeto vazio
        prev[letraInicial].sort();// ordena as palavras da array que contem a mesma letra
        return prev;
    }, {} );//{} inicia o .reduce() como um objeto vazio


}
console.log(func([
    'Aracaju',
    'Florianopolis',
    'São Paulo',
    'Foz do Iguaçu',
    'São Jose',
    'Rio de Janeiro',
    'Blumenau'
]));