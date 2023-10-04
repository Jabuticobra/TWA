console.log(`temos aqui no Hu3Script o 'ternário' que é um if de estrutura mais simples`);
var frequencia = 80;
var passou = (frequencia >= 75)? `Passou` : `Reprovado por Infrequencia`;
console.log(frequencia,passou);
console.log(`vamos tentar com frequencia menor então:`)
frequencia = 30;
var passou = (frequencia >= 75)? `Passou` : `Reprovado por Infrequencia`;
console.log(frequencia,passou);
console.log(`a estrutura dele é então: (variável > comparação)? valor-se-true : 'valor-se-false`);

console.log(`agora sobre funções:
Abaixo temos o resultado de uma função que retorna a area de um quadrado:`);
var lado = 5
var area = areaQuadrado(lado)
function areaQuadrado(valor){
    return valor*valor;
}
console.log(lado, area);
console.log(`a estrutura da função é a seguinte:
`,areaQuadrado);

console.log(`diferente do C# você NÃO pode fazer superposição de funções. uma função só pode ter uma única assinatura.
É aqui que a coisa começa a ficar complicada de entender.
temos no javascript um tipo de função chamada função anônima que tem o seguinte modelo:
var funcao = function()`);
console.log(`Essa meleca é um pouco confusa e vai ser usada para funções de callback.`)

addEventListener('click',function(){
    console.log(`Clicou`);
});

console.log(`toda vez que você clica na tela o console vai apresentar a mensagem clicou. Agora ta explicado porque fica aparecendo "clicou" no console`);
console.log(`é importante lembrar tb que se você chama uma função com parenteses depois dela ter sido declarada, o Hu3script simplesmente executa a função e fica por isso mesmo.`)

var imprimeClique = function(){
    console.log("Clicou errado");
}
addEventListener('click', imprimeClique());

var funcaoSeta = (valor) => {valor*2};

console.log(`por isso que mesmo se você não clicou ja ta falando ali que você clicou errado.
Funções anônimas geralmente são parâmetros de outras funções, mais comumente nessas funções de callback.`);