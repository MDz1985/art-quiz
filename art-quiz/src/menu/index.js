import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import menu from './index.html';

const menuDiv = htmlFromString(menu);

const timeLimit = menuDiv.querySelector('.time-limit');
if (!localStorage.getItem('timeLimit')) {
  timeLimit.value = '30';
  localStorage.setItem('timeLimit', timeLimit.value);
}
timeLimit.value = localStorage.getItem('timeLimit');

menuDiv.addEventListener('click', () => localStorage.setItem('timeLimit', timeLimit.value));

const timeLimitSelector = menuDiv.querySelector('.time-limit-selector');
if (localStorage.getItem('timerOn') === 'false') {
  timeLimitSelector.checked = false;
}
timeLimitSelector.addEventListener('change', () => {
  localStorage.setItem('timerOn', timeLimitSelector.checked);
});

const soundSelector = menuDiv.querySelector('.sound-selector');
if (localStorage.getItem('soundOn') === 'false') {
  soundSelector.checked = false;
}
soundSelector.addEventListener('change', () => {
  localStorage.setItem('soundOn', soundSelector.checked);
});

const volumeBar = menuDiv.querySelector('.volume-slider-filled');
const volume = menuDiv.querySelector('.volume-slider');

function moveVolume(e) {
  let soundVolume;
  const sliderPosition = Math.floor((100 * e.offsetX) / volume.offsetWidth) / 100;
  volumeBar.style.flexBasis = String(Math.floor((10000 * e.offsetX) / volume.offsetWidth) / 100) + '%';
  if (sliderPosition < 0) {
    soundVolume = 0;
  } else if (sliderPosition > 1) {
    soundVolume = 1;
  } else {
    soundVolume = sliderPosition;
  }
  localStorage.setItem('soundVolume', String(soundVolume));
}

volume.addEventListener('mousedown', function (e) {
  moveVolume(e);
  this.addEventListener('mousemove', moveVolume);
});

volume.addEventListener('mouseup', function (e) {
  this.removeEventListener('mousemove', moveVolume);
});

export default menuDiv;
