//criando botões para fazer alterações de classes do DOM pelo javascript.
//criamos dois botôes que aplicam e retiram a classe .escuro no body da página

function modoEscuro(){
    const corpo = document.querySelector("body");
    let botao = document.querySelector("#modoEscuro");
    
    if(corpo.classList.contains("escuro")){
        corpo.classList.remove("escuro");
        botao.innerText = "Modo Escuro"
    }else{
        corpo.classList.add("escuro");
        botao.innerText = "Modo Claro"
    }
}

function trocaModo(){
    document.body.classList.toggle("escuro")
}

function muda(){
    const texto1 = document.querySelectorAll(".texto");
    //vai retornar um nodelist então tem que usar foreach na função abaixo pois não tem .classlist em um nodelist
    const texto2 = document.querySelectorAll(".texto2");
    t
    texto1.forEach(cor => {
        if(cor.classList.contains("texto")){
            cor.classList.replace("texto", "texto2")
        }
    });
}