
// cotar 3 letras da palavras no inicio ou no fim 

function letras(text, flag="start") {
    if (text.length < 3) { // length sig comprimento
        return text
    }else if (flag==='start') {
        return text.slice(0,3)//slice sig fatiar 0 e 3sao indicesque indiaca onde deve ser o fatiantento do elemeto no aqui no caso é text 0-a 1-l 2-e o 3 fica de fora
    }else if (flag==="end"){
        return text.slice(text.length-3)// esse metodo indica que o corte deve ser de traz para frete 3-x 2-e 1-l o 0 fica de fora     podendo usar apenas tex.slice(-3)
    }
    //return text.length <3 ? text : flag ==='start' ? text.slice(0,3) : text.slice(-3) //seria a mesma coisa.
}
    
    console.log(letras('alex','end'))