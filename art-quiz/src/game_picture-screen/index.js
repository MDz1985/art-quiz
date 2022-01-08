import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import gamePictureHtml from './index.html';

const gamePictureDiv = htmlFromString(gamePictureHtml);


const backPicture = gamePictureDiv.querySelector('.back-picture');

backPicture.addEventListener('click', () => {
  gamePictureDiv.style.transform = 'translateX(-100vw)';
});


export default gamePictureDiv;
