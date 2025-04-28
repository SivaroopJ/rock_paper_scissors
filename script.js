console.log("Hello World!");

function getComputerChoice() {
    let x=Math.floor(Math.random()*3);
    switch(x){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function getHumanChoice() {
    let y=prompt("Enter rock, paper or scissors.");
    return y;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice){
        console.log("It's a tie!");
    }
    if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    if(humanChoice=="scissors" && computerChoice=="rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}


function playGame() {
    for(let i=0;i<5;i++){
        const humanSelection =getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();