function converterHoras (){
    var inHora = document.getElementById('inHora'); 
    var outResposta = document.getElementById('outResposta'); 
    
    var hora = Number(inHora.value); 
    
    if( hora=="" || isNaN(hora)){
        alert("Digite a hora na Fraça1"); 
        inHora.focus; 
    }
    var horaNaFranca = hora +5; 
    
    if(horaNaFranca>24){
        horaNaFranca = horaNaFranca -24 ; 
    }
    outResposta.textContent = "Hora na França: "+horaNaFranca; 
    }
    var btn = document.getElementById('btn')
    btn.addEventListener('click', converterHoras); 