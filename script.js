//computerPlay function, generates a random choice for the computer to play with.

// let computerPlay = function() {
//     let randomNumber = Math.floor(Math.random()*3);
//     if (randomNumber == 0) {
//         return 'rock';
//     } else if (randomNumber == 1) {
//         return 'paper';
//     } else {
//         return 'scissors';
//     }
// };


//Arrow Function version:
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

//playRound function, a single round of rock paper scissors game


let playRound = (playerSelection, computerSelection) => {
    playerSelection = (prompt(`Choose rock/paper/scissors!`)).toLowerCase();
    computerSelection = computerPlay();
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        return `Draw`;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return `You lose! Paper beats Rock!`;
        } else {
            return `You win! Rock beats Scissors!`;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return `You win! Paper beats Rock!`;
        } else {
            return `You lose! Scissors beats Paper!`;
        }
    } else if (playerSelection == 'scissors'){
        if (computerSelection == 'rock') {
            return `You lose! Rock beats Scissors!`;
        } else {
            return `You win! Scissors beats Paper!`;
        }
    } else {
        return `Choose a valid option!`;
    }
}

//game function, 5 round game.

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    
    for (let i = 0; i < 5 ; i++) {
        let roundResult = playRound();
        if (roundResult.slice(0,5) == `You w`){
            playerScore++;
        } else if (roundResult.slice(0,5) == `You l`){
            computerScore++;
        } else if (roundResult == `Draw`) {
            draws++;
        } else {
            i--;
        }
        console.log(`playerScore = ${playerScore}`);
        console.log(`computerScore = ${computerScore}`)
    }
    return `Your score: ${playerScore}. Computer Score: ${computerScore}. Draws: ${draws}`;
}