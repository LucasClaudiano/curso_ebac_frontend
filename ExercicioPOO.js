function lojas(nome,cnpj){
    this.nome = (nome),
    this.cnpj = (cnpj);
}
function setorLojas(tamanho, setor, corDaFaixada){
    this.tamanho=(tamanho),
    this.setor =(setor),
    this.corDaFaixada=(corDaFaixada);
}
function lojasDoShopping(nome,cnpj,tamanho, setor, corDaFaixada, valorDaLoja, valorDoAluguel){
    lojas.call(this, nome, cnpj); 
    setorLojas.call(this, tamanho, setor,corDaFaixada); 
    this.valorDaLoja = (valorDaLoja),
    this.valorDoAluguel = (valorDoAluguel); 
    
}

const casasBahia = new lojasDoShopping("Casas Bahia", 122299, "20 metros quadrados", "Varejo", "Azul", 1.0000, 20.000); 

console.log(casasBahia); 