const playerScoreSpan = document.getElementById("player_score_span")
const computerScoreSpan = document.getElementById("computer_score_span")
const roundCountSpan = document.getElementById("round_count_span")
const message = document.getElementById("message")
const rockBtn = document.getElementById("rock_btn")
const paperBtn = document.getElementById("paper_btn")
const scissorsBtn = document.getElementById("scissors_btn")
const resetGameBtn = document.getElementById("reset_game_btn")
const resetButtonWrapper = document.querySelector(".reset_button_wrapper")
const choiceButtonsWrapper = document.querySelector(".choice_buttons_wrapper")

let playerScore = 0
let computerScore = 0
let roundCount = 0

const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        message.innerText = "It's a tie!";
    } else if ((playerChoice === "rock") && (computerChoice === "scissors") || 
        (playerChoice === "paper") && (computerChoice === "rock")  ||
        (playerChoice === "scissors") && (computerChoice === "paper")) {
        playerScore++
        playerScoreSpan.innerText = `${playerScore}`
        message.innerText = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreSpan.innerText = `${computerScore}`;
        message.innerText = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

const playGame = (playerChoice) => {
    let playerSelection = playerChoice
    let computerSelection = getComputerChoice()
    roundCount++
    roundCountSpan.innerText = `${roundCount}`
    if(roundCount <= 4) {
        playRound(playerSelection, computerSelection)
    } else {
        (playerScore > computerScore) ? message.innerText = "Player has won the game!"
        : (computerScore > playerScore) ? message.innerText = "Computer has won the game!"
        : message.innerText = "No one wins a draw game!"
        
        choiceButtonsWrapper.classList.add("hidden")
        resetButtonWrapper.classList.remove("hidden")
    }
}

const resetGame = () => {
    playerScore = 0
    computerScore = 0
    roundCount = 0
    playerScoreSpan.innerText = playerScore
    computerScoreSpan.innerText = computerScore
    roundCountSpan.innerText = roundCount
    message.innerHTML = ""
    choiceButtonsWrapper.classList.remove("hidden")
    resetButtonWrapper.classList.add("hidden")
}


rockBtn.addEventListener("click", () => {
    playGame("rock")
})
paperBtn.addEventListener("click", () => {
    playGame("paper")
})

scissorsBtn.addEventListener("click", () => {
    playGame("scissors")
})

resetGameBtn.addEventListener("click", resetGame)