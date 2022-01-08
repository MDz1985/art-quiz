class Images {
  constructor(key, value) {
  }
}

let img = new Images();

import getImgInfo from '../imagesGenerator';
import randomSort from '../randomizer';

getImgInfo('category', 'realism').then((result) => {
  img.rightArray = result.rightArray;
  img.wrongArray = result.wrongArray;
  img.randomArray = [];
  for (let i = 0; i < img.wrongArray.length; i++) {
    img.randomArray.push(i);
  }
  randomSort(img.randomArray);
});

export default img;
