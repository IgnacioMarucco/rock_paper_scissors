//Generate Computer Choice
function computerPlay() {
    return Math.floor(Math.random()*3);
}
// Single Round Function
function playRound(choicePlayer) {
    let winner;
    let choiceComputer = computerPlay();
    
    let playerScoreText = document.querySelector('#playerScoreText');
    let computerScoreText = document.querySelector('#computerScoreText');
    let drawsText = document.querySelector('#drawsText');
    let resultText = document.querySelector('#result');
    let roundResult = document.querySelector('#roundResult')

    if (choicePlayer === choiceComputer){
        roundResult.textContent = `Tie!`;
        return 0;
    } else if 
        ((choicePlayer === 0 && choiceComputer === 1) ||
        (choicePlayer === 1 && choiceComputer === 2) ||
        (choicePlayer === 2 && choiceComputer === 0)) {
            roundResult.textContent = `You lose this round! ${valueToString(choiceComputer)} beats ${valueToString(choicePlayer)}.`;
            return 1;
        } else {
            roundResult.textContent = `You win this round! ${valueToString(choicePlayer)} beats ${valueToString(choiceComputer)}.`;
            return 2;
        }
}
//Game Function (First player to earn 5 points)
function game() {
    let result = 0;
    let scorePlayer = 0;
    let scoreComputer = 0;
    let draws = 0;
    // Buttons
    const btnChoice = document.querySelectorAll('.options input');
    btnChoice.forEach(choice => choice.addEventListener('click', playerInput));

    function playerInput(e) {
        choicePlayer = Number(e.target.value);
        result = playRound(choicePlayer);

        if (result === 0) {
            draws++;
            drawsText.textContent = `Draws: ${draws}`;
        } else if (result === 1) {
            scoreComputer++;
            computerScoreText.textContent = `Computer Score: ${scoreComputer}`; 
        } else {
            scorePlayer++;
            playerScoreText.textContent = `Player Score: ${scorePlayer}`;
        }
        if (scoreComputer > 4 || scorePlayer > 4 ){
            btnChoice.forEach(choice => choice.disabled = true);
            if (scoreComputer > scorePlayer) {
                resultText.textContent = `You lost the game!`;
            } else if (scoreComputer < scorePlayer){
                resultText.textContent = `You won the game!`;
            }
        }
        console.log(`Player:${scorePlayer} Computer:${scoreComputer}  Draws:${draws} `)
    }
}

//Values to String Function
function valueToString(value){
    if (value === 0){
        return `Rock`;
    } else if (value === 1){
        return `Paper`;
    } else if (value === 2){
        return `Scissors`;
    }
}

//Reload function:
let reload = () => window.location.reload();

const btnPlayAgain = document.querySelector('#reload');
btnPlayAgain.addEventListener('click', reload);

game();
