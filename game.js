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
}
//check where the random number falls in the range of the three variables
//change that variable to 1
//return the variable that has a value of 1

console.log(getComputerChoice());


function getHumanChoice() {
    let humanChoiceWord = prompt("Please enter your choice of rock, paper or scissors. Only correct spelling will be used");
    if (humanChoiceWord.toLowerCase() === "rock") {
        humanChoice = 1;
        console.log("You chose rock");
        return "rock";
    } else if (humanChoiceWord.toLowerCase() === "paper") {
        humanChoice = 2;
        console.log("You chose paper");
        return "paper";
    } else if (humanChoiceWord.toLowerCase() === "scissors") {
        humanChoice = 3;
        console.log("You chose scissors");
        return "scissors";
    } else {
        console.log("Error, the choice was not valid");
        return "error";
    }
    //write a prompt to get the human choice
    //check which choice the user made
    //assign it to one of the three variables
}

console.log(getHumanChoice());

//write the logic to play a single round
//use choice paramters as arguments for the functions
//make human input case insensitive
//display a message after the round declaring who won
//increment the score for the winner

function playRound(humanChoice, computerChoice) {
    console.log("The computer chose " + computerChoice);
    console.log("You chose " + humanChoice);
   // check if the human choice is the same as the computer choice
    if (humanChoice === computerChoice) {
        console.log("It's a tie, please play again");
    }
    //check if the human choice is rock and the computer choice is scissors or
    //check if the human choice is paper and the computer choice is rock or
    //check if the human choice is scissors and the computer choice is paper
    //increment the human score
    //display a message declaring who won and the current scores


    //check if the human choice is rock and the computer choice is paper
    //check if the human choice is paper and the computer choice is scissors
    //check if the human choice is scissors and the computer choice is rock
    //increment the computer score
    //display a message declaring who won and the current scores
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);