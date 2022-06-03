//retorna um numero aleatorio entre os dois parametros passados

        function rand(min, max) {//.Math se referencia a biblioteca matematica inclusa no JS
            return Math.floor(Math.random()* (max - min +1)) +min;
//.floor() é um metodo matematico para arredondar um numero para o inteiro anterior
//.random ()gera um numero aleatorio entre 0 e 1
        }console.log(rand(10,20))
   