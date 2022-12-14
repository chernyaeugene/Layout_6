// прокрутка
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
const dataAttributes = [...document.querySelectorAll('.menu_link[data-goto]')].map((item)=>{
    return {
        'data': item.dataset.goto
    }
});
if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header_menu').offsetHeight;

            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
            dataAttributes.forEach((item,index)=>{
                menuLink.dataset.goto === item.data ? menuLinks[index].style.color = 'black' : menuLinks[index].style.color = '#828282'
            })
        }
    }
}

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_box_list');
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}