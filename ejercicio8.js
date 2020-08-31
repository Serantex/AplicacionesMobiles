var cuantosCumplen=[7,9,25,42,2,8,10];

var even=function(array){
var pares=0;
for(var i of array){
 if(i%2==0){
     pares++;
 }
}
console.log(pares)
}



console.log(even(cuantosCumplen));
