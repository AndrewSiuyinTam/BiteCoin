import './contact.css';
import './homepage.css';
import Eth from './eth.png';
const renderContact = () => {
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

    // Create Contact Section
    const contact_title = document.createElement('h1');
    contact_title.id = 'contact_title';
    contact_title.textContent = 'Contact Us';

    const phone_title = document.createElement('h2');
    phone_title.id = 'phone_title';
    phone_title.textContent = 'Call Us';
    const phone_num = document.createElement('p');
    phone_num.id = 'phone_num';
    phone_num.textContent = '944-429-4833';

    const email_title = document.createElement('h2');
    email_title.id = 'email_title';
    email_title.textContent = 'Email Us';
    const email = document.createElement('p');
    email.id = 'email';
    email.textContent = 'BiteCoinNYC@crypto.com';
    document.body.appendChild(contact_title);
    document.body.appendChild(phone_title);
    document.body.appendChild(phone_num);
    document.body.appendChild(email_title);
    document.body.appendChild(email);
}
export default renderContact;