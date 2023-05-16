//variable for load theme 
let showMenu = true;
const mainContainer= $('#theme-main-container');
const leftNav = $('#theme-left-nav');
const layoutWidthMenuClass = 'cgc-main-container';
const layoutWidthoutMenuClass = 'cgc-main-container-full';

//Method to hide or show menu
$('.js-hide-show-menu').on('click', function(){
    showMenu = !showMenu;

    if (!showMenu) {
        mainContainer.removeClass(layoutWidthMenuClass).addClass(layoutWidthoutMenuClass);
        leftNav.css('display', 'none');
    } else {
        mainContainer.removeClass(layoutWidthoutMenuClass).addClass(layoutWidthMenuClass);
        leftNav.css('display', 'block');
    }
});