let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let str = ["rock", "paper", "scissors"];
    let a =  Math.floor(Math.random() * 3);
    console.log(str[a])
    return str[a];
}


function getHumanChoice(){
    let humanChoice = prompt("Enter a either Rock, Paper or Scissors")
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice)
    return humanChoice;
}

function playRound(humanChoice,computerChoice){
    if(humanScore >= 3){
        console.log("Human wins the round")
    }
    else if(computerScore >= 3){
        console.log("Computer wins the round")
    }
    else if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("Its a draw");
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer Wins");
        computerScore = computerScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human Wins");
        humanScore = humanScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("Its a draw");
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human Wins");
        humanScore = humanScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer wins");
        computerScore = computerScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Its a draw");
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human Wins");
        humanScore = humanScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer Wins");
        computerScore = computerScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    
}

function playGame(){
    for(let i =0; i<=7; i++){playRound(getHumanChoice(),getComputerChoice())};
}

playGame()
