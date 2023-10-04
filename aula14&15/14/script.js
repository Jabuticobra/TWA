let imagens = ['./img/Cabbage.webp','./img/MOOOOOOOOOOOOLE.webp', "./img/chef's hat.webp", './img/bestlambo.webp'];

const troco = document.getElementById('slide');
let imgAtual = 0;
troco.setAttribute('src',imagens[imgAtual]);

const btnAvancar = document.getElementById('avancar');
const btnVoltar = document.getElementById('voltar');

btnAvancar.addEventListener('click', (event) =>{
    event.preventDefault();
    if(imgAtual < imagens.length-1){
        imgAtual++;
    }
    troco.setAttribute('src', imagens[imgAtual]);
});

btnVoltar.addEventListener('click', (event) =>{
    event.preventDefault();
    if(imgAtual > 0){
        imgAtual--;
    }
    troco.setAttribute('src', imagens[imgAtual]);
});

/*
btnAvancar.addEventListener('click', avancar)
btnVoltar.addEventListener('click', voltar)
*/

/*
function voltar(){
    if(imgAtual > 0){
        imgAtual--;
    }
    troco.setAttribute('src', imagens[imgAtual]);
}

function avancar(){
    if(imgAtual < imagens.length-1){
        imgAtual++;
    }
    troco.setAttribute('src', imagens[imgAtual]);
}
*/