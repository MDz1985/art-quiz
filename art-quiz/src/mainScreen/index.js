import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import mainScreen from './index.html';

const mainScreenDiv = htmlFromString(mainScreen);

import menuDiv from '../menu';

mainScreenDiv.append(menuDiv);

import firstButton from '../button';
import secondButton from '../button';
import settingsButton from '../button';
import categoriesDiv from '../categories';

mainScreenDiv.append(
    firstButton('first-button', 'Authors', () => {
      mainScreenDiv.replaceWith(categoriesDiv);
      const categories = document.querySelector('.categories');

      categories.style.transform = 'translateX(0)';
    })
);
mainScreenDiv.append(
    secondButton('second-button', 'Paintings', () => {
      const categories = document.querySelector('.categories-picture');
      categories.style.transform = 'translateX(0)';
    })
);
mainScreenDiv.append(
    settingsButton('third-button', 'Settings', () => {
      // mainScreenDiv.replaceWith(menuDiv);

      const nav = document.querySelector('.nav');
      nav.style.display = 'block';
      nav.style.opacity = '1';
      nav.style.zIndex = '1';
    })
);

export default mainScreenDiv;
