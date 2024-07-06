// scriptdog.js
let steps = 0;
let running = false;
let stepInterval;

const dog = document.getElementById('dog');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const stepCounter = document.getElementById('stepCounter');

startButton.addEventListener('click', () => {
    if (!running) {
        running = true;
        dog.classList.remove('stopped');
        dog.classList.add('running');
        stepInterval = setInterval(() => {
            steps++;
            stepCounter.textContent = `걸음수: ${steps}`;
        }, 800); // 0.8초마다 걸음수 증가
    }
});

stopButton.addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(stepInterval);
        dog.classList.remove('running');
        dog.classList.add('stopped');
    }
});

resetButton.addEventListener('click', () => {
    steps = 0;
    stepCounter.textContent = `걸음수: ${steps}`;
});
