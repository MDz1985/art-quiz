import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import menu from './index.html';
const menuDiv = htmlFromString(menu);

const timeLimit = menuDiv.querySelector('.time-limit');
localStorage.setItem('timeLimit', timeLimit.value);
menuDiv.addEventListener('click',() => localStorage.setItem('timeLimit', timeLimit.value));

const timeLimitSelector = menuDiv.querySelector('.time-limit-selector');
timeLimitSelector.addEventListener('change', () => {
  localStorage.setItem('timerOn', timeLimitSelector.checked)
});

const soundSelector = menuDiv.querySelector('.sound-selector');
soundSelector.addEventListener('change', () => {
  localStorage.setItem('soundOn', soundSelector.checked)
});



// import slider from "../volume-slider";
// const menuD = menuDiv.querySelector('menu');
// menuD.firstChild.after(slider('dkj',()=>(console.log(7))));

export default menuDiv;
