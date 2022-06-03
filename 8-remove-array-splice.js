//duas formas de como cortar os 3 primeiros indices de uma array 

var a= [1,2,3]
function remove(x) {
    if (x.length <= 3 ) {
        return x
    } else {
        return x.splice(3)
    }
}console.log(remove(a))

function remov(x) {
    return x.length <=3 ? x=[] : x.splice(3)
}console.log(remov(a))
