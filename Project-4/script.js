let RandomNumber = parseInt(Math.random() * 100 + 1);

const Submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const PreviousGuesses = document.querySelector(".guesses");
const RemainingGuesses = document.querySelector(".lastResult");
const Message = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas")
const attempts = document.querySelector(".Attempts")

const paragraph = document.createElement('p');
let PreviousGuess = [];
let NumGuess = 1;
let TotalAttempts = 0;
let PlayGame = true;

if (PlayGame) {
    Submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(UserInput.value);
        ValidateGuess(guess);
    });
};

function ValidateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a valid Number!");
    } else if (guess > 100) {
        alert("Please enter a number below 100!")
    } else if (guess < 1) {
        alert("Please enter a number bigger than 1")
    } else {
        PreviousGuess.push(guess);
        TotalAttempts++;
        if (NumGuess === 10) {
            CleanUpGuess(guess);
            DisplayMessage(`Game Over! Random Number is ${RandomNumber}!`);
            EndGame();
        } else {
            CleanUpGuess(guess);
            CheckGuess(guess);
        }
    }
}

function CleanUpGuess(guess) {
    UserInput.value = '';
    PreviousGuesses.innerHTML += `${guess} `;
    RemainingGuesses.innerHTML = `${10 - NumGuess}`
    NumGuess++;
}

function DisplayMessage(message) {
    Message.innerHTML = `<h2>${message}</h2>`
}

function EndGame() {
    UserInput.value = '';
    UserInput.setAttribute('disabled', '');
    paragraph.classList.add('button');
    paragraph.innerHTML = `<button id = "NewGame" >Start New Game</button>`
    StartOver.appendChild(paragraph);
    PlayGame = false;
    TotalAttempts = 0;
    NewGame();
}

function NewGame() {
    const NewGameButton = document.querySelector("#NewGame");
    NewGameButton.addEventListener('click', function (event) {
        event.preventDefault();
        RandomNumber = parseInt(Math.random() * 100 + 1);
        PreviousGuess = [];
        NumGuess = 1;
        TotalAttempts = 0;
        PreviousGuesses.innerHTML = '';
        RemainingGuesses.innerHTML = `${10}`
        attempts.innerHTML = '';
        UserInput.removeAttribute('disabled');
        StartOver.removeChild(paragraph);
        Message.innerHTML = '';
        PlayGame = true;
    })
}

function CheckGuess(guess) {
    if (guess === RandomNumber) {
        DisplayMessage(`congratulations! you guessed it right`);
        YourTotalScore();
        EndGame();
    }
    else if (guess < RandomNumber) {
        DisplayMessage(`Your Guess is toooo low`);
    }
    else if (guess > RandomNumber) {
        DisplayMessage(`Your Guess is toooo high`);
    }
}

function YourTotalScore(){
    attempts.innerHTML = `<h2>Your score is : ${TotalAttempts} </h2>`
}
//validate gues
//check guess
//CleanUpGuess
//displaymessage
//newgame
//endgame