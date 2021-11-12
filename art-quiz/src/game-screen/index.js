import htmlFromString from "../utils/htmlFromString";
import './index.scss';

import gameHtml from './index.html';
const gameDiv = htmlFromString(gameHtml);
// const categoriesCards = categoriesDiv.querySelector('.categories-cards');

const backButton = gameDiv.querySelector('.back-game');
const categoriesTeg = gameDiv.querySelector('.categories');
backButton.addEventListener('click',() => {
    gameDiv.style.transform = 'translateX(-100vw)'
})



//
// import card from '../categoriesCard';
// for (let i = 0; i < 10; i++){
//     categoriesCards.append(card(`card${i + 1}`,i+1, () => {console.log(`${j}-card`)}));
// }
//

// mainScreenDiv.append(firstButton('first-button','Художники',() => console.log('1')));
// mainScreenDiv.append(secondButton('second-button','Картины',() => console.log('2')));
// mainScreenDiv.append(settingsButton('third-button','Настройки',() => {
//     const nav = document.querySelector('.nav');
//     nav.style.display = 'block';
//     nav.style.opacity = '1';
//     nav.style.zIndex = '1';

// }));




export default gameDiv;


