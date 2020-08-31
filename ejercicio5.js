var alumno = [4,5,6,7];

var aprobo=function(array){
    var aprobo=(arr)=>arr>=4;
    console.log(array.every(aprobo));       
}

console.log(aprobo(alumno));