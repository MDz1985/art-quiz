import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import answerHtml from './index.html';
const answerDiv = htmlFromString(answerHtml);

const backButton = answerDiv.querySelector('.back-result');

backButton.addEventListener('click', () => {
  answerDiv.style.transform = 'translateY(100vh)';

  // answerDiv.replaceWith(mainScreenDiv);
});
//
// const answerArray = ['Realism', 'Impressionism', 'Expressionism', 'Renaissance', 'Avant-garde',
//   'Surrealism', 'Romanticism', 'Portrait', 'Painting', 'Landscape', 'Religion', 'Marine'];
//
//
//
// import card from '../answerCard';
// import { startTimer } from '../timer';
// import { timeoutId } from '../timer';
//
//
//
// import randomSort from '../randomizer';
// import playSound from '../playSound';
//
//
//
// import Images from '../imagesGenerator';
//
//
//
//
// // import imgClass from '../imagesGenerator';
// import setBg from '../imageLoader';
//
// let imageInfo; //className
//
// console.log(gameDiv)
//
// const gamePictures = gameDiv.querySelector('.game-pictures');
// const questionParagraph = gameDiv.querySelector('.question');
// const questionNumber = gameDiv.querySelector('.number-of-question');
// // import changeGameImages from '../game-screen/changeGameImages';
//
//
// import loadFirstImages from '../game-screen/loadFirstImages/loadFirstImages';
// import imageElement from '../game-screen-images';
//
// let timeoutForBackground;
//
// for (let i = 0; i < 12; i++) {
//   answerCards.append(
//     card(`${i}`, answerArray[i], () => {
//       localStorage.setItem('current_category', answerArray[Number(event.target.id)].toLowerCase())
//       answerDiv.replaceWith(gameDiv);
//       const img = new Images('category', localStorage.getItem('current_category'));
//
//       //TRY
//       img.getImgInfo().then(() => {
//           questionNumber.firstElementChild.style.color = '#4bd4ff';
//
//           let arrayOfImagesNumbers = loadFirstImages('category', localStorage.getItem('current_category'));
//           // console.log(arrayOfImagesNumbers[0], localStorage.getItem('current_category'));
//           let isRightSound;
//
//           clearTimeout(timeoutForBackground);
//
//           timeoutForBackground = setTimeout(() => {
//
//             questionParagraph.innerText = `What picture was written by ${
//               img.rightArray[0].author}`
//
//             gamePictures.innerHTML = '';
//             for (let i = 0; i < 4; i++) {
//               gamePictures.append(imageElement(`image${i + 1}`, arrayOfImagesNumbers[i], () => {
//                 isRightSound = arrayOfImagesNumbers[i] === arrayOfImagesNumbers[4];
//                 playSound(isRightSound);
//               }));
//             }
//           }, 100 )
//       }
//
//       )
//
//
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

export default answerDiv;
