import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import categoriesPictureHtml from './index.html';
const categoriesPictureDiv = htmlFromString(categoriesPictureHtml);
const categoriesCards = categoriesPictureDiv.querySelector('.categories-picture-cards');

const backButton = categoriesPictureDiv.querySelector('.back-categories-picture');
const categoriesTeg = categoriesPictureDiv.querySelector('.categories');
backButton.addEventListener('click', () => {
  categoriesPictureDiv.style.transform = 'translateX(-100vw)';
});

import card from '../categoriesCard';
for (let i = 0; i < 10; i++) {
  categoriesCards.append(
    card('cardPict', i + 1, () => {
      const gameDiv = document.querySelector('.game');
      gameDiv.style.transform = 'translateX(0)';
    })
  );
}

// mainScreenDiv.append(firstButton('first-button','Художники',() => console.log('1')));
// mainScreenDiv.append(secondButton('second-button','Картины',() => console.log('2')));
// mainScreenDiv.append(settingsButton('third-button','Настройки',() => {
//     const nav = document.querySelector('.nav');
//     nav.style.display = 'block';
//     nav.style.opacity = '1';
//     nav.style.zIndex = '1';

// }));

export default categoriesPictureDiv;
