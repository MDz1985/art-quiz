import htmlFromString from '../utils/htmlFromString';
import './index.scss';
import card from '../categoriesCard';

import categoriesPictureHtml from './index.html';

const categoriesPictureDiv = htmlFromString(categoriesPictureHtml);
const categoriesCards = categoriesPictureDiv.querySelector('.categories-picture-cards');

const backButton = categoriesPictureDiv.querySelector('.back-categories-picture');
const categoriesTeg = categoriesPictureDiv.querySelector('.categories');
backButton.addEventListener('click', () => {
  categoriesPictureDiv.style.transform = 'translateX(-100vw)';
});

const cardsArray = Array(10).fill('')
    .map((value, index) =>
        card('cardPict', index + 1, () => {
          const gameDiv = document.querySelector('.game');
          gameDiv.style.transform = 'translateX(0)';
        })
    )
    .forEach(value => {
      categoriesCards.append(value)
    });


export default categoriesPictureDiv;
