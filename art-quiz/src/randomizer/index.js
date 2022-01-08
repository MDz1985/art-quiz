export default function randomSort(array) {

  // тасование Фишера-Йетса
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function basicSort(array) {
  array.sort(() => Math.random() - 0.5);
}
