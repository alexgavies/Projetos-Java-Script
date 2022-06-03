//compara as datas retorna true para igual e false para diferente

function comp(a,b) {
    return a.getTime() === b.getTime();//getTime faz com que as datas se convertam para milisegundos para que seja possivel a comparação de igualdade
}console.log(comp(
    new Date('2022/04/06 06:30:00'),
    new Date('2022/04/06 06:30:00')
));
