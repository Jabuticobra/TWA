console.log(`agora vamos mostrar algumas maracutaias com variáveis e a diferença entre 'var' e 'let':

No JS podemos simplesmente escrever uma variável e ele vai aceitar, isso é uma variável super global:`);

abacate = 2;
console.log(typeof abacate, abacate);

console.log(`Para declarar, podemos usar 'const', que declara uma constante; 'var' e 'let', que são para variáveis.
as diferenças entre elas são:
1- 'const' depois de atribuido uma vez não pode ser alterado.
2- 'var' pode ser acessado pelo escopo externo, enquanto o 'let' e o 'const' não permitem isso:`);

let js_e_zuado = true;
if(js_e_zuado){
    var texto = `se você ta lendo isso é porque vazou o escopo`;
    let nao_vai_aparecer = `Para de usar 'var', seu filha da puta!`;
}
let nao_vai_aparecer = true;
console.log(texto);
console.log(nao_vai_aparecer, `essa undefined não é a mesma variável que tá dentro do if`);
console.log(`a partir de agora não vamos mais ver nada no console. vamos mexer diretamente no DOM, ou seja, vamos mexer diretamente na página web.`)