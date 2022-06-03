//verifica se alguma chave de a é igual ao parametro passado em b

        function func(a,b) {
            return a[b]!==undefined // resolve o caso porem o indefined filtra pela chave e pelo valor da chave
        }console.log(func({a:1,b:undefined,c:3},'b'))// NAO ESTA CORRETO
        console.log(func({a:1,b:2,c:3},'z'))
        console.log(func({a:1,b:2,c:3}, 3))

        console.log('');

        function funca(a,b) {
            return b in a // verifica se o valor de b tambem existe como chave em a
        }console.log(funca({a:1,b:2,c:3},'b'))
        console.log(funca({a:1,b:2,c:3},'z'))
        console.log(funca({a:1,b:2,c:3}, 3))

        console.log('');

        function funcao(a,b) {
            return a .hasOwnProperty(b) // verifica se tem Propriedade ou chave igual ao parametro (b)
        }console.log(funcao({a:1,b:2,c:3},'b'))
        console.log(funcao({a:1,b:2,c:3},'z'))
        console.log(funcao({a:1,b:2,c:3}, 3))

   