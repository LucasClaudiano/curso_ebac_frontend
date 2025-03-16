let alunos = [
    {
        "nome":"Julio",
        "nota":5
    },
    {
        "nome":"Marcia", 
        "nota":4.5
    },
    {

        "nome":"Claudio",
        "nota":9
    },
    {
        "nome":"Maria",
        "nota":8
    },
    
]

const verificaNota = ()=> {
    const aprovados = alunos.filter(alunos=>alunos.nota>=6); 
    if(aprovados.length === 0){
        return "Nenhum aluno foi aprovado"; 
    }
    return aprovados; 
}

console.log(verificaNota()); 