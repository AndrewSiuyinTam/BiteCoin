
import renderHeader from './homepage';
import renderMenu from './menu';
import renderContact from './contact';
import homepage from './homepage';
import renderHomepage from './homepage';

function render(){
    renderHeader();
    tabSwitching();
   

}
function tabSwitching(){
    const homeButton = document.getElementById('home_link');
    homeButton.addEventListener('click',() => {
        document.body.innerHTML = '';
        renderHeader();
        tabSwitching();
    });
    const menuButton = document.getElementById('menu_link');
    menuButton.addEventListener('click',() => {
        document.body.innerHTML = '';
        renderMenu();
        tabSwitching();
    });
    const contactButton = document.getElementById('contact_link');
    contactButton.addEventListener('click',() => {
        document.body.innerHTML = '';
        renderContact();
        tabSwitching();
    });

}
render();

