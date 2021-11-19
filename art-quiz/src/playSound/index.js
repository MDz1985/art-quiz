import rightSound from '../../assets/audio/right-answer.mp3';
import wrongSound from '../../assets/audio/wrong-answer.mp3';


export default function playSound(value) {
  const audio = new Audio();
  if (value === true){
    audio.src = rightSound;
  } else{
    audio.src = wrongSound;
  }
  audio.autoplay = true;
}