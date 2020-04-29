// Keeps track of the players scores to give a final winner in the end.
var playerScore = 0;
var computerScore = 0;

// rolls a random number either 1, 2 or 3. +1 takes it up from starting at 0.
// resulting number will correspond with either scissors, paper or Rock.
function computerPlay() {
    var numberChosen = Math.floor(Math.random() * 3 + 1);
    if (numberChosen === 1) {
        return "scissors";
    }
    if (numberChosen === 2) {
        return "paper";
    }
    if (numberChosen === 3) {
        return "rock";
    }
    console.log(numberChosen);
};

//    Game ruleset is simple: 
// |-== scissors beats paper ==-|
// |-==   paper beatr Rock   ==-|
// |-=r Rock beats scissors  ==-|
// plays a round of scissors, paper, rock.
function playRound() {
    // uses our earlier function to find the computers selection, either 1, 2 or 3.
   var computerSelection = computerPlay().toLowerCase();
   // prompts the user for an input to play the game.
   var playerSelection = prompt("Scissors, paper or rock?").toLowerCase();
   console.log("The player chose " + playerSelection);
   console.log("The computer chose " + computerSelection);

    if (computerSelection === playerSelection) {
        console.log("This round was a draw.")
        return "Result is a draw!";
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You won this round!")
        return ++playerScore;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You lost this round!")
        return ++computerScore;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You won this round!")
        return ++playerScore;
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You lost this round!")
        return ++computerScore;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You lost this round!")
        return ++computerScore;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You won this round!")
        return ++playerScore;
    }
}

// Function that starts the game of which results show up in the console.
// Type game(); in the console to begin.
function game() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        return "You have won the game! The final score was " + playerScore + " to " + computerScore;
    }
    else if (playerScore === computerScore) {
        return "It was a draw! The final score was " + playerScore + " to " + computerScore;
    }
    else {
        return "You have lost the game! The final score was " + computerScore + " to " + playerScore;
    }
}
