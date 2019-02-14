var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getcomputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()*3);
    console.log("Computer chose: " + choices[randomNum]);
    return choices[randomNum];
}

function win(userChoice, computerChoice){
    console.log("user wins");
    userScore++;
    console.log("User Score: " + userScore);
    console.log("Computer Score: " + computerScore);
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `Your ${userChoice} beat ${computerChoice}`;
    
}

function loose(userChoice, computerChoice){
    console.log("user loses");
    computerScore++;
    console.log("User Score: " + userScore);
    console.log("Computer Score: " + computerScore);
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${userChoice} lost to ${computerChoice}`;
}
function draw(){
    console.log("It is a draw");
    console.log("User Score: " + userScore);
    console.log("Computer Score: " + computerScore);
    result_p.innerHTML = `It is a draw!`;
}





function game(userChoice){
    var computerChoice = getcomputerChoice();
    console.log("you chose: "+userChoice)
    switch (userChoice+computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            // console.log("User wins");
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            // console.log("Computer wins");
            loose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            // console.log("It is a draw");
            draw();
            break;
    }

}


function main(){
rock_div.addEventListener("click", function(){
    game("rock");
});

paper_div.addEventListener("click", function(){
    game("paper");
});

scissors_div.addEventListener("click", function(){
    game("scissors");
});

}

main();