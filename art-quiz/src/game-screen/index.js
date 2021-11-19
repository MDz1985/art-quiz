import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import gameHtml from './index.html';
import imageElement from '../game-screen-images';
const gameDiv = htmlFromString(gameHtml);
const gamePictures = gameDiv.querySelector('.game-pictures');

const backButton = gameDiv.querySelector('.back-game');
const categoriesTeg = gameDiv.querySelector('.categories');
backButton.addEventListener('click', () => {
  gameDiv.style.transform = 'translateX(-100vw)';
});

//timer
import secondsSpan from '../switch';
gamePictures.after(secondsSpan);



//pictures
let pictureNumbers = [];
import randomSort from '../randomizer';

import imgClass from '../imagesGenerator';
let imageInfo = new imgClass('category',localStorage.getItem("current_category"));
let currentAuthor;
let randomArray;
imageInfo.getImgInfo()
  .then(() => {
    console.log(imageInfo.rightArray)

    changeImagesNumbers();

    for (let i = 0; i < 4; i++) {
      gamePictures.append(imageElement(`image${i + 1}`, pictureNumbers[i], () => {
        console.log(`${j}-card`)
      }));
    }
    imageInfo.rightArray.shift();
    da()
  }

)

function changeImagesNumbers() {
  pictureNumbers.length = 0;
  pictureNumbers.push(imageInfo.rightArray[0].imageNum);
  currentAuthor = imageInfo.rightArray[0]['author'];
  randomArray = imageInfo.rightArray.filter(x => x['author'] !== currentAuthor);
  randomSort(randomArray);


  for (let i = 0; i < 3; i++) {
    pictureNumbers.push(randomArray[i].imageNum);
  }

  randomSort(randomArray);
  randomSort(pictureNumbers);
  imageInfo.rightArray.shift();
}

import setBg from '../imageLoader';

function changeBackground(){
  setBg(gamePictures.firstElementChild, pictureNumbers[0]);
  console.log(imageInfo.rightArray[0].imageNum);
  let element = gamePictures.firstElementChild.nextElementSibling;
  for (let i = 1; i < 4; i++) {
    setBg(element, pictureNumbers[i]);
    element = element.nextElementSibling;
  }
}

//TEST !!!!!!!!
function da (){
  changeImagesNumbers();
  changeBackground();
  setTimeout(da,10000);
}


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
