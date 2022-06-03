
// função mescla duas arrays em um unico obj parametro a sendo chave e parametro b sendo valor.
        var letras=['a','b','c']
        var num=[1,2,3]



        function func(a,b) {
           return Object.assign(...a.map((key, index)=> ({[key]:b[index]})) )
        }console.log(func(letras,num));

        function fun(a,b) {
            return a .reduce((obj, chave, valor)=>({...obj, [chave]: b[valor]}),{})
        }console.log(fun(letras,num))

        function fu(a,b) {
            return Object .fromEntries(a.map((chave,valor)=>[chave,b[valor]]))// forma mais pratica e facil de ler
        }console.log(fu(letras,num))