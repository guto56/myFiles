let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

const updateDisplay = () => {
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
};

const startTimer = () => {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000);
};

const pauseTimer = () => {
    clearInterval(timer);
    isRunning = false;
};

const resetTimer = () => {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
};

const toggleScreen = () => {
    window.location.href = '../clock/clock.html';
};

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('toggleScreenBtn').addEventListener('click', toggleScreen);


const pausarBtn = document.getElementById('pauseBtn').addEventListener('click',function(){
    const iniciarBtn = document.getElementById('startBtn')
    iniciarBtn.innerText = 'Continuar'

    iniciarBtn.addEventListener('click',function(){
        iniciarBtn.innerText = 'Iniciar'
    })
})

updateDisplay();
