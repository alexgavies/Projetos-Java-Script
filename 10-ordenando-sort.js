//ordenando itens de um array

        function func(a, order='asc') {//order='asc', isso configura asc como padrão caso nenhum parametro seja passado em order
            if (order==='asc') {
                return a.sort() //.sort() para ordenar os itens referidos
            }if ( order==='des') {
                return a.sort().reverse()//.reverse para inverter a ordem 
            }
            
        }console.log (func([9,1,5,8,7], 'des'))

        function funcione(a, order='asc') {
            return order==='asc'? a.sort() :a.sort ().reverse()
        }console.log (funcione(['w','a','g','b'], 'asc'))
