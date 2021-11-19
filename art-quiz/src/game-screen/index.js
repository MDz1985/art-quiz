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
import secondsSpan from '../timer';
gamePictures.after(secondsSpan);



//pictures
let pictureNumbers = [];
import randomSort from '../randomizer';
import playSound from '../playSound';

import imgClass from '../imagesGenerator';
let imageInfo = new imgClass('category',localStorage.getItem("current_category"));
let currentAuthor;
let randomArray;
let number = 0;
let rightAnswer;
imageInfo.getImgInfo()
  .then(() => {
    // console.log(imageInfo.rightArray, '444');
    // rightAnswer = imageInfo.rightArray[0];
    // console.log(imageInfo.rightArray, '444');
    // console.log(rightAnswer);
    changeImagesNumbers();
    let isRightSound;
    for (let i = 0; i < 4; i++) {
      gamePictures.append(imageElement(`image${i + 1}`, pictureNumbers[i], () => {
        isRightSound = pictureNumbers[i] === rightAnswer;
        playSound(isRightSound);
      }));
    }
    imageInfo.rightArray.shift();

    //TEST !!!
    da();



  }

)

function changeImagesNumbers() {
  pictureNumbers.length = 0;
  pictureNumbers.push(imageInfo.rightArray[0].imageNum);
  rightAnswer = imageInfo.rightArray[0].imageNum;
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
  number++;
  questionNumbersArray[number].style.color = 'red';
  questionNumbersArray[number-1].style.color = 'white';
  setTimeout(da,5000);
}


//questionNumber
const questionNumber = gameDiv.querySelector('.number-of-question');
const questionNumbersArray = [];
let question = questionNumber.firstElementChild;
for (let i = 0; i < questionNumber.childElementCount; i++){
  questionNumbersArray.push(question);
  question = question.nextElementSibling;
}


//TEST !!!!
questionNumbersArray[0].style.color = 'red';

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
