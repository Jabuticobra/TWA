let titulo = document.getElementById(`titulo`)

let Ana_Mariana = {
    quantidade : 10,
    nome : `Mariana Conta`,
    conta_melhorzinha(){
        let letra = '';
        let cont = [];
        for(let i = 1; i <= this.quantidade; i++){
            cont.push(` é ${i}`);
            letra += `Mariana conta ${i}. \n Mariana conta ${i}, ${cont}, é!\n Ana, viva a Mariana, viva a Mariana. \n\n`

        }
        return letra;
    },
};

let musica = document.getElementById(`musica`);

titulo.addEventListener('click', ()=>{
    titulo.innerText = Ana_Mariana.nome;
    musica.innerText = Ana_Mariana.conta_melhorzinha();
});



