//contador de letras : conta quantas letras do parametro b tem no parametro a 

        function confere(a,b) {//conta quantas strings do paramtro a tem dentro do parametro b
            return b.match(new RegExp(a,'gi')).length
        }
        console.log(confere('a', 'alex silva'))

    //outra forma
    function conf(a,b) {
        return b.toLowerCase().split(a.toLowerCase()).length-1//.split corta os itens selecionados e trasforma em uma array.
        //o .length conta os itens do array.
    }console.log(conf('a', 'alex silva alves'))
