//concatenação de duas arrays sem repetir os valores

        var som=[]
        function somar(a,b) {
            return [...new Set(a.concat(b))].sort()
            //[...elementos] converte todo seu conteudo em array. Pode usar tbm o Array.from()
            //returm [...a,...b] concatenação de array
            //new set()cria um objeto com valores unicos eliminando assim as repecições na concatenação
            //.conat() concatenação de array 
            //.sort() ordena os itens inclusos

        }console.log(somar([1,3,2],[3,4,5]))

