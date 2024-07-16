let array = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return(array[(Math.floor(Math.random() * array.length))]);
}


function getHumanChoice(humanChoice) {
    if (humanChoice === 'rock') {
        console.log('you have picked: rock');
    } else if (humanChoice === 'paper') {
        console.log('you have picked paper');
    } else if (humanChoice === 'scissors') {
        console.log('you have picked scissors');
    } else {
        console.log('Please choose from Rock, Paper or Scissors')
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound () {
    let humanChoice = prompt('type your pick! Rock, Paper or Scissors?').toLowerCase();
    getHumanChoice(humanChoice);
    let computerChoice = getComputerChoice();
    console.log('Computer has picked: ' + computerChoice);
    if (humanChoice === computerChoice) {
        console.log('It is a draw');
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log('you loose! paper beats rock');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log('you win! rock beats scissors');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        console.log('you loose! scissors beats paper');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log('you win! paper beats rock');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        console.log('you loose! rock beats scissors');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log('you win! scissors beats paper');
    }
}

 function gameScore () {
    console.log('Your Current Score is : ' + humanScore);
    console.log('Computers Current Score is : ' + computerScore);
 }


 function declareWinner () {
    if (humanScore > computerScore) {
        console.log('You have Won!!');
    } else if (humanScore < computerScore) {
        console.log('You have Lost!')
    } else {
        console.log('It is a draw!')
    }
 }

 function playGame () {
    let currentCount = 0
    let maxRounds = 5

    function play() {
        if (currentCount < maxRounds) {
            playRound();
            gameScore();
            currentCount++;
        } 
    }

    for (let i = 0; i < maxRounds; i++) {
        play();
    }
    declareWinner();
 }


 playGame();
