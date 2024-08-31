let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let str = ["rock", "paper", "scissors"];
    let a =  Math.floor(Math.random() * 3);
    return str[a];
}


function getHumanChoice(){
    let humanChoice = prompt("Enter a either Rock, Paper or Scissors")
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice)
    return humanChoice;
}

function playRound(humanChoice,computerChoice){
    const result = document.querySelector(".result");
    if(humanChoice === "rock" && computerChoice === "rock"){
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore = humanScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore = humanScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        result.textContent = `the score of human is ${humanScore} and the score of computer is ${computerScore}`    
    }
    
}

const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

buttonRock.textContent = "rock";
buttonPaper.textContent = "paper";
buttonScissors.textContent = "scissors";

const buttonDiv = document.querySelector(".buttons");
buttonDiv.appendChild(buttonRock);
buttonDiv.appendChild(buttonPaper);
buttonDiv.appendChild(buttonScissors);


buttonDiv.addEventListener("click",(event)=>{
    let target = event.target;
    const announceResults = document.querySelector(".announceResults");
    if(humanScore < 5 && computerScore < 5){
        playRound(target.textContent,getComputerChoice());
        if(humanScore === 5 || computerScore === 5)
        if(humanScore > computerScore){
            announceResults.textContent = "Human wins the round";
        }
        else if(humanScore < computerScore){
            announceResults.textContent = "Computer wins the round";
        }
    }
    }
)

function playGame(){
    // for(let i = 0; i<=10; i++){
    //     playRound(getHumanChoice(),getComputerChoice())
    //     if(computerScore > 2 || humanScore > 2){
    //             if(humanScore > computerScore){
    //                 console.log("Human Wins The round");
    //             }
    //             else if(humanScore < computerScore){
    //                 console.log("Computer wins the round")
    //             }
    //             break;
    //         }
    //     }
    };


playGame()
