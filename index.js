let playerOne = document.querySelectorAll(".playerOne .diceImg");
let playerTwo = document.querySelectorAll(".playerTwo .diceImg");
let randomizer1;
let randomizer2;
let banner = document.querySelector(".banner");

function playerOneRoll () {
    let diceImages = [...playerOne];
    randomizer1 = Math.floor(Math.random() * 6);
    let diceImage = diceImages[randomizer1];
    diceImage.classList.add("active");
}

function playerTwoRoll () {
    let diceImages = [...playerTwo];
    randomizer2 = Math.floor(Math.random() * 6)
    let diceImage = diceImages[randomizer2];
    diceImage.classList.add("active");
}

function winDrawLose () {
    if (randomizer1 > randomizer2) {
        banner.innerHTML = "Player 1 Win";
    } else if (randomizer1 === randomizer2) {
        banner.innerHTML = "Draw";
    } else if (randomizer1 < randomizer2) {
        banner.innerHTML = "Player 2 Win";
    }
}

function diceRoll () {
    playerOneRoll();
    playerTwoRoll();
    winDrawLose();
}