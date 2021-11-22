if (!localStorage.getItem('soundOn')){
  localStorage.setItem('soundOn', 'true');
}
if (!localStorage.getItem('timerOn')){
  localStorage.setItem('timerOn', 'true');
}
if (!localStorage.getItem('timeLimit')){
  localStorage.setItem('timeLimit', '5');
}
if (!localStorage.getItem('soundVolume')){
  localStorage.setItem('soundVolume', '0.5');
}

import './index.scss';

import mainScreenDiv from './mainScreen';

const main = document.querySelector('.main');
main.append(mainScreenDiv);

// import menuDiv from "./menu";
// main.append(menuDiv);

// import categoriesDiv from './categories';
// main.append(categoriesDiv);

import categoriesPictureDiv from './categories-picture';
main.append(categoriesPictureDiv);

// import gameDiv from './game-screen';
// main.append(gameDiv);

// import gamePictureDiv from './game_picture-screen';
// main.append(gamePictureDiv);

import footerDiv from './footer';
import menuDiv from './menu';
// import categoriesPictureDiv from "./categories-picture";
const footer = document.querySelector('footer');
footer.append(footerDiv);

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  menuDiv.style.opacity = '0';
  menuDiv.style.zIndex = '-1';
});






