let playerWins=0;
let computerWins=0;
let round = 0;
let computerInput;

function restartGame () {
    playerWins=0;
    computerWins=0;
    round = 0;
    roundDisplay.innerHTML = "Round: " + round;
    playerWinsDisplay.innerHTML = "Your score is: " + playerWins;
    computerWinsDisplay.innerHTML = "The enemy's score is: " + computerWins;
}

const results = document.querySelector('#results');

const roundDisplay = document.getElementById('round')
const playerWinsDisplay = document.getElementById('score');
const computerWinsDisplay = document.getElementById('enemyScore');
const verdictDisplay = document.querySelector("#verdict>h2");
const enemyPicture = document.getElementById("enemyPicturesrc")

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', () => {
    playRound("rock");
    
});

paper.addEventListener('click', () => {
    playRound("paper");
});

scissors.addEventListener('click', () => {
    playRound("scissors");
});


function computerSelection () {
    let randNumber = Math.random()*3;
    if (randNumber <= 1) {
        computerInput = "rock";
    enemyPicture.src = "img/rock.webp";

    }
    else if (randNumber <= 2) {
        computerInput = "paper";
        enemyPicture.src = "img/paper.webp";
    }
    else {
        computerInput = "scissors";
        enemyPicture.src = "img/scissors.webp";
    }
    return computerInput;
}

function gameOver (playerWins, computerWins) {
    if (playerWins == 5 || computerWins == 5) {
        return 0;
    }
    return 1;
}

function playRound (playerInput) {

    computerInput = computerSelection();

    if(playerInput == "rock" && computerInput == "scissors" || playerInput == "paper" && computerInput == "rock" || playerInput == "scissors" && computerInput == "paper") {
        playerWins++;
        playerWinsDisplay.innerHTML = "Your score is: " + playerWins;
        round++;
        roundDisplay.innerHTML = "Round: " + round;
        verdictDisplay.innerHTML = "YOU WON";
        document.getElementById(playerInput).classList.add("border");
        setTimeout(() => {document.getElementById(playerInput).classList.remove("border")}, 300);
        if (gameOver(playerWins, computerWins) == 0) {
            if (playerWins == 5)  alert("Game is over! You won! Play again!");
            else alert("Game is over! You lost! Play again!")
            restartGame();
        }
    }
    else if (playerInput == "rock" && computerInput == "paper" || playerInput == "paper" && computerInput == "scissors" || playerInput == "scissors" && computerInput == "rock") {
        computerWins++;
        computerWinsDisplay.innerHTML = "The enemy's score is: " + computerWins;
        round++;
        roundDisplay.innerHTML = "Round: " + round;
        verdictDisplay.innerHTML = "YOU LOST";
        document.getElementById(playerInput).classList.add("border");
        setTimeout(() => {document.getElementById(playerInput).classList.remove("border")}, 300);
        if (gameOver(playerWins, computerWins) == 0) {
            if (playerWins == 5)  alert("Game is over! You won! Play again!");
            else alert("Game is over! You lost! Play again!")
            restartGame();
        }
    }
    else {
        round++;
        roundDisplay.innerHTML = "Round: " + round;
        verdictDisplay.innerHTML = "IT'S A DRAW";
        document.getElementById(playerInput).classList.add("border");
        setTimeout(() => {document.getElementById(playerInput).classList.remove("border")}, 300);
    }
}


    