export default function startTimer(element){
  let time = localStorage.getItem('timeLimit');
  function changeTime(){
    element.innerText = time;
    time--;
    if(time === 0){
      time = localStorage.getItem('timeLimit');
    }
    setTimeout(changeTime,1000);
  }
  changeTime()
}



// // import htmlFromString from '../utils/htmlFromString';
// // import './index.scss';
//
// import secondsHtml from './index.html';
// const secondsSpan = htmlFromString(secondsHtml);
//
// function getTimeRemaining(endtime) {
//   const t = Date.parse(endtime) - Date.parse(new Date());
//   const seconds = Math.floor((t / 1000) % 60);
//   return {
//     seconds: seconds
//   };
// }
//
// function initializeClock(id, endtime) {
//
//   const timeinterval = setInterval(updateClock, 1000);
//
// // var secondsSpan = clock.querySelector(".seconds");
//
//   function updateClock() {
//     const t = getTimeRemaining(endtime);
//
//     if (t.total <= 0) {
//       document.getElementById("countdown").className = "hidden";
//       document.getElementById("deadline-message").className = "visible";
//       clearInterval(timeinterval);
//       return true;
//     }
//
//     secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
//   }
//
//   updateClock();
// }
//
// // var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
// const deadline = new Date(Date.parse(new Date()) + 30 * 1000); // for endless timer
// initializeClock("countdown", deadline);
//
//
// export default secondsSpan;
//
