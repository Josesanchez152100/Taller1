//entradas
let coordenadaFinalX=70;
let coordenadaFinalY=-50;
let coordenadaInicialX=0;
let coordenadaInicialY=0;

//función
let calcularDistancia=(xinicial,xfinal,yinicial,yfinal)=>{

    let distancia=Math.sqrt((Math.pow((xfinal-xinicial),2))+(Math.pow((yfinal-yinicial),2)));

    return distancia;

}

console.log("La distancia hasta NABOO es "+calcularDistancia(coordenadaInicialX,coordenadaFinalX,coordenadaInicialY,coordenadaFinalY));