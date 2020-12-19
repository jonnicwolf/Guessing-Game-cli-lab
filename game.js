const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  //prompt user to play or not
  //if yes call gameLoop()
  //else call quitGame()
  console.log('Welcome let\'s play!')
  let ans = rls.keyInYN('Ready to begin?')
  if(ans === true){
    console.log("Let's start!")
    gameLoop()
  } else {
    console.log('Have a nice life!')
    quitGame()
  }
}

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log('Goodbye!')
  process.exit()
}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = () => {
  console.log('I have a number in mind')
  console.log('It\'s between 1 and 1000')
  console.log('You have 10 guesses')
  fooNum ()
  let guess = rls.question('Guess from 1 to 1000! \n')
  if (guess === fooNum())
  { console.log('Congrats! You got it right!')
    gameLoop()
  }
   else if ((guess * 10) > fooNum()) {
    console.log('Your guess is too high!')
    while (guess !== fooNum()){
      console.log(' lives to live! Use them well kitty kat')
      guessLoop()
    }//end of while

  }//end of fooNum()
   else {
    console.log('Your guess is too low!')
    
  }
    //I'm not really sure what to do now.
    
  } 




/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = (min, max) => {
  min = 0
  max = 1000
  return Math.round(Math.random()*(max - min) + min)
}
 fooNum = (min, max) => {
  min = 1
  max = 1000
  return Math.round(Math.random()*(max-min) + min)
}
function heartPt() {
  let heart 
  if ()
}


startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}