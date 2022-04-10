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

