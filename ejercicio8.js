var numeros=[7,9,25,42,2,8,10];

var even =function(n){
    if(n%2==0){
        return true;
    }
}

var cuantosCumplen =function(n,array){
var pares=0;
for(var i of array){
 if(n(i)===true){
     pares++;
 }
}
console.log(pares)
}

console.log(cuantosCumplen(even,numeros));
