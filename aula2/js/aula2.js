var tantofaz = "var -> basicamente isso pode mudar";
let tantofez = "let -> isso também pode mudar mas funciona diferente";
const mesmacoisa = "const -> isso não muda";

console.log(tantofaz);
console.log(tantofez);
console.log(mesmacoisa);

console.log(hoisting);
var hoisting = "sempre que declarada com 'var' o JS pesca ela e manda APENAS A DECLARAÇÃO pro inicio, por isso não dá erro e mostrou undefined porque a atribuição ficou embaixo";
console.log(hoisting);

var nome = "Matheus";
var idade = "29";
var comidaFavorita = "Salmão com molho de maracujá ou Pizza";
var algumaCoisa;
var outraCoisa;
var maisOutraCoisa;

//os tipos de dados do JS:
var palavras = "não tem char, é tudo string";
var numero = 3; //n tem int, double, etc. é tudo 'number'
var simOuNao = true;
var indefinido;
var nulo = null;
var simbulo = Symbol();