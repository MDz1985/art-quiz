import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import resultScreenHtml from './index.html';
const resultScreenDiv = htmlFromString(resultScreenHtml);

const backButton = resultScreenDiv.querySelector('.back-categories');
const rightAnswers = resultScreenDiv.querySelector('.right-answers');
const wrongAnswers = resultScreenDiv.querySelector('.wrong-answers');

import categoriesDiv from '../categories';

backButton.addEventListener('click', () => {
  resultScreenDiv.style.transform = 'translateX(-100vw)';

  resultScreenDiv.replaceWith(categoriesDiv);
});

let rightCount = localStorage.getItem('answers');
let wrongCount = 10 - rightCount;

rightAnswers.innerText = `${rightCount} - right answers`;
wrongAnswers.innerText = `${wrongCount} - wrong answers`;

//
// const categoriesArray = [
//   'Realism',
//   'Impressionism',
//   'Expressionism',
//   'Renaissance',
//   'Avant-garde',
//   'Surrealism',
//   'Romanticism',
//   'Portrait',
//   'Painting',
//   'Landscape',
//   'Religion',
//   'Marine',
// ];
//
// import gameDiv from '../game-screen';
// import card from '../categoriesCard';
// import { startTimer } from '../timer';
// import { timeoutId } from '../timer';
//
// import randomSort from '../randomizer';
// import playSound from '../playSound';
//
// import Images from '../imagesGenerator';
//
// // import imgClass from '../imagesGenerator';
// import setBg from '../imageLoader';
//
// let imageInfo; // className
//
// console.log(gameDiv);
//
// const gamePictures = gameDiv.querySelector('.game-pictures');
// const questionParagraph = gameDiv.querySelector('.question');
// const questionNumber = gameDiv.querySelector('.number-of-question');
// const answerResult = gameDiv.querySelector('.result');
//
// // import changeGameImages from '../game-screen/changeGameImages';
//
// import loadFirstImages from '../game-screen/loadFirstImages/loadFirstImages';
// import imageElement from '../game-screen-images';
//
// let number = 0;
// import { questionNumbersArray } from '../game-screen';
//
// let isRightSound;
// //
// // function listenerOnCards(element, rightElement){
// //   isRightSound = element === rightElement;
// //   if (isRightSound === false){
// //     answerResult.classList.add('wrong-result');
// //     answerResult.lastElementChild.innerText = 'This is wrong answer';
// //     questionNumbersArray[number].style.color = 'red';
// //     // questionNumber.firstElementChild.style.color = 'red';
// //     clearTimeout(timeoutId);
// //   }else {
// //     answerResult.classList.remove('wrong-result');
// //     answerResult.lastElementChild.innerText = 'This is right answer';
// //     questionNumbersArray[number].style.color = 'green';
// //     // questionNumber.firstElementChild.style.color = 'green';
// //     clearTimeout(timeoutId);
// //   }
// //   answerResult.style.transform = 'translateY(50vh)';
// //   playSound(isRightSound);
// // }
//
// import { arrayOfAnswers } from '../game-screen';
//
// function eventListenerFalse() {
//   answerResult.classList.add('wrong-result');
//   answerResult.lastElementChild.innerText = 'This is wrong answer';
//   // questionNumbersArray[number].style.color = 'red';
//   arrayOfAnswers.push(false);
//   // questionNumber.firstElementChild.style.color = 'red';
//   clearTimeout(timeoutId);
//   answerResult.style.transform = 'translateY(50vh)';
//   playSound(false);
// }
// function eventListenerTrue() {
//   answerResult.classList.remove('wrong-result');
//   answerResult.lastElementChild.innerText = 'This is right answer';
//   // questionNumbersArray[number].style.color = 'green';
//   arrayOfAnswers.push(true);
//   // questionNumber.firstElementChild.style.color = 'green';
//   clearTimeout(timeoutId);
//   answerResult.style.transform = 'translateY(50vh)';
//   playSound(true);
// }
//
// let timeoutForBackground;
//
// for (let i = 0; i < 12; i++) {
//   categoriesCards.append(
//     card(`${i}`, categoriesArray[i], () => {
//       localStorage.setItem(
//         'current_category',
//         categoriesArray[Number(event.target.id)].toLowerCase()
//       );
//       resultScreenDiv.replaceWith(gameDiv);
//       const img = new Images('category', localStorage.getItem('current_category'));
//
//       // TRY
//       img.getImgInfo().then(() => {
//         questionNumber.firstElementChild.style.color = '#4bd4ff';
//
//         let arrayOfImagesNumbers = loadFirstImages(
//           'category',
//           localStorage.getItem('current_category')
//         );
//         // console.log(arrayOfImagesNumbers[0], localStorage.getItem('current_category'));
//
//         clearTimeout(timeoutForBackground);
//
//         timeoutForBackground = setTimeout(() => {
//           questionParagraph.innerText = `What picture was written by ${img.rightArray[0].author}`;
//
//           gamePictures.innerHTML = '';
//
//           for (let i = 0; i < 4; i++) {
//             isRightSound = arrayOfImagesNumbers[i] === arrayOfImagesNumbers[4];
//             if (isRightSound === false) {
//               addListener(eventListenerFalse);
//             } else {
//               addListener(eventListenerTrue);
//             }
//             function addListener(listener) {
//               gamePictures.append(
//                 imageElement(
//                   `image${i + 1}`,
//                   arrayOfImagesNumbers[i],
//                   listener
//                   // () => {
//                   // isRightSound = arrayOfImagesNumbers[i] === arrayOfImagesNumbers[4];
//                   // if (isRightSound === false){
//                   //   answerResult.classList.add('wrong-result');
//                   //   answerResult.lastElementChild.innerText = 'This is wrong answer';
//                   //   questionNumbersArray[number].style.color = 'red';
//                   //   // questionNumber.firstElementChild.style.color = 'red';
//                   //   clearTimeout(timeoutId);
//                   // }else {
//                   //   answerResult.classList.remove('wrong-result');
//                   //   answerResult.lastElementChild.innerText = 'This is right answer';
//                   //   questionNumbersArray[number].style.color = 'green';
//                   //   // questionNumber.firstElementChild.style.color = 'green';
//                   //   clearTimeout(timeoutId);
//                   // }
//                   // answerResult.style.transform = 'translateY(50vh)';
//                   // playSound(isRightSound);
//                   // }
//                 )
//               );
//             }
//           }
//         }, 100);
//       });
//
//       const timer = gameDiv.querySelector('.timer');
//       clearTimeout(timeoutId);
//       startTimer(timer, timeoutId);
//
//       localStorage.setItem('isTimer', 'true');
//       gameDiv.style.transform = 'translateX(0)';
//     })
//   );
// }
//
// // mainScreenDiv.append(firstButton('first-button','Художники',() => console.log('1')));
// // mainScreenDiv.append(secondButton('second-button','Картины',() => console.log('2')));
// // mainScreenDiv.append(settingsButton('third-button','Настройки',() => {
// //     const nav = document.querySelector('.nav');
// //     nav.style.display = 'block';
// //     nav.style.opacity = '1';
// //     nav.style.zIndex = '1';
//
// // }));
// export { timeoutId, eventListenerTrue, eventListenerFalse, isRightSound, number };
export default resultScreenDiv;
