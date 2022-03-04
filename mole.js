// JavaScript source code
const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = time.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
            square.forEach(className => {
                className.classList.remove('mole');
            })
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

function countDown() {
    currentTime--
    time.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        alert('They had families you know... ' + result + ' funerals will be held')
    }
}

let timerId = setInterval(countDown, 1000)

moveMole();