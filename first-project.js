
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
//     humanChoice = humanChoice.toLowerCase();
  
//     if (humanChoice === computerChoice) {
//       console.log("It's a tie!");
//     } else if (
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "paper" && computerChoice === "rock") ||
//       (humanChoice === "scissors" && computerChoice === "paper")
//     ) {
//       console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//       humanScore++;
//     } else {
//       console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//       computerScore++;
//     }
//   }


// 5. Task: keep track of the scores and declares a winner at the end (putting everything together)
  

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function getHumanChoice() {
      return prompt("Rock, Paper, or Scissors?");
    }
  
    function getComputerChoice() {
      const random = Math.random();
      if (random < 0.33) return "rock";
      else if (random < 0.66) return "paper";
      else return "scissors";
    }
  
    function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
  
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }
  
    // 5 Runden spielen
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
  
    // Am Ende Punktestand anzeigen
    console.log("Final Score:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
  
    if (humanScore > computerScore) {
      console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
      console.log("💻 Computer wins the game!");
    } else {
      console.log("It's a draw!");
    }
  }
  
  // Spiel starten:
  playGame();
  