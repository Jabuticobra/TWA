let casa = document.querySelectorAll('.casa');
let count = 0

casa.forEach(casa => {
    casa.addEventListener('click', event =>{
        
        if((count%2 == 0) && (event.target.innerText == '')){
            event.target.innerText = 'X';
            count++;
        }
        if((count%2 != 0) && (event.target.innerText == '')){
            event.target.innerText = 'O'
            count++;
        }
    })
})