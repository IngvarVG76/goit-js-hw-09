const bodyEl = document.querySelector('body');
// console.log(bodyEl);
const startBtnEl = document.querySelector('button[data-start]');
// console.log(startBtnEl);
const stopBtnEl = document.querySelector('button[data-stop]');
// console.log(stopBtnEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());

stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', () => {
    // console.log('start click');
    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
    
    timerId = setInterval(() => {
        const bgColor = getRandomHexColor();
        bodyEl.style.backgroundColor = bgColor;
    }, 1000)
});

stopBtnEl.addEventListener('click', () => {
    // console.log('stop click');
    clearInterval(timerId);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
});
