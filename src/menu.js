// Module for Menu
import './homepage.css';
import './menu.css';
import Eth from './eth.png';
import NFT_Taco from './nft_taco.jpeg';
import NFT_Pizza from './nft_pizza.jpeg';
import NFT_KFC from './nft_kfc.jpeg';
import NFT_BreakfastPlatter from './nft_breakfast_platter.jpeg';
import NFT_mcrib from './nft_mcrib.jpeg';
import NFT_burger from './nft_burger.jpeg';
const renderMenu = () => {
    // header
    console.log("test for menu module");
    document.body.innerHTML = '';
    const header = document.createElement('header');
    const restarauntName = document.createElement('div');
    restarauntName.id = "restaraunt_name";
    restarauntName.textContent = 'BiteCoin';
    const logo_div = document.createElement('div');
    const logo = new Image();
    logo.id = "logo";
    logo.src = Eth;
    logo_div.appendChild(logo);
    const home_links_ul = document.createElement('ul');
    home_links_ul.id = "links";
    const home_link = document.createElement('a');
    home_link.id = 'home_link';
    home_link.textContent = 'Home';
    home_links_ul.appendChild(home_link);
    const menu_link = document.createElement('a');
    menu_link.id = 'menu_link';
    menu_link.textContent = 'Menu';
    home_links_ul.appendChild(menu_link);
    const contact_link = document.createElement('a');
    contact_link.id = 'contact_link';
    contact_link.textContent = 'Contact';
    home_links_ul.appendChild(contact_link);



    header.appendChild(restarauntName);
    header.appendChild(logo_div);
    header.appendChild(home_links_ul);
    document.body.appendChild(header);

    // Menu Title
    const menu_title = document.createElement('h1');
    menu_title.id = 'menu_title';
    menu_title.textContent = 'Menu';
    document.body.appendChild(menu_title);
    
    //Menu Content
    const menu_section = document.createElement('div');
    const menu_section2 = document.createElement('div');
    menu_section.id = 'menu_section';
    menu_section2.id = 'menu_section2';
    const nft_taco = new Image();
    nft_taco.src = NFT_Taco;
    nft_taco.classList.add('menu_image');
    const nft_burger = new Image();
    nft_burger.src = NFT_burger;
    nft_burger.classList.add('menu_image');
    const nft_pizza = new Image();
    nft_pizza.src = NFT_Pizza;
    nft_pizza.classList.add('menu_image');
    const nft_breafast_platter = new Image();
    nft_breafast_platter.src = NFT_BreakfastPlatter;
    nft_breafast_platter.classList.add('menu_image');
    const nft_kfc = new Image();
    nft_kfc.src = NFT_KFC;
    nft_kfc.classList.add('menu_image');
    const nft_mcrib = new Image();
    nft_mcrib.src = NFT_mcrib;
    nft_mcrib.classList.add('menu_image');
    menu_section.appendChild(nft_taco);
    menu_section.appendChild(nft_burger);
    menu_section.appendChild(nft_pizza);
    menu_section2.appendChild(nft_breafast_platter);
    menu_section2.appendChild(nft_kfc);
    menu_section2.appendChild(nft_mcrib);
    document.body.appendChild(menu_section);
    document.body.appendChild(menu_section2);

    



}
export default renderMenu;