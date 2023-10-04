console.log(`podemos declarar funções de algumas formas

function funcao(param){
    console.log(param);
}

ou:

var outraFuncao = function(params){
    console.log(params);
}

sendo a segunda uma função anônima. que deve ser associada a uma variável`)

console.log(`também, como visto na aula passada, temos a arrow function, que é uma função anônima simplificada com a seguinte estrutura:
var nomeDaFunção = (parametros da função) => {estrutura da função}`)

//na forma de função "normal"
var peso = 80, altura = 1.72;
function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(`considerando peso de 80kg e altura de 1,72m o imc calculado com a function "normal" seria: `,imc(peso,altura));

//em forma de arrow function:
peso = 74;
altura = 1.73;
var funcaoimc = (peso,altura) => {
    return peso / (altura ** 2);
};


console.log(`considerando peso de 74kg e altura de 1,73m o imc calculado via arrow function seria: `, funcaoimc(peso, altura) );

console.log(`na aula passada eu comentei que se você chama uma função com parenteses depois dela ter sido declarada, o Hu3script simplesmente executa a função. Para evitar esse comportamento devemos usar uma arrow function:

var imprimeClique = function(){
    console.log("Clicou corrigido");
}

addEventListener('click', ()=>{
    imprimeClique();
});

Dessa forma o EventListener vai funcionar normalmente. Note que existe uma arrow function ali que torna possível utilizar a função que tinha sido declarada anteriormente.`);

var imprimeClique = function(){
    console.log("Clicou corrigido");
}

addEventListener('click', ()=>{
    imprimeClique();
});