let randomNumber = parseInt(Math.random()*100 +1)
// console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Enter a valid Number');
    }else if (guess < 1){
        alert('Enter a Number more than One');
    }else if (guess > 100){
        alert('Enter a Number less than Hundred');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMessage(`Game over.Random number is : ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage("Your guess is correct");
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Your guess is Too low');
    }else if(guess > randomNumber){
        displayMessage('Your guess is Too High');
    }
}

function displayGuess(guess) {
   userInput.innerHTML = ''
    guessSlot.innerHTML += `${guess},` ;
    numGuess++;
    guessRemaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowHi.innerHTML = `<h3>${message}</h3>`    
}

function endGame (){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame">Start a new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random()*100 +1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  guessRemaining.innerHTML = `${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);


  playGame = true;
  });
}