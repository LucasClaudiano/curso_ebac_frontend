

const dataDoEvento = new Date("Dec 12, 2024 00:00:00"); 
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date(); 
    const timeStampAtual = agora.getTime(); 

    const distanciaAteOEvento = timeStampDoEvento -timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs= 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteOEvento= Math.floor(distanciaAteOEvento/diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs)/horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs)/minEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minEmMs)/1000);


document.getElementById('contador').innerHTML = `Falta para o evento: ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

if(diasAteOEvento<0){
    clearInterval(contaAsHoras); 
    document.getElementById('contador').innerHTML = `O evento já foi realizado  `
}
},1000);