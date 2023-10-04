var a = 10;
console.log(`Supondo as variáveis 'a', 'b', e 'c', sendo o valor delas: a= ${a}, b= ++a e c= a++`);
// pré incrementando:
a = a + 1;
var b = a;
console.log(`com pré-incremento, valor de 'a' e 'b' é, respectivamente =`,a,b);
//pós incrementando:
var c = a;
a = a + 1;
console.log(`com pos-incremento, valor de 'a' e 'c' é, respectivamente =`,a,c);

console.log(`'if' e 'else' funciona igualzinho no C# e switch case é quase a mesma coisa, veja no código`);

var valor = 1;
switch (valor) {
    case 1:
        console.log(`switch('nomeDaVariável'){
        case 'valor da variável':
            aqui vem o que acontece; 
        break;

        default:
            aqui vem o que acontece se não entrar em nenhum caso
        break`)
        break;

    default:
        break;
}

console.log(`Todos esses valores retornam 'false':
null
0
NaN
null
undefined
'' -> string vasia
`)

console.log(`Todos esses valores retornam 'true':
true
1 (ou qualquer numero)
' ' -> string com espaço
'string' -> string com dados
-5 -> qualquer equação
{} -> um objeto JS
`)

console.log(`nesse treco hu3zento, temos várias comparações:
voce pode usar > (maior), < (menor), >= (maior ou igual), <= (menor ou igual), == (semelhante), === (exatamente igual)
para o operador ==, ele não verifica o tipo, ja === verifica.
dessa forma:
var a = "10";
var b = 10;
a == b : true;
a === b : false
no caso de strings, tanto == quanto === vai ser sensível à maiúsculas, que nem o resto do JS`)

console.log(`obviamente também temos os operadodes lógicos e/ou (&& para e, || para ou)`)

console.log(`mas como estamos nessa brincadeira chamada javascript, e imagino que deva funcionar la no C# também, dá pra fazer um 'if' meio avacalhado usando &&
var a = 0;
var b = true;
a && b && fazAlgumaCoisa;
dessa forma, fazAlgumaCoisa só é chamada se tanto 'a' quanto 'b' forem verdadeiros. No caso não é.
Isso pode ser feito só que de forma inversa com ||, ou seja:
a || b || fazOutraCoisa;
nesse caso fazOutraCoisa só é chamada se tanto 'a' quanto 'b' forem falsos.`)