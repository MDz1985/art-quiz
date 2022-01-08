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

export default resultScreenDiv;
