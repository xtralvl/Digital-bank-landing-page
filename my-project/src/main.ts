import './mobile.scss';
import './tablet.scss';
import './biggertablet.scss';
import './desktop.scss';

const openIcon = document.getElementById('hamburger-icon') as HTMLButtonElement;
const closeIcon = document.getElementById('close-icon') as HTMLButtonElement;
const overlay = document.getElementById('small-screen-overlay') as HTMLDivElement;
const menu = document.getElementById('small-screen-menu') as HTMLDivElement;
const body = document.querySelector('body') as HTMLBodyElement;





openIcon.addEventListener('click', () => {
    if (!openIcon || !closeIcon || !overlay || !menu) return;
    openIcon.classList.add('hide');
    closeIcon.classList.add('show');
    overlay.classList.add('active');
    menu.classList.add('active');
    body.classList.add('menu-open');

})

closeIcon.addEventListener('click', () => {
    if (!openIcon || !closeIcon || !overlay || !menu) return;
    openIcon.classList.remove('hide');
    closeIcon.classList.remove('show');
    overlay.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('menu-open');



})