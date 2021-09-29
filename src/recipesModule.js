const recipes = (() => {
    let allRecipes = [];
    const add = (img, name, ...desc) => allRecipes.push([img, name, desc]);
    const get = () => allRecipes;
    return {add, get}
})();

export function displayRecipes() {
    const content = document.getElementById('content');

    if (document.querySelector('main')) document.querySelector('main').remove();
    const main = document.createElement('main');

    const allRecipes = recipes.get();
    allRecipes.forEach((recipe) => {
        const fragment = new DocumentFragment();
        
        const img = document.createElement('img');
        img.src = recipe[0];
        img.classList.add('potion-img');
        
        const desc = document.createElement('div');
        desc.classList.add('desc');

        const name = document.createElement('h2');
        name.textContent = recipe[1];

        const ul = document.createElement('ul');

        for (let i = 0; i < recipe[2].length; i++) {
            const ingre = document.createElement('li');
            ingre.textContent = recipe[2][i];
            ul.appendChild(ingre);
        }
        
        const recipeCtn = document.createElement('div');
        recipeCtn.classList.add('recipe');

        recipeCtn.appendChild(img);
        desc.appendChild(name);
        desc.appendChild(ul);
        recipeCtn.appendChild(desc);
        main.appendChild(recipeCtn);
    })

    content.appendChild(main);
}

recipes.add('daiquiri.jpg', 'Daiquiri Potion', 
            '2.5 oz Aged Rum',
            '0.75 oz Freshly Squeezed Lemon Juice',
            '0.5 oz Simple Syrup',
            'Shake with ice',
            'Double strain into a chilled coupe'
            );
recipes.add('martini.jpg', 'Tarmini Potion', 
            '2.5 oz Tanqueray No. 10',
            '0.5 oz Noilly Prat Extra Dry Vermouth',
            "2 dashes of Regan's Orange bitters",
            'Lemon peel garnish'
            );      
recipes.add('gin.jpg', 'Gyn and Tonyc Potion', 
            '2 oz Gyn',
            '1 Lime Juice',
            "1 Half Lime as Garnish",
            '5 to 6 oz Tonyc Water'
            );   
recipes.add('kamikaze.jpg', 'Kazekami Potion', 
            '1.5 oz Vodka',
            '1 oz Triple Sec',
            "1 oz Freshly Squeezed Lime Juice",
            'Lime wedge, for Garnish'
            );   