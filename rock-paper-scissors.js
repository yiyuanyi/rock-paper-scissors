//function that chooses rock, apper, or scissors randomly.
function computerPlay() {
let choices = ["Rock","Paper","Scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
return computerChoice;
}

let playerSelection = prompt("Choose rock, paper or scissors:");

function playRound() {
//converts player selection and computer selection to lower case to be case insensitive
playerSelection = playerSelection.toLowerCase();

computerSelection = computerPlay().toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Rock vs Rock! Tie.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Rock vs Paper. Lose.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Rock vs Scissors. Win!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Paper vs Paper! Tie.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Paper vs Rock. Win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Paper vs Scissors. Lose.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Scissors vs Rock! Lose.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors vs Paper. Win!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Scissors vs Scissors. Tie.";
    } else {
        return "Ooops. Something went wrong."
    };
}

let playerWinCount = 0;
let computerWinCount = 0;

function game() {
    console.log("There are 5 rounds.")
for (let rounds=0; rounds<5; rounds++) {
    playRound();
}
}