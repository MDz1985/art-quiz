import setBg from '../imageLoader';

function changeBackground(){
  setBg(gamePictures.firstElementChild, pictureNumbers[0]);
  console.log(imageInfo.rightArray[0].imageNum);
  let element = gamePictures.firstElementChild.nextElementSibling;
  for (let i = 1; i < 4; i++) {
    setBg(element, pictureNumbers[i]);
    element = element.nextElementSibling;
  }
}