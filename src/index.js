import {displayIntro} from './introModule.js';
import {displayRecipes} from './recipesModule.js';
import './style.css'; 

(() => {    //init display
    const fragment = new DocumentFragment();

    const tint = document.createElement('div');
    tint.id = 'bg-tint';
    document.body.appendChild(tint);

    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.textContent = "Beatrice's Potioncraft For Dummies";
    header.appendChild(title);

    const navbar = document.createElement('nav');
    const navCtn = document.createElement('ol');

    const navIntro = document.createElement('li');
    navIntro.textContent = 'Introduction';
    navIntro.addEventListener('click', displayIntro);
    navCtn.appendChild(navIntro);

    const navRecipes = document.createElement('li');
    navRecipes.textContent = 'Recipes';
    navRecipes.addEventListener('click', displayRecipes);
    navCtn.appendChild(navRecipes);

    navbar.appendChild(navCtn);
    header.appendChild(navbar);

    fragment.appendChild(header);
    content.appendChild(fragment);
})();

displayIntro();