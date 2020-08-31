var cual=[7,9,25,42,2,8,10];

var extraer=function(array,n){
    var resultado = array.filter(numero => numero!=n);
    console.log(resultado);
}

console.log(extraer(cual,2));

