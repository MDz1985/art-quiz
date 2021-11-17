import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import mainScreen from './index.html';
const mainScreenDiv = htmlFromString(mainScreen);

import menuDiv from '../menu';
mainScreenDiv.append(menuDiv);
// const nav = document.querySelector('.nav');

import firstButton from '../button';
import secondButton from '../button';
import settingsButton from '../button';

mainScreenDiv.append(
  firstButton('first-button', 'Художники', () => {
    const categories = document.querySelector('.categories');
    categories.style.transform = 'translateX(0)';
  })
);
mainScreenDiv.
append(secondButton('second-button', 'Картины', () => {
  const categories = document.querySelector('.categories-picture');
  categories.style.transform = 'translateX(0)';
}));
mainScreenDiv.append(
  settingsButton('third-button', 'Настройки', () => {
    const nav = document.querySelector('.nav');
    nav.style.display = 'block';
    nav.style.opacity = '1';
    nav.style.zIndex = '1';
  })
);

export default mainScreenDiv;
