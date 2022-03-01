
let computerPlay = function(){
    const words = ['Rock', 'Paper', 'Scissors'];
    let rand_choice = Math.floor(Math.random() * 3);
    let computerChoice = words[rand_choice];
    return computerChoice;
}

let playRound = function (computerC, playerC){
    
    let playerSelection = playerC.toLowerCase();
    let computerSelection = computerC.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats scissors.");
        return 'P';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats rock.");
        return 'P';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beats paper.");
        return 'P';
    } else if (playerSelection === computerSelection) {
        console.log("Draw.");
        return 'D';
    } else {
        console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
        return "C";
    }
}

let game = function () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerS = prompt("Rock-Paper-Scissors. What do you choose?");
        let result = (playRound(computerPlay(), playerS));
        if (result === 'P') {
            playerScore++ ;
        } else if (result === 'C') {
            computerScore++
        }
    }
    console.log(`The final score is: Player ${playerScore} / Computer ${computerScore}`)
}

game()