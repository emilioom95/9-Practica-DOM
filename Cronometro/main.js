let startTime = 0;
let intervalId = null;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const elapsed = Date.now() - startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
    if (!intervalId) {
        startTime = startTime ? Date.now() - (Date.now() - startTime) : Date.now();
        intervalId = setInterval(updateDisplay, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    startTime = 0;
    display.textContent = "00:00:00";
});
