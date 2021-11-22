import imgClass from '../../imagesGenerator';
import imageElement from '../../game-screen-images';
import playSound from '../../playSound';
import randomSort from '../../randomizer';
import setBg from '../../imageLoader';
import gameDiv from '../index';

export default function changeGameImages(className, picturesTeg, paragraphTeg, questionTeg){
  let pictureNumbers = [];
  let currentAuthor;
  let randomArray;
  let number = 0;
  let rightAnswer;



  //questionNumber

  const questionNumbersArray = [];
  let question = questionTeg.firstElementChild;
  for (let i = 0; i < questionTeg.childElementCount; i++){
    questionNumbersArray.push(question);
    question = question.nextElementSibling;
  }


//TEST !!!!
  questionNumbersArray[0].style.color = 'red';


  className = new imgClass('category',localStorage.getItem("current_category"));
  className.getImgInfo()
    .then(() => {
        changeImagesNumbers();
        let isRightSound;
        for (let i = 0; i < 4; i++) {
          picturesTeg.append(imageElement(`image${i + 1}`, pictureNumbers[i], () => {
            isRightSound = pictureNumbers[i] === rightAnswer;
            playSound(isRightSound);
          }));
        }
        paragraphTeg.innerText = `What picture was written by ${className.rightArray[0].author}?`
        className.rightArray.shift();



        //TEST !!!
        // localStorage.setItem('soundVolume', '1');
        da();



      }

    )

  function changeImagesNumbers() {
    pictureNumbers.length = 0;
    pictureNumbers.push(className.rightArray[0].imageNum);
    // rightAnswer = className.rightArray[0].imageNum;
    currentAuthor = className.rightArray[0]['author'];
    randomArray = className.rightArray.filter(x => x['author'] !== currentAuthor);
    randomSort(randomArray);


    for (let i = 0; i < 3; i++) {
      pictureNumbers.push(randomArray[i].imageNum);
    }

    randomSort(randomArray);
    randomSort(pictureNumbers);
    className.rightArray.shift();
  }




  function changeBackground(){
    setBg(picturesTeg.firstElementChild, pictureNumbers[0]);
    console.log(className.rightArray[0].imageNum);
    let element = picturesTeg.firstElementChild.nextElementSibling;
    for (let i = 1; i < 4; i++) {
      setBg(element, pictureNumbers[i]);
      element = element.nextElementSibling;
    }
  }



  //TEST !!!!!!!!
  function da (){
    paragraphTeg.innerText = `What picture was written by ${className.rightArray[0].author}?`
    changeImagesNumbers();
    changeBackground();
    number++;
    questionNumbersArray[number].style.color = 'red';
    questionNumbersArray[number-1].style.color = 'white';

    setTimeout(da,10000);
  }



}
