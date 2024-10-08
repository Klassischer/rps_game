console.log("Hello World");
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

let computerChoice = getComputerChoice();  // Store the result of the function

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
