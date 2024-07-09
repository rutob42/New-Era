let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        message.textContent = 'Please enter a valid number';
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again';
    } else {
        message.textContent = 'Too high! Try again.';
    }
}
