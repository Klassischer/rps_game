//declare global variables for computer and human
let computerChoice = 0;
let humanChoice = 0;


let computerRock = 0;
let computerPaper = 0;
let computerScissors = 0;

function getComputerChoice() {
//create three variables for each outcome
//create a random number
    return Math.floor((Math.random() * 3)+1);

}
//check where the random number falls in the range of the three variables
//change that variable to 1
//return the variable that has a value of 1

computerChoice = getComputerChoice();  // Store the result of the function

if (computerChoice === 1) {
    computerRock = 1;
    console.log("The computer chose rock");
}
else if (computerChoice === 2) {
    computerPaper = 1;
    console.log("The computer chose paper");
}
else if (computerChoice === 3) {
    computerScissors = 1;
    console.log("The computer chose scissors");
}
else {
    console.log("Error, none of the outcomes were correct");
}

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
        console.log("Error, none of the outcomes were correct");
        return "error";
    }
    //write a prompt to get the human choice
    //check which choice the user made
    //assign it to one of the three variables
}

console.log(getHumanChoice());

