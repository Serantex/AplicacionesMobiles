var alumnos=[[1,2,3,4],[4,5,6,7],[8,9,10,11]];

var quienes=function(array){

var aprobo=(arr)=>arr>=4;

var aprobados=array.filter(a=>a.every(aprobo));
console.log(aprobados);
}


console.log(quienes(alumnos));