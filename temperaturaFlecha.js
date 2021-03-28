//entradas
let temperaturaMaxima=70;
let temperaturaMinima=60;

//función
let calcularTemperaturaMedia=(temperaturaMax,temperaturaMin)=>{
    let temperaturaMedia=((temperaturaMax+temperaturaMin)/2);
    return (temperaturaMedia);
}  
    
console.log("la temperatura media es "+calcularTemperaturaMedia(temperaturaMaxima,temperaturaMinima)+"°C");