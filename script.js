function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }

    if (playerChoice === "rock") {
        if (computerSelection === "Scissors") {
            return "You win!";
        } else {
            return "You lose!";
        }
    } else if (playerChoice === "scissors") {
        if (computerSelection === "Paper") {
            return "You win!";
        } else {
            return "You lose!";
        }
    } else if (playerChoice === "paper") {
        if (computerSelection === "Rock") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    else {
        return "Invalid input!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        // Update scores based on the result
        if (result.includes("You win!")) {
            playerScore++;
        } else if (result.includes("You lose!")) {
            computerScore++;
        }

        console.log(`Round ${i + 1}`);
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(result);
        console.log(`Player Score: ${playerScore}; Computer Score: ${computerScore}` );
    }

    // Declare the winner
    if (playerScore > computerScore) {
        console.log("Congratulations! You're the winner.");
    } else if (playerScore < computerScore) {
        console.log("Sorry! Computer wins this time.");
    } else {
        console.log("It's a tie!");
    }
}

// Call the game function to play
game();