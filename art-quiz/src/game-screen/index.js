import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import gameHtml from './index.html';
import imageElement from '../game-screen-images';
const gameDiv = htmlFromString(gameHtml);
const gamePictures = gameDiv.querySelector('.game-pictures');

const backButton = gameDiv.querySelector('.back-game');
const questionParagraph = gameDiv.querySelector('.question');

// const categoriesTeg = gameDiv.querySelector('.categories');
const timer = gameDiv.querySelector('.timer');

const arrayOfAnswers = [];

import categoriesDiv, { eventListenerTrue, eventListenerFalse } from '../categories';
import answerDiv from '../answer-result';
import setBg from '../imageLoader';
import resultScreenDiv from '../result-screen';

// remove listeners from categories;
function removeListeners(listener) {
  gamePictures.firstElementChild.removeEventListener('click', listener);
  let element = gamePictures.firstElementChild.nextElementSibling;
  for (let i = 1; i < 4; i++) {
    element.removeEventListener('click', listener);
    // element.removeEventListener('click', eventListenerFalse);
    element = element.nextElementSibling;
  }
}

// BACK

backButton.addEventListener('click', () => {
  gameDiv.style.transform = 'translateX(-100vw)';
  answerResult.style.transform = 'translateY(100vh)';
  number = 0;
  // isTimerOff();
  setTimeout(() => {
    gameDiv.addEventListener('click', listener);
  }, 500);
  // imageInfo = 0;

  gameDiv.replaceWith(categoriesDiv);
  imageInfo = 0;
  for (let i = 0; i < questionNumbersArray.length; i++) {
    questionNumbersArray[i].style.color = 'white';
  }

  clearTimeout(timeManager);
});

// TIMER
let timeManager;
function isTimerOff() {
  if (timer.innerText === '1') {
    timer.innerText = '';
    clearTimeout(timeoutId);
    clearTimeout(timeManager);
    answerResult.classList.add('wrong-result');
    answerResult.lastElementChild.innerText = 'There is no answer';
    // questionNumber.firstElementChild.style.color = 'red';
    answerResult.style.transform = 'translateY(50vh)';
    removeListeners(eventListenerFalse);
    removeListeners(eventListenerTrue);
    arrayOfAnswers.push(false);
    // setTimeout(() => {
    //   timer.innerText = '';
    //   clearTimeout(timeoutId);
    //   clearTimeout(timeManager);
    //   answerResult.classList.add('wrong-result');
    //   answerResult.lastElementChild.innerText = 'There is no answer';
    //   // questionNumber.firstElementChild.style.color = 'red';
    //   answerResult.style.transform = 'translateY(50vh)';
    //   removeListeners(eventListenerFalse);
    //   removeListeners(eventListenerTrue);
    //   console.log('hgkuygu')
    //   arrayOfAnswers.push(false);
    // }, 400);

    return;
  }
  timeManager = setTimeout(() => isTimerOff(), 500);
}
import { startTimer, timeoutId } from '../timer';
// import {eventListenerFalse, eventListenerTrue} from '../categories';

isTimerOff();

// ANSWER
const answerResult = gameDiv.querySelector('.result');
const resultText = gameDiv.querySelector('.result-text');
resultText.innerText = 'This is right answer';
const backResult = answerDiv.querySelector('.back-result');
console.log(answerResult, backResult);

answerResult.addEventListener('click', () => {
  // console.log(arrayOfAnswers, '2344');
  if (arrayOfAnswers[number] === true) {
    questionNumbersArray[number].style.color = 'green';
  } else questionNumbersArray[number].style.color = 'red';

  if (imageInfo === 0) {
    imageInfo = new imgClass('category', localStorage.getItem('current_category'));
    imageInfo.getImgInfo().then(() => gameDiv.removeEventListener('click', listener));
  }

  answerResult.style.transform = 'translateY(100vh)';

  imageInfo.rightArray.shift();
  // imageInfo.randomArray.shift();
  createAnswersArray();
  changeBackground();
  startTimer(timer);
  if (number === 9) {
    localStorage.setItem('answers', arrayOfAnswers.filter((element) => element === true).length);

    end();
  }
  number++;
  questionNumbersArray[number].style.color = 'blue';
  questionParagraph.innerText = `What picture was written by ${imageInfo.rightArray[0].author}?`;
  // console.log(number)

  isTimerOff();

  // console.log(resultArray, 'huigoi.jpijip;');
});

// questionNumber
const questionNumber = gameDiv.querySelector('.number-of-question');
const questionNumbersArray = [];
let question = questionNumber.firstElementChild;
for (let i = 0; i < questionNumber.childElementCount; i++) {
  questionNumbersArray.push(question);
  question = question.nextElementSibling;
}

export { questionNumbersArray };

