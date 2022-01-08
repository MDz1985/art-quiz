let timeoutId;
function startTimer(element) {
  if (localStorage.getItem('timerOn') !== 'false') {
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
  }
}

export { startTimer, timeoutId };
