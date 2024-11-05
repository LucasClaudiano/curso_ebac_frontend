const texto = document.querySelector('.hero__title');
const texto2 = document.querySelector('.hero__subtitle');
const texto3 = document.querySelector('.hero__text');
const texto4 = document.querySelector('.hero_contador');
console.log(texto);

function typeWrite(elemento, texto, callback) {
const textArray = texto.split('');
elemento.innerHTML = '';


function typeChar(i) {
    if (i < textArray.length) {
    elemento.innerHTML += textArray[i];
    setTimeout(() => {
        typeChar(i + 1);
    }, 75);
    } else {
    if (callback) {
        callback();
    }
    }
}

typeChar(0);
}

typeWrite(texto, "100 anos Aldegondo", () => {
typeWrite(texto2, "Venha comemorar o meu centenário.", () => {
typeWrite(texto3, "Quando 12/12/2024 às 00:00",()=>{

});
});
});