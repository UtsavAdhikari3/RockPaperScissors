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
    if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore = humanScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    
}

function playGame(){
    for(let i = 0; i<=10; i++){
        playRound(getHumanChoice(),getComputerChoice())
        if(computerScore > 2 || humanScore > 2){
                if(humanScore > computerScore){
                    console.log("Human Wins The round");
                }
                else if(humanScore < computerScore){
                    console.log("Computer wins the round")
                }
                break;
            }
        }
    };


playGame()
