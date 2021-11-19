import './index.scss';

import mainScreenDiv from './mainScreen';

const main = document.querySelector('.main');
main.append(mainScreenDiv);

// import menuDiv from "./menu";
// main.append(menuDiv);

import categoriesDiv from './categories';
main.append(categoriesDiv);

import categoriesPictureDiv from './categories-picture';
main.append(categoriesPictureDiv);

import gameDiv from './game-screen';
main.append(gameDiv);

import gamePictureDiv from './game_picture-screen';
main.append(gamePictureDiv);

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



//
//
// import getImgInfo from './imagesGenerator';
//
// let i = new getImgInfo('category','realism');
// i.getImgInfo()
//   .then(()=>console.log(i.rightArray[0].imageNum))





