//contagem de um numero minimo a um numero maximo

        function inter(min, max) {
            return min === max ? [min] : [min].concat(inter(min+1, max))
            //uso de conacatenação e recursividade na função coma implementação de 1+ ao min a cada recursão.
            }console.log(inter(2, 5))

            function int(min, max) {//outra forma 
                return Array(max-min+1)//coverte os valores em array
                .fill(min)//preenche com min
                .map((prev, next)=>prev+next)//mapeia o array de 1 em 1 item
            }console.log(int(5,8))