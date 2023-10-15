const dishes = [
    {
        name: "Truffle Delight",
        ingredients: "Fresh black truffles, homemade pasta, cream sauce, Parmigiano-Reggiano cheese",
        price: "$39.99"
    },
    {
        name: "Golden Lobster",
        ingredients: "Succulent lobster tail, saffron-infused butter, edible gold flakes, asparagus",
        price: "$59.99"
    },
    {
        name: "Diamond Cut Steak",
        ingredients: "Prime Wagyu steak, white truffle oil, roasted garlic, baby spinach",
        price: "$74.99"
    },
    {
        name: "Pearl Essence Sushi",
        ingredients: "Ahi tuna, salmon, avocado, caviar, sushi rice, nori, soy glaze",
        price: "$42.99"
    },
    {
        name: "Crystal Caviar",
        ingredients: "Beluga caviar, blinis, crème fraîche, mother-of-pearl spoon",
        price: "$89.99"
    },
    {
        name: "Saffron Elixir",
        ingredients: "Saffron-infused chicken, basmati saffron rice, pistachios, dried fruits",
        price: "$29.99"
    }
];
function createDishCard(dish) {
    const dishCard = document.createElement('div');
    dishCard.className = 'dishCard';

    const dishName = document.createElement('h2');
    dishName.className = 'dish-name';
    dishName.textContent = dish.name;

    const dishIngredients = document.createElement('p');
    dishIngredients.className = 'dish-ingredients';
    dishIngredients.textContent = dish.ingredients;

    const dishPrice = document.createElement('p');
    dishPrice.className = 'dish-price';
    dishPrice.textContent = dish.price;

    dishCard.appendChild(dishName);
    dishCard.appendChild(dishIngredients);
    dishCard.appendChild(dishPrice);

    return dishCard;
}

export function menu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const title = document.createElement('h1');
    title.classList.add('menu-title');
    title.textContent = 'MENU';

    const dishesContainer = document.createElement('div');
    dishesContainer.className = 'dishes-container';

    for (const dish of dishes) {
        const dishCard = createDishCard(dish);
        dishesContainer.appendChild(dishCard);
    }
    container.appendChild(title);
    container.appendChild(dishesContainer);
    return container;
}