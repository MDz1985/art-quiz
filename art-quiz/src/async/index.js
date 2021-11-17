import images from '../../assets/images.json';


// let rightArray, wrongArray
export default async function getImgInfo(key, keyValue) {

  const res = await fetch(images);
  const data = await res.json();
  //
  // if (number === -1){
  //   number = getRandomNum(data.length);
  // }


  // img.arrayOfQuestions =
  // let rightArray = data.filter(x => x[key] === keyValue);
  // let wrongArray = data.filter(x => x[key] !== keyValue);
  // console.log(data.filter(x => x[key] === keyValue));
  // console.log(data.filter(x => x[key] !== keyValue));
  return {
    rightArray: data.filter(x => x[key] === keyValue),
    wrongArray: data.filter(x => x[key] !== keyValue)
  };
  // localStorage.setItem('rightArray', JSON.stringify(rightArray));
  // localStorage.setItem('rightArray', JSON.stringify(wrongArray));
  // return {rightArray, wrongArray}
  // quote.textContent = data[number].text;
  // author.textContent = data[number].author;
}


// export default Images