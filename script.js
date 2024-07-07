alert("welcome, this is a simple game of rock, paper, and scissors, this game has 5 rounds of play (The game will start in 5 seconds, please open devtools and see the console for results)")

let humanScore = 0
let computerScore = 0

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

const getHumanChoice = () => {
    let input;
    const choice = ["rock", "paper", "scissors"]
    while(true) {
        input = prompt('type one option "rock", "paper" or "scissors"');
        if (input != null && choice.includes(input.toLowerCase()) ) {
            return input;
        } else {
           alert('wrong input!, please type one option "rock", "paper" or "scissors"')
        }
    }
}

const playRound = (humanChoice, computerChoice) => {
    let lowerCaseHumanChoice = humanChoice.toLowerCase()
    if ((lowerCaseHumanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++
        return "You Win! Rock beats Scissors"
    } else if ((lowerCaseHumanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++
        return "You Win! Paper beats Rock"
    } else if ((lowerCaseHumanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++
        return "You Win! Scissors beats Paper"
    } else if ((lowerCaseHumanChoice === "scissors") && (computerChoice === "rock")) {
        computerScore++
        return "You Lose! Rock beats Scissors"
    } else if ((lowerCaseHumanChoice === "rock") && (computerChoice === "paper")) {
        computerScore++
        return "You Lose! Paper beats Rock"
    } else if ((lowerCaseHumanChoice === "paper") && (computerChoice === "scissors")) {
        computerScore++
        return "You Lose! Scissors beats Paper"
    } else {
        return "It's a tie!";
    }
}

const playGame = () => {
    setTimeout( function() {
    for(i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
        }
        console.log("human score" + " " + humanScore)
        console.log("computer score" + " " + computerScore)
    }, 5000)
}

playGame()