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
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore + 1;
        console.log("The score of computer is " + computerScore);
        console.log("The score of human is " + humanScore);
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore = humanScore + 1;
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
    console.log(target.textContent)
    playRound(target.textContent,getComputerChoice())
    if(computerScore > 2 || humanScore > 2){
            if(humanScore > computerScore){
                console.log("Human Wins The round");
            }
            else if(humanScore < computerScore){
                console.log("Computer wins the round")
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
