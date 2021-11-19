import images from '../../assets/images.json';
import randomSort from '../randomizer';

class Images{
  constructor(key,keyValue){
    this.key = key;
    this.keyValue = keyValue;
    this.images = images;
    this.randomArray = [];
  }
  async getImgInfo() {

    const res = await fetch(this.images);
    const data = await res.json();
    this.rightArray = data.filter(x => x[this.key] === this.keyValue);
    this.wrongArray = data.filter(x => x[this.key] !== this.keyValue);

    for (let i = 0; i < this.rightArray.length; i++){
      this.randomArray.push(this.rightArray[i].imageNum);
    }
    randomSort(this.randomArray)
  }

}

export default Images






  // export default Images