import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import imageHtml from './index.html';

import setBg from '../imageLoader';
const imageElement = (className, background, func) => {
  const element = htmlFromString(imageHtml);
  setBg(element, background);

  element.classList.add(className);
  element.addEventListener('click', func);
  return element;
};

export default imageElement;
