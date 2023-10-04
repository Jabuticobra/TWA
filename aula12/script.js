let impar = document.getElementsByClassName('impar');
let par = document.querySelectorAll('p :not(.impar)');

//o primeiro vai pegar tudo com a classe 'impar', ja o segundo, vai pegar todo paragrafo que NÃO for dessa classe, alem disso, o getelements é dinâmico, isso significa que se o código js alterar as classes, a coleção vai alterar de acordo, isso infelizmente implica na perda da usabilidade do forEach. Obviamente, o querySelectorAll vai ser o oposto, podendo usar forEach mas não sendo dinâmico, alem de ser um pouco mais pesado. note que usar getElementsBy e transformar em array acaba sendo mais pesado que usar o querySelectorAll, então é importante saber quando usar cada um. Normalmente usa-se getElementsById quando se deseja pegar uma unica coisa, e querySelector quando queremos uma coleção.

let primeiro = document.querySelectorAll('p');
console.log(primeiro[1]);

