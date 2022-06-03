//adiciona a data passadano parametro a a quantidade de dias passada no parametro b

function func(a,b) {
    
    a.setDate(a.getDate()+b-1);
    return a.getDate();
    //.setDate() é para definir uma data referente ao inicio do mês, e .getDate() é a data atual.
    //ficando assim para o parametro a selecione o dia do mes referente a data atual esome o parametro b.
}
console.log(func(new Date('01-02-2022'), 3));
