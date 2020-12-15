
//the cast from the show 
const employees = ['michael scott', 'dwight schrute', 'jim halpert', 'pam beesly', 'ryan', 'andy', 'jan', 'stanley', 'kevin', 'meredith', 'angela', 'oscar', 'phyllis', 'toby', 'creed', ];

var alphabet = ['q','w', 'e', 'r', 't', 'y', 'u','i','o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']


let wins =  0;
let wrongGuessRemaining = 15; 
const playerWins = document.querySelector('.wins');
const currentWord = document.querySelector('.rightWordUnderscore'); 
const remainingGuesses = document.querySelector('.wrongGuessRemaining');
const wrongLetters = document.querySelector('.wrongLetters'); 
const restartGameBtn = document.querySelector('.restartBtn'); 

//Randomly select the word
let chosenWord;
let underScoreWord
let guessedLetter;

startGame(); 
//init the game 
function startGame() {
    wins =  0;
    wrongGuessRemaining = 15; 
    guessedLetter = [];
}


/* used to generate a new word with underscores */
function newWord() {
    chosenWord = employees[Math.floor(Math.random() * employees.length)];
    console.log(chosenWord);

    underScoreWord = [];

    for(i = 0; i < chosenWord.length; i++) {
        underScoreWord[i] = "_";
    }
    console.log(underScoreWord);
    guessedLetters = [];
   
}


/* this is used to update the page */
function updatePage() {
    playerWins.innerHTML = wins; 
    currentWord.innerHTML = underScoreWord.join(" ");
    remainingGuesses.innerHTML = wrongGuessRemaining;
    wrongLetters.innerHTML = guessedLetter;

}

newWord();
updatePage();

//function to restart the game, 
function restartGame() {
    wins =  0;
    wrongGuessRemaining = 15; 
    guessedLetter = [];
    newWord();
    
};

//listener to click the restart button 
restartGameBtn.addEventListener('click', function() {
   restartGame();
   updatePage();
});


//user selects a letter key for guess
document.addEventListener('keyup', function(event) {
    const userGuess = event.key.toLowerCase();
    
    
    //need to know if the keypress is even a letter?
    if(userGuess == /^[A-Za-z]/) {
        console.log("that aint it! ");
       
     }
   

    let validGuess = false;
    for(i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i] === userGuess) {
          validGuess = true;
          underScoreWord[i] = userGuess;

        }
    }

    //calculates the wins of the player
    if(underScoreWord.join('') === chosenWord) {
      213
        wins++;
        alert('You Win!!');
        newWord();
    }

    //decrement the remaining guesses if you choose a wrong key 
    if(validGuess === false) {
         wrongGuessRemaining--;
        guessedLetter += userGuess;
    } 

    //restart the game if the remaining guesses hit 0!
    if(wrongGuessRemaining === 0) {
        alert('You Lose ');
        restartGame();
    }



    updatePage();
});



