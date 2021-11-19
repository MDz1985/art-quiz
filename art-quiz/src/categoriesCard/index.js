import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import cardHtml from './index.html';

const card = (elementID, innerText, func) => {
  const element = htmlFromString(cardHtml);
  element.id = elementID;
  element.innerText = innerText;
  // element.classList.add(className);
  element.addEventListener('click', func);
  return element;
};



export default card;
