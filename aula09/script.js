var Mariana = {
    quantidade : 10,
    conta(){
        var letra = '';
        for(var i = 1; i <= this.quantidade; i++){
            letra += `Mariana conta ${i}. \n Mariana conta ${i}, `
            for(var j = 1; j <= i; j++){
                letra += `é ${j},`
            }
            letra += `é!\n`
            letra += `Ana, viva a Mariana viva a mariana\n\n`
        };
        console.log(letra);
    },    
};

var Mariana2 = {
    quantidade : 10,
    conta_melhorzinha(){
        var letra = '';
        var cont = [];
        for(var i = 1; i <= this.quantidade; i++){
            cont.push(`é ${i} `);
            letra += `Mariana conta ${i}. \n Mariana conta ${i}, ${cont} é!\n Ana, viva a Mariana, viva a Mariana.`

        }
        console.log(letra)
    },
};

// essa aula ta meio zuada então olha aí como funciona o for each:
var minhas_coisas = ["uma coisa", "outra coisa", "AQUELA coisa", "coisinha"];

coisas.forEach((coisa) => {
    console.log(coisa);
});

function imprime_item(coisa){
    console.log(coisa);
}

coisas.forEach(imprime_item);