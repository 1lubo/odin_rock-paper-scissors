
let computerPlay = function(){
    const words = ['Rock', 'Paper', 'Scissors'];
    let rand_choice = Math.floor(Math.random() * 3);
    let computerChoice = words[rand_choice];
    return computerChoice;
}

