import './homepage.css';
import Eth from './eth.png';
import NFT_Sushi from './nft_sushi.jpeg';
import NFT_Burger from './nft_burger.jpeg';
import NFT from './nft.jpeg';
const renderHeader = () => {
    /// Header 
    document.body.innerText = '';
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

    // Title
    const restaraunt_title = document.createElement('h1');
    restaraunt_title.id = 'restaraunt_title'
    restaraunt_title.textContent = 'BiteCoin';
    document.body.appendChild(restaraunt_title);

    const grabber_paragraph = document.createElement('p');
    grabber_paragraph.id = "grabber_paragraph";
    grabber_paragraph.innerHTML = "Food so good, you need Crypto to eat it.<br />";
    grabber_paragraph.innerHTML += "Opening this June in NYC, this is <br />";
    grabber_paragraph.innerHTML += "the world's first ever Cryptocurrency restaraunt.<br />"
    grabber_paragraph.innerHTML += "Every item purchased is recorded on the blockchain.";
    document.body.appendChild(grabber_paragraph);

    //Image Gallery
    const image_gallery = document.createElement('div');
    image_gallery.classList.add('image_gallery');
    let sushi_img = new Image();
    sushi_img.src = NFT_Sushi;
    sushi_img.id="sushi_img";
    let burger_img = new Image();
    burger_img.src = NFT_Burger;
    burger_img.id = "burger_img";
    let nft_img = new Image();
    nft_img.src = NFT;
    nft_img.id = 'nft_img';
    image_gallery.appendChild(sushi_img);
    image_gallery.appendChild(burger_img);
    image_gallery.appendChild(nft_img);
    document.body.appendChild(image_gallery);

    return header;
    
}

    


export default renderHeader;