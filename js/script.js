// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__body');
const menuItem = document.querySelectorAll('.header__link');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', event => {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
        })
    })
}


// Изменение аквтивного пункта меню
var menu = document.getElementById('header__list');

for(let i = 0; i < menu.children.length-1; i++){
    menu.children[i].querySelector('a').classList.remove('header__item-active');
    menu.children[i].querySelector('a').onclick = activeMenu;
}
function activeMenu(){
    for(let i = 0; i < menu.children.length-1; i++){
        menu.children[i].querySelector('a').classList.remove('header__item-active');
    }
    this.classList.add('header__item-active');
}