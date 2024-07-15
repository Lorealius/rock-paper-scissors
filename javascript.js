let array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return(array[(Math.floor(Math.random() * array.length))]);
}

console.log(getComputerChoice());

let humanChoice = prompt('type your pick! Rock, Paper or Scissors?').toLowerCase();

function getHumanChoice() {
    if (humanChoice === 'rock') {
        return ('you have picked rock');
    } else if (humanChoice === 'paper') {
        return ('you have picked paper');
    } else if (humanChoice === 'scissors') {
        return ('you have picked scissors');
    } else {
        console.log('Please choose from Rock, Paper or Scissors')
    }
}

 console.log(getHumanChoice()); 

