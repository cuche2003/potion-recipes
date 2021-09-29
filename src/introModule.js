export function displayIntro () {
    const fragment = new DocumentFragment();
    const content = document.getElementById('content');
    
    if (document.querySelector('main')) document.querySelector('main').remove();
    const main = document.createElement('main');

    const avatar = document.createElement('img');
    avatar.src = 'butterfly.gif';
    avatar.id = 'avatar';
    main.appendChild(avatar);

    const introText = document.createElement('div');
    introText.innerHTML = `<h2 id="title">Welcome, all magic believers! Beatrice here!</h2>
    <h4>Potioncraft is an important part of witches.</h4>
    <h4>And brewing the perfect potions may require thousands of years of experience.</h4>
    <h4>As the Endless Witch, it is my responsibility to guide you on the right track.</h4>
    <h4>After years of experiments, I have gathered all my observations into a book.</h4>
    <h4>This book provides possibly the most effective recipes for some basic potions.</h4>
    <h4>These recipes act as a guideline to further expand to more adavanced potions.</h4>
    <h4>Modifications to the recipes are encouraged to explore the possibilities.</h4>
    <h4>Have fun and, Happy Brewing!</h4>`;
    main.appendChild(introText);

    fragment.appendChild(main);
    content.appendChild(fragment);
}

