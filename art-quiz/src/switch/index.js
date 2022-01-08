import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import switcherDiv from './index.html';

const switcher = (className, id, func) => {
  const element = htmlFromString(switcherDiv);
  element.classList.add(className);
  element.addEventListener('click', func);
  return element;
};

export default switcher();
