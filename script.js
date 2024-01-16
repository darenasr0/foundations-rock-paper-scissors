let playerScore=0;
let computerScore=0;



function getComputerChoice(){
    const items =["ROCK","PAPER","SCISSORS"];
    let a= Math.floor(Math.random()*3);
    return items[a];
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection===computerSelection){
        return "Tie!";
    }
    if(
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore +=1;
        return "You Win! "+playerSelection+ " beats "+computerSelection;
    }
    if(
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore +=1;
        return "You Lose! " +computerSelection+ " beats " +playerSelection;
    }
}

function game(){
    let playerSelection=prompt("Rock, Paper, Scissors??");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

function score(){
    return " Your Score: "+playerScore;
}

for (let round = 1; round <= 5; round++) {

    game();
    console.log(score());
    
}

if(playerScore==computerScore){
    
    console.log("You tied!"+ score());
}

if(playerScore>computerScore){
    
    console.log("You win!"+ score());
}

if(playerScore<computerScore){
    
    console.log("You lost!"+ score());
}

