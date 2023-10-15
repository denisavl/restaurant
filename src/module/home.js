export function homePage(){
        const container = document.createElement('div');
        const description = document.createElement('div');
        description.classList.add('description');

        const slogan = document.createElement('div');
        slogan.classList.add('slogan');
        slogan.textContent = 'Embark on an extraordinary gastronomic journey';

        const luxury = document.createElement('div');
        luxury.classList.add('luxury');
        luxury.textContent = 'Luxury only';

        const toTheMenuBtn = document.createElement('button');
        toTheMenuBtn.classList.add('menu');
        toTheMenuBtn.textContent = 'To the Menu';

        description.appendChild(slogan);
        description.appendChild(luxury);
        description.appendChild(toTheMenuBtn);
        container.appendChild(description);

        return container;
};

