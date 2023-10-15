import { homePage} from './module/home';
import {menu} from './module/menu';
import {contact} from './module/contact';
import './style.css';
import logoImg from './logo.png';

function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';

const logo = new Image();
    logo.src = logoImg;
    logo.classList.add('logo');

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    header.appendChild(logo);
    header.appendChild(buttons);
    return header;
}

function toggleContent(contentToDisplay) {
    content.innerHTML = '';

    content.appendChild(header);
    content.appendChild(contentToDisplay);
}

const header = createHeader();
const content = document.querySelector("#content");
const homeContent = homePage();
const createMenu = menu();
const createContact = contact();
const toTheMenuBtn = homeContent.querySelector('.menu');

const homeBtn = document.createElement('button');
homeBtn.className = 'homeBtn';
homeBtn.textContent = 'Home';
header.querySelector('.buttons').appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.className = 'menuBtn';
menuBtn.textContent = 'Menu';
header.querySelector('.buttons').appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.className = 'contactBtn';
contactBtn.textContent = 'Contact';
header.querySelector('.buttons').appendChild(contactBtn);

toTheMenuBtn.addEventListener('click',()=>{
    toggleContent(createMenu);
});


homeBtn.addEventListener('click', () => {
    toggleContent(homeContent);
});

menuBtn.addEventListener('click', () => {
    toggleContent(createMenu);
});

contactBtn.addEventListener('click',()=>{
    toggleContent(createContact);
})

content.appendChild(header);
content.appendChild(homeContent);
