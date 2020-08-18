//function that chooses rock, apper, or scissors randomly. case insensitive.
function computerPlay() {
let choices = ["Rock","Paper","Scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
return computerChoice;
}

function playRound() {
    const computerSelection = computerPlay.toUpperCase;

    let playerChoice = prompt("Choose rock, paper or scissors:");
    let playerSelection = playerChoice.toUpperCase;

    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        return "Rock vs Rock! Equal power means no winners here.";
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "Oh no! You have been foiled by simple paper!";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "You crushed thoe scissors! Well done!";
    } else {
        return "Ooops. Something went wrong."
    };
}
