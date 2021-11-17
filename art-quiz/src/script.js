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


import getImgInfo from './async';
import img from './imagesGenerator';
// import { default } from 'webpack-dev-server/client/clients/SockJSClient';
let rightArray;

getImgInfo('category','realism').then(result => {
  img.rightArray = result.rightArray;
  img.wrongArray = result.wrongArray;

});
// console.log(img);
setTimeout(()=>{console.log(img.wrongArray, img.rightArray);},100);
// console.log(getImgInfo('category','realism').promis);


// let r = localStorage.getItem('rightArray');
// console.log(JSON.parse(r)[0].year);