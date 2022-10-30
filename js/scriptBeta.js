(function(){
    const listElements = document.querySelectorAll('.menu__item--show')
    const list = document.querySelector('menu__links');
    const menu = document.querySelector('menu__burguer');

    const addClick = () =>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                let submenu = element.children[1]
                element.classList.toggle('menu__item--active')
            })
        })
        
    }
addClick();

})();