//Global Variables

//=================================================================
//Create an array of words 
var carMakes = ["bmw", "mercedes", "bugatti", "audi" , "lamborgini", "porsche"];
//creating variable to hold the of wins, and the number of guesses remaining.
var wins = 0;
var wrongGuessRemaining = 15;
var docWins = document.getElementById("wins")
var docUnderScore = document.getElementById("rightWordUnderscore");
var docWrongGuess = document.getElementById("wrongGuessRemaining");
var docWrongLetters = document.getElementById("wrongLetters");

//randomly chooses a carmake.
var chosenWord;
var underscoreWord;
var guessedLetters;

function newWord() {
	chosenWord = carMakes[Math.floor(Math.random() * carMakes.length)];
	console.log(chosenWord);
	underscoreWord = [];
	for(i=0; i < chosenWord.length; i++) {
		underscoreWord[i] = "_";
	}
	console.log(underscoreWord);
	guessedLetters = [];
}

function updatePage () {
	docWins.textContent = wins;
	docUnderScore.textContent = underscoreWord.join(" ");
	docWrongGuess.textContent = wrongGuessRemaining;
	docWrongLetters.textContent = guessedLetters.join(" ");

	/// ...update the page
}

newWord();
updatePage();

console.log(underscoreWord);
console.log(docUnderScore);
//User makes a letter choice/ cature letter choice 
document.onkeyup = function (event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	var validGuess = false;
	for(i=0; i < chosenWord.length; i++) {
		if(chosenWord.charAt(i) === userGuess) {
			validGuess = true;
			underscoreWord[i] = userGuess;
		}

	}

	if(underscoreWord.join('') === chosenWord) {
		wins ++;
		alert("You Win!"); newWord();
		console.log(chosenWord);
		}

// display and decrease remaining guesses
	if(validGuess === false) {
		docwrongGuess = wrongGuessRemaining --;
		guessedLetters[guessedLetters.length] = userGuess;
		console.log(guessedLetters);


		// ((docwrongGuess = wrongGuessRemaining --) && (userGuess);
	}

	updatePage();
}										





//Dom manipulation


// var generateUnderscore = () => {
	// for(var i = 0; i < carMakes.length; i++) {
	// 	underScore.push("_ ");
	// 	}
	

	
//make underscores to match the number of letters in array

// store and display wrong guess letters in the wrongletterstored


//if letter entered macthces a letter in array, push letter to underscore. 
// if the letter selected does not match letter in array psuh to wrong guesses.
		




// document.querySelector(".wrongWordStored #wrongWordStored").textContent= userGuess;
// }
//creating variable to hold the of wins, and the number of guesses remaining.
// for (var i = 0; i < carMakes.length; i++) {
// 	Things[i]
// }
//Create underscore based of lenght of word
//replace underScore with right letter 
//Check if guess is right
//if right push to right array
//if wrong push to wrong array
//document.onkeyup = function(event) {
//event.key
// }
//need to know if the keypress is even a letter?
//var alphabet = ['a' , 'b', 'c']
//alphabet.includes(...)
// 4 loop
// for(var i = 0; <alphabet.length; i++){
// 	if (guess === alphabet[i]) {
// 		return false;
// 	}
// }