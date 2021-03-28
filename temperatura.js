//entradas
let temperaturaMaxima=70;
let temperaturaMinima=-70;

//función
function calcularTemperaturaMedia(temperaturaMax,temperaturaMin){
  
    let temperaturaMedia = ((temperaturaMax+temperaturaMin)/2);
    
   return (temperaturaMedia);
    

}

console.log("la temperatura media es "+calcularTemperaturaMedia(temperaturaMaxima,temperaturaMinima)+"°C");
