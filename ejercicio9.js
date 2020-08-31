var numeros=[7,9,25,42,2,8,10];

var even =function(n){
    if(n%2==0){
        return true;
    }
}

var rechazar =function(n,array){
    var resultado = array.filter(n=>even(n));
    console.log(resultado);
}

console.log(rechazar(even,numeros));
