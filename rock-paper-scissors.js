//function that chooses rock, apper, or scissors randomly. case insensitive.
function computerPlay() {
let choices = ["Rock","Paper","Scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
return computerChoice.toUpperCase;
}

function playRound(playerSelection, computerSelection) {
    const computerSelection = computerPlay.toUpperCase;

    let playerChoice = prompt("Choose rock, paper or scissors:");
    let playerSelection = playerChoice.toUpperCase;

    if (playerSelection == computerSelection) {
        return "Rock vs Rock! Equal power means no winners here.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Oh no! You have been foiled by simple paper!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You crushed thoe scissors! Well done!";
    } else {
        return "Ooops. Something went wrong."
    };
}
