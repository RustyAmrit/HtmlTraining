const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userChoice;
let computerChoice;

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length +1);
    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissor';
            break;
        default:
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    switch (userChoice + computerChoice) {
        case 'scissorpaper':
        case 'rockscissor':
        case 'paperrock':
            resultDisplay.innerHTML = "You Win...!"
            break;
        case 'paperscissor':
        case 'scissorrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "You Lose...!"
            break;
        default:
            resultDisplay.innerHTML = "It's a Draw...!"
            break;
    }


}