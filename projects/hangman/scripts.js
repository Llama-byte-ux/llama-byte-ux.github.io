// Initalizing the game
let gameActive = true;
let guessWord = '';
let incorrectCount = 0;
const gameMessage = document.getElementById('gameMessage');
gameMessage.innerText = "Hangman!"
// Choosing a random word from words.txt
function hangmanWord(newGuessWord) {
    return fetch('words.txt')
    .then(response => response.text())
    .then(data => {
        // Split the content by new lines
        const words = data.split('\n').map(word => word.trim());
        // Choose the new word randomly
        guessWord = words[Math.floor(Math.random() * words.length)]
        if (guessWord == '') {
            while(guessWord == '') {
                guessWord = words[Math.floor(Math.random() * words.length)]
            }
        }
        return guessWord;
    })

    // Check for any errors
    .catch(error => console.error('Error fetching the new file:', error));
}
// User clicks a button to guess the letters in the word
    //Check which button was clicked

 // Display word count with underscores in top-box
hangmanWord().then(guessWord => {
    const topBox = document.getElementById('word-box');
    for (var i = 0; i < guessWord.length; i++) {
        topBox.innerText += `_`;
    }
    // Convert the correct word into an array
    let correctGuess = Array.from(guessWord)
    let userGuess = new Array(guessWord.length)
    userGuess.fill('_');

    // Add an event listener to the buttons and
    document.addEventListener('click', (btnClick) => {
        let clicked = btnClick.target;
        if(clicked.tagName == "BUTTON" && clicked.id != "resetButton"){
            result = `${clicked.innerText}`;
            // Remove the letter that was clicked on
            clicked.style.display = "none"
            let check = checkGuess(guessWord, result, incorrectCount);
            if(check != null) {
                updateUI(check, correctGuess, userGuess);
            }
            else if(incorrectCount == 6) {
                console.log("Loser");
                topBox.innerText = guessWord.toUpperCase();
                document.getElementById('bottom-box').style.display = 'none';
                gameMessage.innerText = "You lose! :("
            }
            else {
                const img = document.getElementById('image');
                incorrectCount = incorrectCount + 1;
                const images = [
                    'images/hangman2.png',
                    'images/hangman3.png',
                    'images/hangman4.png',
                    'images/hangman5.png',
                    'images/hangman6.png',
                    'images/hangman7.png',
                    'images/hangman8.png'
                ];
                img.src = images[incorrectCount];
                console.log(incorrectCount);
                gameMessage.innerText = "Wrong!"
            }
        }
        else if(clicked.tagName == "BUTTON" && clicked.id == "resetButton"){
            console.log("Fucking Nerd")
            resetGame();

        }
    });
});

//Check to see if that is one of the characters in the word
function checkGuess(x, y) {
    var length = x.length
    for (let i = 0; i < length; i++){
        if(x[i].toLowerCase() == y.toLowerCase()){
            return y;
        }
    }
    return;
}




// Update UI based on user input
function updateUI(correctChar, correctGuess, correctUser){
    const topBox = document.getElementById('word-box');
    length = correctGuess.length;
    for (let i = 0; i < length; i++){
        // If correct mark that letter as selected and trigger the UI update
        if (correctGuess[i].toLowerCase() == correctChar.toLowerCase()) {
            correctUser[i] = correctChar;
            console.log(correctUser);
            topBox.innerText = correctUser.join('');
            gameMessage.innerText = "Correct!"
            winCheck(correctUser, correctGuess)
        }

    }
    console.log(correctUser);

}

// Check to see if the user has won or lost the game
function winCheck(correctUser, correctGuess){
    let correctCount = 0;
    for(let i = 0; i < correctGuess.length; i++){
        if(correctGuess[i].toLowerCase() == correctUser[i].toLowerCase()) {
            correctCount++;
        }
    }
    if(correctCount == correctGuess.length){
        console.log("Winner!");
        gameMessage.innerText = "Winner!"
        document.getElementById('bottom-box').style.display = 'none';
        return;
    }
    console.log("Not Yet");
    return;
}

// Reset game
function resetGame()
{
    location.reload();
}
