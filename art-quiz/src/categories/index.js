import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import categoriesHtml from './index.html';

const categoriesDiv = htmlFromString(categoriesHtml);
const categoriesCards = categoriesDiv.querySelector('.categories-cards');

const backButton = categoriesDiv.querySelector('.back-categories');


import mainScreenDiv from '../mainScreen';

backButton.addEventListener('click', () => {
  categoriesDiv.style.transform = 'translateX(-100vw)';
  categoriesDiv.replaceWith(mainScreenDiv);
});

const categoriesArray = [
  'Realism',
  'Impressionism',
  'Expressionism',
  'Renaissance',
  'Avant-garde',
  'Surrealism',
  'Romanticism',
  'Portrait',
  'Painting',
  'Landscape',
  'Religion',
  'Marine'
];

import gameDiv from '../game-screen';
import card from '../categoriesCard';
import {startTimer} from '../timer';
import {timeoutId} from '../timer';

import randomSort from '../randomizer';
import playSound from '../playSound';

import Images from '../imagesGenerator';




const gamePictures = gameDiv.querySelector('.game-pictures');
const questionParagraph = gameDiv.querySelector('.question');
const questionNumber = gameDiv.querySelector('.number-of-question');
const answerResult = gameDiv.querySelector('.result');


import loadFirstImages from '../game-screen/loadFirstImages/loadFirstImages';
import imageElement from '../game-screen-images';

let number = 0;
import {questionNumbersArray, isTimerOff} from '../game-screen';

let isRightSound;

import {arrayOfAnswers} from '../game-screen';

function eventListenerFalse() {
  answerResult.classList.add('wrong-result');
  answerResult.lastElementChild.innerText = 'This is wrong answer';
  arrayOfAnswers.push(false);

  clearTimeout(timeoutId);
  isTimerOff();
  answerResult.style.transform = 'translateY(50vh)';
  playSound(false);
}

function eventListenerTrue() {
  answerResult.classList.remove('wrong-result');
  answerResult.lastElementChild.innerText = 'This is right answer';
  arrayOfAnswers.push(true);
  clearTimeout(timeoutId);
  isTimerOff();
  answerResult.style.transform = 'translateY(50vh)';
  playSound(true);
}

let timeoutForBackground;

for (let i = 0; i < 12; i++) {
  categoriesCards.append(
      card(`${i}`, categoriesArray[i], () => {
        localStorage.setItem(
            'current_category',
            categoriesArray[Number(event.target.id)].toLowerCase()
        );
        categoriesDiv.replaceWith(gameDiv);
        const img = new Images('category', localStorage.getItem('current_category'));


        img.getImgInfo().then(() => {
          questionNumber.firstElementChild.style.color = '#4bd4ff';

          let arrayOfImagesNumbers = loadFirstImages(
              'category',
              localStorage.getItem('current_category')
          );


          clearTimeout(timeoutForBackground);

          timeoutForBackground = setTimeout(() => {
            questionParagraph.innerText = `What picture was written by ${img.rightArray[0].author}`;

            gamePictures.innerHTML = '';


            for (let i = 0; i < arrayOfImagesNumbers.length - 1; i++) {
              isRightSound = arrayOfImagesNumbers[i] === arrayOfImagesNumbers[4];
              if (isRightSound === false) {
                addListener(eventListenerFalse);
              } else {
                addListener(eventListenerTrue);
              }

              function addListener(listener) {
                gamePictures.append(
                    imageElement(
                        `image${i + 1}`,
                        arrayOfImagesNumbers[i],
                        listener
                    )
                );
              }
            }
          }, 100);
        });

        const timer = gameDiv.querySelector('.timer');
        clearTimeout(timeoutId);
        startTimer(timer, timeoutId);

        localStorage.setItem('isTimer', 'true');
        gameDiv.style.transform = 'translateX(0)';
      })
  );
}

export {
  timeoutId, eventListenerTrue, eventListenerFalse, isRightSound, number
};
export default categoriesDiv;
