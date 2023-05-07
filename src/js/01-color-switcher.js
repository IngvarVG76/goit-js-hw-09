const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', () => {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;

  timerId = setInterval(() => {
    const bgColor = getRandomHexColor();
    bodyEl.style.backgroundColor = bgColor;
  }, 1000);
});

stopBtnEl.addEventListener('click', () => {
  clearInterval(timerId);
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
});
