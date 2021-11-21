import htmlFromString from '../utils/htmlFromString';
import './index.scss';

import menu from './index.html';
const menuDiv = htmlFromString(menu);

const timeLimit = menuDiv.querySelector('.time-limit');
if (!localStorage.getItem('timeLimit')){
  timeLimit.value = '30';
  localStorage.setItem('timeLimit', timeLimit.value);
} timeLimit.value = localStorage.getItem('timeLimit');
// localStorage.setItem('timeLimit', timeLimit.value);
menuDiv.addEventListener('click',() => localStorage.setItem('timeLimit', timeLimit.value));

const timeLimitSelector = menuDiv.querySelector('.time-limit-selector');
if (localStorage.getItem('timerOn') === 'false'){
  timeLimitSelector.checked = false;
}
timeLimitSelector.addEventListener('change', () => {
  localStorage.setItem('timerOn', timeLimitSelector.checked)
});

const soundSelector = menuDiv.querySelector('.sound-selector');
if (localStorage.getItem('soundOn') === 'false'){
  soundSelector.checked = false;
}
soundSelector.addEventListener('change', () => {
  localStorage.setItem('soundOn', soundSelector.checked)
});



const volumeBar = menuDiv.querySelector('.volume-slider-filled');
const volume = menuDiv.querySelector('.volume-slider');

function moveVolume(e) {
  let soundVolume;
  volumeBar.style.flexBasis = String(Math.floor(10000 * e.offsetX / volume.offsetWidth) / 100) + '%';
  if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 < 0){
    soundVolume = 0;
  } else if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 > 1){
    soundVolume = 1;
  } else{
    soundVolume = Math.floor(100 * e.offsetX / volume.offsetWidth) / 100;
  }
  localStorage.setItem('soundVolume', String(soundVolume));
  // if (audio.volume === 0) {
  //   volumeButton.classList.add('mute');
  // } else {
  //   volumeButton.classList.remove('mute');
  // }
}

volume.addEventListener("mousedown", function(e){
  moveVolume(e);
  window.addEventListener('mousemove', moveVolume);
  this.addEventListener('move', moveVolume);
});

volume.addEventListener("mouseup", function(e){
  this.removeEventListener('mousemove', moveVolume);
  window.removeEventListener('mousemove', moveVolume);
});


// import slider from "../volume-slider";
// const menuD = menuDiv.querySelector('menu');
// menuD.firstChild.after(slider('dkj',()=>(console.log(7))));

export default menuDiv;
