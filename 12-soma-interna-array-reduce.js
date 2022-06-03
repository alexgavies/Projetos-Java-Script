//soma interna em um array com eliminação dos elementos menores que o parametro b

        function somaarray(a,b) {
            // .reduce() medodo para array onde recebe uma func com parametro de prev iniciando em indice 0 do array indicado e cur sendo o proximo numero a ser percorrido.
           return a.reduce(function(prev, cur) {
               return cur > b ? prev + cur : prev
           },0)//esse zero indica o nuemro inicial do prev

        }console.log(somaarray([1,2,3,4,5],3))
        // resultado a função elimina os numeros menores ou igual a 3 e soma o restante.
