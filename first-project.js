
// 1. Task to randomly return "rock", "paper", "scissor" by using Math.random()
    // What's the logic?
        // Math.random() → returns a number between 0 and 1 - Then compare if it's e.g. less than 0.33, 0.66, etc.

// function getComputerChoice() {
//     let randomWord = Math.random();
    
//     if (randomWord < 0.33) {
//         return "rock";
//     } else if (randomWord < 0.66) {
//         return "paper";
//     } else { 
//        return "scissors"; 
//     }
// }

// console.log(getComputerChoice());


// 2. Task: Function that takes the user choice and returns it by using prompt()
    // What's the logic?
        // - It prompts the user to enter a choice (like "rock", "paper" or "scissors").
        // - The prompt() function returns the user’s input as a string.
        // - This string is stored in a variable (e.g. randomChoice) and then returned by the function.

// function getHumanChoice() {
//     let randomChoice = prompt("Choose: rock, paper or scissors");
//     return randomChoice;
//   }

//   console.log(getHumanChoice());


// 3. Task: write variables to keep track of the players score by creating 2 new varibales and initialize with 0
    // What's the logic?
        // Variables need to be declared outside a function that they can be accessed anywhere in the code/ outside the function

    // let humanScore = 0;
    // let computerScore = 0;

// console.log(humanScore);
// console.log(computerScore);



// 4. Task: A function that takes the human and computer player choices as arguments, plays a single round, 
// increments the round winner’s score and logs a winner announcement
    // What's the logic?
        // a. Case Insensitive Input: first, the humanChoice is converted to lowercase using .toLowerCase() so the input works even if the user types "Rock", "ROCK", or "rOcK".
    
        // b. Draw Condition: If both choices are the same (e.g., both chose "rock"), the result is a tie:
            // if (humanChoice === computerChoice)
        
        // c. Win Condition for the Human
            // The function checks if the human wins. There are three winning situations:
            // Rock beats Scissors
            // Paper beats Rock
            // Scissors beats Paper
            
            // --> This is checked with:
                // else if (
                //   (humanChoice === "rock" && computerChoice === "scissors") ||
                //   ...
                // )
    
        // d. Lose Condition (Computer Wins)
            // If it’s not a tie and not a human win, then the computer wins by default:
            // else { ... }
    
         //e.  Score Keeping
            // If the human wins: humanScore++
            // If the computer wins: computerScore++


// function playRound(humanChoice, computerChoice) {
//     console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

//     if (humanChoice === computerChoice) {
//       return "It's a tie!";
//     }
  
//     if (
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "scissors" && computerChoice === "paper") ||
//       (humanChoice === "paper" && computerChoice === "rock")
//     ) {
//       return "You win!";
//     } else {
//       return "You lose!";
//     }
//   }
  
//   // Example of getting a choice (this could be a prompt or a function call in practice)
//   const humanSelection = getHumanChoice(); // assuming this returns a valid choice
//   const computerSelection = getComputerChoice(); // assuming this returns a valid choice
  
//   console.log(playRound(humanSelection, computerSelection));  // Outputs the result of the round

//  // Score after each round
//   Console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
  


// 5. Task: keep track of the scores and declares a winner at the end (putting everything together)
  

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
  
//     // Function what the gamer= human chooses
//     function getHumanChoice() {
//       return prompt("Rock, Paper, or Scissors?");
//     }
  
//     // Function what the computer chooses
//     function getComputerChoice() {
//       const random = Math.random();
//       if (random < 0.33) return "rock";
//       else if (random < 0.66) return "paper";
//       else return "scissors";
//     }
  
//     // Function for analysing a round
//     function playRound(humanChoice, computerChoice) {
//       humanChoice = humanChoice.toLowerCase();
  
//       if (humanChoice === computerChoice) {
//         console.log("It's a tie!");
//       } else if (
//         (humanChoice === "rock" && computerChoice === "scissors") ||
//         (humanChoice === "paper" && computerChoice === "rock") ||
//         (humanChoice === "scissors" && computerChoice === "paper")
//       ) {
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         humanScore++;
//       } else {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//       }
//     }
  
//     // Playing 5 Rounds (without loops)
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
  
//     // Score Tracking
//     console.log("Final Score:");
//     console.log("Human:", humanScore);
//     console.log("Computer:", computerScore);
  
//     if (humanScore > computerScore) {
//       console.log("🎉 You win the game!");
//     } else if (humanScore < computerScore) {
//       console.log("💻 Computer wins the game!");
//     } else {
//       console.log("It's a draw!");
//     }
//   }
  
//   // Spiel starten:
//   playGame();
  


// Revisitng RPS - Project 

// Variablen für den Punktestand
let humanScore = 0;
let computerScore = 0;

// Funktion für die Auswahl des Computers
function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) return "rock";
  else if (random < 0.66) return "paper";
  else return "scissors";
}

// Funktion, die die Runde analysiert und den Gewinner bestimmt
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  let resultMessage = '';
  
  // Logik für den Vergleich der Entscheidungen
  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  // Ergebnisse anzeigen
  document.getElementById('result').textContent = resultMessage;

  // Punktestand aktualisieren
  document.getElementById('score').textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

  // Wenn jemand 5 Punkte erreicht hat, zeigt das den Gewinner an
  if (humanScore === 5) {
    document.getElementById('result').textContent = 'You win the game!';
    disableButtons();
  } else if (computerScore === 5) {
    document.getElementById('result').textContent = 'Computer wins the game!';
    disableButtons();
  }
}

// Funktion, die die Buttons deaktiviert, wenn das Spiel vorbei ist
function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

// Event Listener für die Buttons
document.getElementById('rock').addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});