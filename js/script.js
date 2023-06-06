const btnMenu = document.querySelector('.menuToggle');
const navegation = document.querySelector('.navegation');


btnMenu.onclick = function(){
    navegation.classList.toggle('open');
}

const list = document.querySelectorAll('.list');
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')    
}

list.forEach((item)=>
    item.addEventListener('click',activarLink)
);