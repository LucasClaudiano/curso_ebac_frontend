const container = document.getElementById('container')
const num1= document.getElementById('num-1'); 
const num2= document.getElementById('num-2'); 


container.addEventListener('submit', function(e){
e.preventDefault();
    
const container = document.getElementById('container')
const num1= document.getElementById('num-1'); 
const num2= document.getElementById('num-2'); 
const mensagemSucesso = `Parabéns o número ${num2.value} \n é maior que o ${num1.value} . `

    if(num2.value > num1.value){
        const containerSucesso =document.querySelector('.mensagem-sucesso');
        containerSucesso.style.display ='block';

        containerSucesso.innerHTML = mensagemSucesso; 

        num1.value=""; 
        num2.value=""; 
    }else{
        document.querySelector('.mensagem-erro').style.display='block'; 
        
    }

})

