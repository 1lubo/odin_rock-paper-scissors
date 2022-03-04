const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const reset = document.getElementById("reset");

let computerPlay = function(){
    const words = ['Rock', 'Paper', 'Scissors'];
    let rand_choice = Math.floor(Math.random() * 3);
    let computerChoice = words[rand_choice];
    return computerChoice;
}



let changeScore = function(roundResult){
if (roundResult === "P"){
    playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else if (roundResult === "C"){
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }
}

let playRound = function (computerC, playerC){
    
    let playerSelection = playerC.toLowerCase();
    let computerSelection = computerC.toLowerCase();
    const result = document.getElementById("result");
    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.innerText = "You win! Rock beats scissors.";
        changeScore('P');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.innerText = "You win! Paper beats rock.";
        changeScore('P');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.innerText = "You win! Scissors beats paper.";
        changeScore('P');
    } else if (playerSelection === computerSelection) {
        result.innerText = "Draw.";
        return 'D';
    } else {
        result.innerText = `You lose. ${computerSelection} beats ${playerSelection}.`;
        changeScore('C')
    }
}


const rock = document.getElementById("rock");
rock.addEventListener("click", function(){ playRound(computerPlay(), 'rock'); });

const paper = document.getElementById("paper");
paper.addEventListener("click", function(){ playRound(computerPlay(), 'paper'); });

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(){ playRound(computerPlay(), 'scissors'); });

reset.addEventListener("click", resetAll);

function resetAll(){
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    result.innerText = "";
}
