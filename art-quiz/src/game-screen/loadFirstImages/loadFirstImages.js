import Images from '../../imagesGenerator';
import randomSort from '../../randomizer';
import setBg from '../../imageLoader';
// import gamePictureDiv from '../../game_picture-screen';

export default function loadFirstImages(key, keyValue){
  let wrongArray;
  let resultArray = [];
  const img = new Images(key, keyValue);
  img.getImgInfo().then(() => {
      wrongArray = img.wrongArray();
      resultArray.push(img.randomArray[0]);
      for (let i = 0; i < 3; i++){
        resultArray.push(wrongArray[i]);
      }
      randomSort(resultArray);
      resultArray.push(img.randomArray[0]);
      return resultArray;
  }
  )
  return resultArray
}
