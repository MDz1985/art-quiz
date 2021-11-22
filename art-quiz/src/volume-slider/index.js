import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import sliderHtml from './index.html';

const slider = (className, func) => {
  const element = htmlFromString(sliderHtml);
  element.classList.add(className);
  element.addEventListener('click', func);
  return element;
};

function moveVolume(e) {
  volumeBar.style.flexBasis =
    String(Math.floor((10000 * e.offsetX) / volume.offsetWidth) / 100) + '%';
  if (Math.floor((100 * e.offsetX) / volume.offsetWidth) / 100 < 0) {
    audio.volume = 0;
  } else if (Math.floor((100 * e.offsetX) / volume.offsetWidth) / 100 > 1) {
    audio.volume = 1;
  } else {
    audio.volume = Math.floor((100 * e.offsetX) / volume.offsetWidth) / 100;
  }
  if (audio.volume === 0) {
    volumeButton.classList.add('mute');
  } else {
    volumeButton.classList.remove('mute');
  }
}

volume.addEventListener('mousedown', function (e) {
  moveVolume(e);
  this.addEventListener('mousemove', moveVolume);
});

volume.addEventListener('mouseup', function (e) {
  this.removeEventListener('mousemove', moveVolume);
});

export default slider;
