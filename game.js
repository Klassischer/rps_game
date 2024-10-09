//declare global variables for computer and human
let computerChoice = 0;
let humanChoice = 0;

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
//create three variables for each outcome
//create a random number
    let randomNumber = Math.floor((Math.random() * 3)+1);

    if (randomNumber === 1) {
        computerChoice = 1;
        console.log("The computer chose rock");
    }
    else if (randomNumber === 2) {
        computerChoice = 2;
        console.log("The computer chose paper");
    }
    else if (randomNumber === 3) {
        computerChoice = 3;
        console.log("The computer chose scissors");
    }
    else {
        console.log("Error, none of the outcomes were correct");
    }
    return computerChoice;
}
//check where the random number falls in the range of the three variables
//change that variable to 1
//return the variable that has a value of 1



function getHumanChoice() {
    let humanChoiceWord = prompt("Please enter your choice of rock, paper or scissors. Only correct spelling will be used");
    if (humanChoiceWord.toLowerCase() === "rock") {
        humanChoice = 1;
        console.log("You chose rock");
    } else if (humanChoiceWord.toLowerCase() === "paper") {
        humanChoice = 2;
        console.log("You chose paper");
    } else if (humanChoiceWord.toLowerCase() === "scissors") {
        humanChoice = 3;
        console.log("You chose scissors");
    } else {
        console.log("Error, the choice was not valid");
        return "error";
    }
    return humanChoice;
    //write a prompt to get the human choice
    //check which choice the user made
    //assign it to one of the three variables
}








//write a function to play 5 rounds
//ensure that playRound function is declared inside of playGame
//play five rounds by calling playGame 5 times

function playGame() {

    for (let i = 0; i < 5; i++) {

        function playRound(humanChoice, computerChoice) {
            console.log("The computer chose " + computerChoice);
            console.log("You chose " + humanChoice);
           // check if the human choice is the same as the computer choice
            if (humanChoice === computerChoice) {
                console.log("It's a tie, please play again");
            }
            else if (humanChoice === 1 && computerChoice === 3 || humanChoice === 2 && computerChoice === 1 || humanChoice === 3 && computerChoice === 2) {
                humanScore++;
                console.log("You won");
                console.log("The score is you:" + humanScore + " vs computer:" + computerScore);
            } 
            else if (humanChoice === 1 && computerChoice === 2 || humanChoice === 2 && computerChoice === 3 || humanChoice === 3 && computerChoice === 1) {
                computerScore++;
                console.log("The computer won");
                console.log("The score is you:" + humanScore + " vs computer:" + computerScore);
            }
        }
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    
    }
    console.log("Game over, thank you for playing.");
}

playGame();