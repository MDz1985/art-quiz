export default function setBg(element, number){
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/MDz1985/assets/assets-art-quiz/assets-art-quiz/img/${number}.jpg`;

  img.addEventListener('load' , (event) => {

    element.style.background = `url('https://raw.githubusercontent.com/MDz1985/assets/assets-art-quiz/assets-art-quiz/img/${number}.jpg')`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPositionX = 'center';
  });
}

