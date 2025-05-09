let botao = document.querySelector("#botao");
botao.style.background="green";


botao.addEventListener("click" ,mudatexto);


    
function mudatexto(){
    
    botao.innerHTML= "Seja muito bem vindo ao meu trabalho!!!!";
    botao.style.color= "white";
    botao.style.background="red";
}

