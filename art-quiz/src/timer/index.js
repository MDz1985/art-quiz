let timeoutId;
const checkIsTimerOn = () => JSON.parse(localStorage.getItem('timerOn'));

function startTimer(element) {
  console.log(checkIsTimerOn);
  if (checkIsTimerOn()) {
    let time = Number(localStorage.getItem('timeLimit'));

    function changeTime() {
      element.innerText = time;
      time--;
      if (time === 0) {
        time = localStorage.getItem('timeLimit');
        return;
      }
      timeoutId = setTimeout(changeTime, 1000);
    }
    changeTime();
  } else {
    element.innerText = '';
  }
}

export {startTimer, timeoutId};
