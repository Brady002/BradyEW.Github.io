// JavaScript source code
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#currentPlayer');
    let currentPlayer = 1;

    const takensquares = document.querySelectorAll('taken');

    for (var i = 0; i < squares.length; i++) {
        testClick(i);
        checkWin(i);
    }

    function testClick(index) {
        console.log(squares[i])
        squares[i].onclick = function () {
            console.log(index)
            if (squares[index + 7].classList.contains('taken') && squares[index].classList.contains('taken') == false) {
                if (currentPlayer === 1) {
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-one');
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else if (currentPlayer === 2) {
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-two');
                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else {
                    alert("can't place there");
                }
            }
        }
    }

    function checkWin(index) {
    }
})




