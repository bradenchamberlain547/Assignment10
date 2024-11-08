const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

let rocketX = canvas.width / 2 - 30;
let rocketY = canvas.height - 100;
let rocketSpeed = 1;
let rColor = 'white';

let countdown = 10;
let countdownInterval;
let isLaunch = false;
let timerText = "";

function startCountdown() {
    isLaunch = false;
    countdown = 10;
    timerText = countdown;
    rocketY = canvas.height - 100;
    rocketSpeed = 1;

    countdownInterval = setInterval(function() {
        if (countdown > 0) {
            countdown--;
            timerText = countdown;
        } else {
            clearInterval(countdownInterval);
            startLaunch();
        }
    }, 1000);
}

function startLaunch() {
    isLaunch = true;
    rocketSpeed = 3;
}

function drawRocket() {
    ctx.fillRect(rocketX, rocketY, 60, 150);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(rocketX + 30, rocketY + 150);
    ctx.lineTo(rocketX + 20, rocketY + 180);
    ctx.lineTo(rocketX + 40, rocketY + 180);
    ctx.closePath();
    ctx.fill();
}

function drawTimer() {
    ctx.fillStyle = 'white';
    ctx.font = '30px Times New Roman';
    ctx.textAlign = 'center';
    ctx.fillText(timerText, canvas.width / 2, canvas.height / 2 - 100);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRocket();
    drawTimer();

    if (isLaunch) {
        rocketY -= rocketSpeed;
    }

    requestAnimationFrame(animate);
}

animate();
