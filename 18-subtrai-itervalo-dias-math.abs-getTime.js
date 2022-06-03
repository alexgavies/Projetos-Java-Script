//compara as datas e retorna a qantidade de dias entre eles

function comp(a,b) {
    c= Math.abs((a.getTime() - b .getTime())/(1000*60*60*24))
    return c //math.abs converte numeros negativos em positivos
    //o calculo utilizado é transforma os parametros em milisegundos, subtrai eles, divide por milisegundos *segundos*minutos*horas por dia
}console.log(comp(
    new Date('2022/04/06'),
    new Date('2022/06/06')));