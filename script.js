function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let userInput = prompt("Enter rock or paper or scissor:");
  return userInput;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("Its a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You Won!");
      humanScore++;
    } else {
      console.log("You lose!");
      computerScore++;
    }
  }

  const humanChoice1 = getHumanChoice();
  const computerChoice1 = getComputerChoice();
  playRound(humanChoice1, computerChoice1);

  const humanChoice2 = getHumanChoice();
  const computerChoice2 = getComputerChoice();
  playRound(humanChoice2, computerChoice2);

  const humanChoice3 = getHumanChoice();
  const computerChoice3 = getComputerChoice();
  playRound(humanChoice3, computerChoice3);

  const humanChoice4 = getHumanChoice();
  const computerChoice4 = getComputerChoice();
  playRound(humanChoice4, computerChoice4);

  const humanChoice5 = getHumanChoice();
  const computerChoice5 = getComputerChoice();
  playRound(humanChoice5, computerChoice5);

  // Final result
  console.log("Final Scores:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("😞 You lose the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

playGame();
