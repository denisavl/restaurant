export function contact(){
    const container = document.createElement('div');
    container.className = 'contact-container';
    
    const title = document.createElement('h1');
    title.classList.add('title-contact');
    title.textContent = 'Contact Us';

    const containerInfo = document.createElement('div');
    containerInfo.className = 'container-info';

    const phone = document.createElement('p');
    phone.className = 'phone';
    phone.textContent = 'Phone: +40759-374-805';

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'Email: deni_deluxe@yummy.com';

    const adress = document.createElement('p');
    adress.className = 'adress';
    adress.textContent = 'Adress: 123 Opulent Avenue Elegant City, ELG 56789 Gourmetland';

    containerInfo.appendChild(phone);
    containerInfo.appendChild(email);
    containerInfo.appendChild(adress);

    container.appendChild(title);
   container.appendChild(containerInfo);

    return container;
}