// pictures
let pictureNumbers = [];
import randomSort from '../randomizer';
import playSound from '../playSound';
import imgClass from '../imagesGenerator';
let imageInfo = 0;
let currentAuthor;
let randomArray;
let number = 0;
let rightAnswer;
let wrongArray;
let resultArray = [];
let listener = function () {
  console.log(localStorage.getItem('current_category'));
  removeListeners(eventListenerTrue);
  removeListeners(eventListenerFalse);
  imageInfo = new imgClass('category', localStorage.getItem('current_category'));
  imageInfo.getImgInfo().then(() => gameDiv.removeEventListener('click', listener));
};

gameDiv.addEventListener('click', listener);

function createAnswersArray() {
  wrongArray = imageInfo.wrongArray();
  resultArray.length = 0;
  resultArray.push(imageInfo.rightArray[0].imageNum);
  // resultArray.push(imageInfo.randomArray[0]);
  for (let i = 0; i < 3; i++) {
    resultArray.push(wrongArray[i]);
  }
  randomSort(resultArray);
  resultArray.push(imageInfo.rightArray[0].imageNum);
  // resultArray.push(imageInfo.randomArray[0]);

  // imageInfo.rightArray.shift();
  // imageInfo.randomArray.shift();
}

// //
// function changeImagesNumbers() {
//   pictureNumbers.length = 0;
//   pictureNumbers.push(imageInfo.rightArray[0].imageNum);
//   rightAnswer = imageInfo.rightArray[0].imageNum;
//   currentAuthor = imageInfo.rightArray[0]['author'];
//   randomArray = imageInfo.rightArray.filter(x => x['author'] !== currentAuthor);
//   randomSort(randomArray);
//
//
//   for (let i = 0; i < 3; i++) {
//     pictureNumbers.push(randomArray[i].imageNum);
//   }
//
//   randomSort(randomArray);
//   randomSort(pictureNumbers);
//   imageInfo.rightArray.shift();
// }
//
// import setBg from '../imageLoader';

function changeBackground() {
  removeListeners(eventListenerTrue);
  removeListeners(eventListenerFalse);
  setBg(gamePictures.firstElementChild, resultArray[0]);
  if (resultArray[0] === resultArray[4]) {
    gamePictures.firstElementChild.addEventListener('click', eventListenerTrue);
  } else {
    gamePictures.firstElementChild.addEventListener('click', eventListenerFalse);
  }

  console.log(resultArray[0]);
  let element = gamePictures.firstElementChild.nextElementSibling;
  for (let i = 1; i < 4; i++) {
    setBg(element, resultArray[i]);
    if (resultArray[i] === resultArray[4]) {
      element.addEventListener('click', eventListenerTrue);
    } else {
      element.addEventListener('click', eventListenerFalse);
    }
    element = element.nextElementSibling;
  }
}

// console.log(imagesDivArray);

// function changeBackground(){
//   for (let i = 0; i < 4; i++) {
//     console.log(imagesDivArray);
//   }
// }
// function changeBackground(){
//   setBg(gamePictures.firstElementChild, pictureNumbers[0]);
//   console.log(imageInfo.rightArray[0].imageNum);
//   let element = gamePictures.firstElementChild.nextElementSibling;
//   for (let i = 1; i < 4; i++) {
//     setBg(element, pictureNumbers[i]);
//     element = element.nextElementSibling;
//   }
// }
//
// //TEST !!!!!!!!
// function da (){
//   questionParagraph.innerText = `What picture was written by ${imageInfo.rightArray[0].author}?`
//   changeImagesNumbers();
//   changeBackground();
//   number++;
//   questionNumbersArray[number].style.color = 'red';
//   questionNumbersArray[number-1].style.color = 'white';
//
//   setTimeout(da,10000);
// }

// pictures
// let pictureNumbers = [];
// import randomSort from '../randomizer';
// import playSound from '../playSound';
//
// import imgClass from '../imagesGenerator';
// import setBg from '../imageLoader';
//
// // console.log(localStorage.getItem("current_category"));
// import changeGameImages from './changeGameImages';
//
// let imageInfo; //className
//
// // const questionNumber = gameDiv.querySelector('.number-of-question');
//
// // changeGameImages (imageInfo, gamePictures, questionParagraph, questionNumber);

// clearTimeout(timeoutId);
// startTimer(timer);
// startTimer(timer);
// startTimer(timer);

// END
function end() {
  gameDiv.style.transform = 'translateX(-100vw)';
  number = 0;
  setTimeout(() => {
    gameDiv.addEventListener('click', listener);
  }, 500);
  gameDiv.replaceWith(resultScreenDiv);

  imageInfo = 0;
  for (let i = 0; i < questionNumbersArray.length; i++) {
    questionNumbersArray[i].style.color = 'white';
  }

  clearTimeout(timeManager);
}

export { arrayOfAnswers, isTimerOff };
export default gameDiv;
