
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
        return "You win! Rock beats scissors.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock.";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper.";
    } else if (playerSelection === computerSelection) {
        return "Draw.";
    } else {
        return `You lose. ${computerSelection} beats ${playerSelection}.`
    }
}

