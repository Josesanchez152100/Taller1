//entradas
let codigoAcceso="ARQ2659: Jose Sánchez";
let caracterSeparador=": ";


//función
function separarCodigo(codigo,separador){

    let cadena=codigo.split(separador);
   
    return (cadena[1]);

}

console.log("El nombre del piloto es "+separarCodigo(codigoAcceso,caracterSeparador));