import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import gameHtml from './index.html';

const gameDiv = htmlFromString(gameHtml);
const gamePictures = gameDiv.querySelector('.game-pictures');

const backButton = gameDiv.querySelector('.back-game');
const questionParagraph = gameDiv.querySelector('.question');

const timer = gameDiv.querySelector('.timer');

const arrayOfAnswers = [];

import categoriesDiv, {eventListenerTrue, eventListenerFalse} from '../categories';
import answerDiv from '../answer-result';
import setBg from '../imageLoader';
import resultScreenDiv from '../result-screen';

// remove listeners from categories;
function removeListeners(listener) {
  gamePictures.firstElementChild.removeEventListener('click', listener);
  let element = gamePictures.firstElementChild.nextElementSibling;
  for (let i = 1; i < 4; i++) {
    element.removeEventListener('click', listener);
    element = element.nextElementSibling;
  }
}

// BACK

backButton.addEventListener('click', () => {
  answerResult.style.transform = 'translateY(100vh)';
  stopGame(categoriesDiv);
});

// TIMER
let timeManager;
const endOfTimerValue = '1';

function isTimerOff() {
  if (timer.innerText === endOfTimerValue) {
    timer.innerText = '';
    clearTimeout(timeoutId);
    clearTimeout(timeManager);
    answerResult.classList.add('wrong-result');
    answerResult.lastElementChild.innerText = 'There is no answer';
    answerResult.style.transform = 'translateY(50vh)';
    removeListeners(eventListenerFalse);
    removeListeners(eventListenerTrue);
    arrayOfAnswers.push(false);
    return;
  }
  timeManager = setTimeout(() => isTimerOff(), 500);
}

import {startTimer, timeoutId} from '../timer';


isTimerOff();

// ANSWER
const answerResult = gameDiv.querySelector('.result');
const resultText = gameDiv.querySelector('.result-text');
resultText.innerText = 'This is right answer';

answerResult.addEventListener('click', () => {
  if (arrayOfAnswers[numberOfQuestion] === true) {
    questionNumbersArray[numberOfQuestion].style.color = 'green';
  } else questionNumbersArray[numberOfQuestion].style.color = 'red';

  if (imageInfo === 0) {
    imageInfo = new imgClass('category', localStorage.getItem('current_category'));
    imageInfo.getImgInfo().then(() => gameDiv.removeEventListener('click', resetImgData));
  }

  answerResult.style.transform = 'translateY(100vh)';

  imageInfo.rightArray.shift();
  createAnswersArray();
  changeBackground();
  startTimer(timer);
  if (numberOfQuestion === lastQuestionNumber) {
    localStorage.setItem('answers', arrayOfAnswers.filter((element) => element === true).length);

    stopGame(resultScreenDiv);
  }
  numberOfQuestion++;
  questionNumbersArray[numberOfQuestion].style.color = 'blue';
  questionParagraph.innerText = `What picture was written by ${imageInfo.rightArray[0].author}?`;

  isTimerOff();

});

// questionNumber
const questionNumber = gameDiv.querySelector('.number-of-question');
const questionNumbersArray = [];
let question = questionNumber.firstElementChild;
for (let i = 0; i < questionNumber.childElementCount; i++) {
  questionNumbersArray.push(question);
  question = question.nextElementSibling;
}

export {questionNumbersArray};

// pictures
let pictureNumbers = [];
import randomSort from '../randomizer';
import playSound from '../playSound';
import imgClass from '../imagesGenerator';

let imageInfo = 0;
let numberOfQuestion = 0;
let lastQuestionNumber = 9;
let arrayOfWrongAnswers;
let resultArray = [];
let resetImgData = function () {
  removeListeners(eventListenerTrue);
  removeListeners(eventListenerFalse);
  imageInfo = new imgClass('category', localStorage.getItem('current_category'));
  imageInfo.getImgInfo().then(() => gameDiv.removeEventListener('click', resetImgData));
};

gameDiv.addEventListener('click', resetImgData);

function createAnswersArray() {
  arrayOfWrongAnswers = imageInfo.getArrayOfWrongAnswers();
  resultArray.length = 0;
  resultArray.push(imageInfo.rightArray[0].imageNum);
  for (let i = 0; i < 3; i++) {
    resultArray.push(arrayOfWrongAnswers[i]);
  }
  randomSort(resultArray);
  resultArray.push(imageInfo.rightArray[0].imageNum);

}


function changeBackground() {
  const getRightAnswer = () => `/${resultArray[4]}.jpg`;
  setBg(gamePictures.firstElementChild, resultArray[0]);
  let element = gamePictures.firstElementChild.nextElementSibling;
  for (let i = 1; i < resultArray.length - 1; i++) {
    setBg(element, resultArray[i]);
    element = element.nextElementSibling;
  }

  gamePictures.addEventListener('click', eventListenerOnPicture);

  function eventListenerOnPicture(event) {
    const targetBackground = event.target.style.background;
    if (targetBackground.includes(getRightAnswer())) {
      eventListenerTrue();
    } else {
      eventListenerFalse()
    }
    gamePictures.removeEventListener('click', eventListenerOnPicture);
  }
}

// END OF GAME
function stopGame(backToScreenHtmlElement) {
  gameDiv.style.transform = 'translateX(-100vw)';
  numberOfQuestion = 0;
  gameDiv.replaceWith(backToScreenHtmlElement);
  gameDiv.addEventListener('click', resetImgData);

  imageInfo = 0;
  for (let i = 0; i < questionNumbersArray.length; i++) {
    questionNumbersArray[i].style.color = 'white';
  }

  clearTimeout(timeManager);
}

export {arrayOfAnswers, isTimerOff};
export default gameDiv;
