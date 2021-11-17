import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import imageHtml from './index.html';

import setBg from '../imageLoader';
const imageElement = (className, background, func) => {
  const element = htmlFromString(imageHtml);
  setBg(element, background);
  // element.style.background = `url("https://raw.githubusercontent.com/MDz1985/assets/assets-art-quiz/assets-art-quiz/img/${background}.jpg")`;
  // element.style.backgroundSize = 'cover';
  // element.style.backgroundPositionX = 'center';

  element.classList.add(className);
  element.addEventListener('click', func);
  return element;
};

export default imageElement;
