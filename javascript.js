let array = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return(array[(Math.floor(Math.random() * array.length))]);
}

const computerChoice = getComputerChoice();
const humanChoice = prompt('type your pick! Rock, Paper or Scissors?').toLowerCase();

console.log('Computer has picked ' + computerChoice);

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

const humanReturn = getHumanChoice();
console.log(humanReturn);

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return('It is a draw');
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        return('you loose! paper beats rock');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        return('you win! rock beats scissors');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        return('you loose! scissors beats paper');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        return('you win! paper beats rock');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        return('you loose! rock beats scissors');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        return('you win! scissors beats paper');
    }
}

 function gameScore () {
    console.log('Your Current Score: ' + humanScore);
    console.log('Computers Current Score: ' + computerScore);
 }


 console.log(playRound(humanChoice, computerChoice));
 gameScore();

