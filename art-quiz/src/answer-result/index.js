import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import answerHtml from './index.html';

const answerDiv = htmlFromString(answerHtml);

const backButton = answerDiv.querySelector('.back-result');

backButton.addEventListener('click', () => {
  answerDiv.style.transform = 'translateY(100vh)';
});
export default answerDiv;
