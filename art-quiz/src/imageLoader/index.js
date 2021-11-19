export default function setBg(element, number){
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/MDz1985/assets/assets-art-quiz/assets-art-quiz/img/${number}.jpg`;

  img.addEventListener('load' , (event) => {
    element.style.transition = '300ms ease-in-out';
    element.style.background = `url('https://raw.githubusercontent.com/MDz1985/assets/assets-art-quiz/assets-art-quiz/img/${number}.jpg')`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPositionX = 'center';
    element.style.transform = 'rotate(360deg) translateX(100px)';
    setTimeout(() => {
      element.style.transform = 'none'
    }, 500);
  });
}

