import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import categoriesHtml from './index.html';
const categoriesDiv = htmlFromString(categoriesHtml);
const categoriesCards = categoriesDiv.querySelector('.categories-cards');

const backButton = categoriesDiv.querySelector('.back-categories');
const categoriesTeg = categoriesDiv.querySelector('.categories');
backButton.addEventListener('click', () => {
  categoriesDiv.style.transform = 'translateX(-100vw)';
});

const categoriesArray = ['Realism', 'Impressionism', 'Expressionism', 'Renaissance', 'Avant-garde',
  'Surrealism', 'Romanticism', 'Portrait', 'Painting', 'Landscape', 'Religion', 'Marine'];
console.log(categoriesArray);

import card from '../categoriesCard';
for (let i = 0; i < 12; i++) {
  categoriesCards.append(
    card(`${i}`, categoriesArray[i], () => {
      localStorage.setItem('current_category', categoriesArray[Number(event.target.id)].toLowerCase())
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

export default categoriesDiv;
