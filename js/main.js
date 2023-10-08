/* Syntax of Switch Statements:
switch (expression OR value) {
    case choice1:
        //run this code
        break;
    
    case choice2:
        //run this different code
        break;

    case choice3:
        //run another different code
        break;
    
        // add as many cases as needed

    default:
        //this code runs if no other case matches; notice: no "break;" here
}*/

console.log("Rock, Paper, Scissors Evaluation");

const options = ["rock", "paper", "scissors"];
let optionA = options[Math.floor(Math.random() * options.length)];
let optionB = options[Math.floor(Math.random() * options.length)];

let playerOne = optionA;
let computer = optionB;

switch (playerOne) { 
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("Computer wins!"); 
        } else {
            console.log("Player wins!");
        }
        break;
    case "paper":
        if (computer === "scissors"){
            console.log("Computer wins!"); 
        } else {
            console.log("Player wins!");
        }
        break;  
    default:
        if (computer === "rock"){
            console.log("Computer wins!"); 
        } else {
            console.log("Player wins!");
        }
}