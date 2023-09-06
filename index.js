function diceRoll () {
    let randomizer1 = Math.floor(Math.random() * 6) + 1;
    let randomizer2 = Math.floor(Math.random() * 6) + 1;
    let diceImg1 = document.querySelector(".diceImg1");
    let diceImg2 = document.querySelector(".diceImg2");
    let banner = document.querySelector(".banner");

    diceImg1.setAttribute("src", "./images/Dice-" + randomizer1 + "-b.svg");
    diceImg2.setAttribute("src", "./images/Dice-" + randomizer2 + "-b.svg");

    if (randomizer1 > randomizer2) {
        banner.innerHTML = "Player 1 Win";
    } else if (randomizer1 === randomizer2) {
        banner.innerHTML = "Draw";
    } else {
        banner.innerHTML = "Player 2 Win";
    }
}