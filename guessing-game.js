function guessingGame() {
  // get random number (0-99)
  let num = Math.floor(Math.random() * 100);
  let guessCount = 0;
  let gameOver = false;
  return function (guess) {
    if (guess === num) {
      if (gameOver) {
        return "The game is over, you already won!";
      }
      gameOver = true;
      guessCount++;
      return `You win! You found ${num} in ${guessCount} guesses.`;
    } else if (guess < num) {
      guessCount++;
      return `${guess} is too low!`;
    } else {
      guessCount++;
      return `${guess} is too high!`;
    }
  };
}

module.exports = { guessingGame };
