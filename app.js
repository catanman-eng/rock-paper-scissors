let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => button.addEventListener("click", playRound));


function playRound(e){
    if (gameOver()) {
        alert("Game over, reload to play again");
        return;
      }
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    scoreUpdate(getWinner(playerSelection, computerSelection))    

    if (gameOver()) decision();
}

function computerPlay() {
    var options = [
        'rock',
        'paper',
        'scissors'
    ];

    var num = Math.floor(Math.random()*options.length);

    return options[num];
}

 getWinner = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection){
        return 'tie'
    }

    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
    ){
        return 'player' 
    }

    else {
        return 'computer'
    }

}

scoreUpdate = (winner) => {
    const result = document.getElementById("score-header")
    const playerScoreResult = document.getElementById("player-score") 
    const computerScoreResult = document.getElementById("computer-score") 

    if (winner === 'tie'){
        result.textContent = "It's a Tie!"
    }

    else if (winner === 'player'){
        result.textContent = "Player Wins!"
        playerScore++;
    }

    else{
        result.textContent = "Computer Wins!"
        computerScore++;
    }

    playerScoreResult.textContent = `Player: ${playerScore}`;
    computerScoreResult.textContent = `Computer: ${computerScore}`;
}

gameOver = () => {
    if (playerScore === 5 || computerScore === 5){
        return true
    }
}

decision = () => {
    const result = document.getElementById("score-header")

    if (playerScore > computerScore){
        result.textContent = "Game Over, You Won!"
    }

    else {
        result.textContent = "Game Over, You Lost :("
    }
}