//container buttons:
const options = document.querySelector('.options');

//buttons:
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnPlayAgain = document.querySelector('#playAgain');
//Text
let playerScoreText = document.querySelector('#playerScoreText');
let computerScoreText = document.querySelector('#computerScoreText');
let drawsText = document.querySelector('#drawsText');
let result = document.querySelector('.result');
let roundResult = document.querySelector('#roundResult')

//Defaults
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// Computer Selection Function
const rps = ["rock", "paper", "scissors"];

let computerSelectionFunction = () => {
    return rps[Math.floor(Math.random()*rps.length)];
}
// Player Selection Function
let playerSelectionFunction = (event) => {
    playerSelection = (event.target.id);
    playRound(playerSelection, computerSelectionFunction());
}
btnRock.addEventListener('click', playerSelectionFunction);
btnPaper.addEventListener('click', playerSelectionFunction);
btnScissors.addEventListener('click', playerSelectionFunction);

// Winner Function

let winnerFunction = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return 0;
    } else if (
    (playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock") ) {
        return 1;
    } else {
        return 2;
    }
}

// Play Round Function
let playRound = (playerSelection, computerSelection) => {
    let winner = winnerFunction(playerSelection, computerSelection);


    if (winner == 0) {
        draws++;
        roundResult.textContent = `It's a Tie!`;

        drawsText.textContent = `Draws: ${draws}`;
    } else if (winner == 1) {
        computerScore++;
        roundResult.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}!`;

        computerScoreText.textContent = `Computer Score: ${computerScore}`; 
    } else {
        playerScore++;
        roundResult.textContent = `You won this round! ${playerSelection} beats ${computerSelection}!`;

        playerScoreText.textContent = `Player Score: ${playerScore}`; 
    }
    bestOfFive();
}


// Best of five

let bestOfFive = () => {
    if (playerScore == 5 || computerScore == 5 ) {
        if (playerScore > computerScore) {
            result.textContent = `You won the game!`; 
        } else if (computerScore > playerScore) {
            result.textContent = `You lost the game!`;
        }
        playerScore = 0;
        computerScore = 0;
        draws = 0;
        btnRock.removeEventListener('click', playerSelectionFunction);
        btnPaper.removeEventListener('click', playerSelectionFunction);
        btnScissors.removeEventListener('click', playerSelectionFunction);


        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;

        btnPlayAgain.style.visibility = 'visible';

    }
}

//Reload function:
let reload = () => window.location.reload();


// btnNewGame.addEventListener('click', game);
btnPlayAgain.addEventListener('click', reload);

