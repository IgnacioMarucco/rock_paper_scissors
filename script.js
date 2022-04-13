//computerPlay function, generates a random choice for the computer to play with.

let computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;

let playRound = (choice) => {
    let playerSelection = choice;
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        draws++ ;
        drawsText.textContent = `Draws: ${draws}`;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++ ;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
        } else {
            playerScore++ ;
            playerScoreText.textContent = `Player Score: ${playerScore}`;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++  ;
            playerScoreText.textContent = `Player Score: ${playerScore}`;
        } else {
            computerScore++ ;
            computerScoreText.textContent = `Computer Score: ${computerScore}`; 
        }
    } else if (playerSelection == 'scissors'){
        if (computerSelection == 'rock') {
            computerScore++ ;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
        } else {
            playerScore++ ;
            playerScoreText.textContent = `Player Score: ${playerScore}`;
        }
    } else {
        console.log(`Choose a valid option!`) ;
    }
    if (playerScore == 5 || computerScore == 5) {
        options.style.visibility = 'hidden';
        if (playerScore > computerScore) {
            result.textContent = `You won!`;
        } else {
            result.textContent = `You lost. Try again!`;
        }
    }
}

// DOM section:
//Player input:


//container buttons:
const options = document.querySelector('.options');

//buttons:
const btnNewGame = document.querySelector('#newGame');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnPlayAgain = document.querySelector('#playAgain');
//Text
let playerScoreText = document.querySelector('#playerScoreText');
let computerScoreText = document.querySelector('#computerScoreText');
let drawsText = document.querySelector('#drawsText');
let result = document.querySelector('.result');


let playerChoice = (event) => playRound(event.target.id);

//New game function:
let game = () => options.style.visibility = 'visible';

//Reload function:
let reload = () => window.location.reload();

//event listeners
btnRock.addEventListener('click', playerChoice);
btnPaper.addEventListener('click', playerChoice);
btnScissors.addEventListener('click', playerChoice);
btnNewGame.addEventListener('click', game);
btnPlayAgain.addEventListener('click', reload);





