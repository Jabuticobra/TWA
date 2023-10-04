const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const cadastro = document.getElementById('cadastro');

cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const snh = senha.value;
    if(snh.lenght > 6){
        alert(`${nome} a senha deve ter ao menos 6 digitos`);
    }else{
        cadastro.submit;
    }
});