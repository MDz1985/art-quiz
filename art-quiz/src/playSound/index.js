import rightSound from '../../assets/audio/right-answer.mp3';
import wrongSound from '../../assets/audio/wrong-answer.mp3';


export default function playSound(value) {
  const audio = new Audio();
  if (localStorage.getItem('soundOn') === 'false'){
    audio.volume = 0;
    // localStorage.setItem('soundVolume', '0');
  }else {
    audio.volume = Number(localStorage.getItem('soundVolume'));
  }
  if (value === true){
    audio.src = rightSound;
  } else{
    audio.src = wrongSound;
  }
  audio.autoplay = true;
}