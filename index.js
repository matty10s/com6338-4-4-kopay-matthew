//Matthew Kopay COMM6338 Module 4 Assignment 4
//setup array of words

var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

//initialize variables
var wordToGuess = document.getElementById('word-to-guess')
var previousWord = document.getElementById('previous-word')
var incorrectLetters = document.getElementById('incorrect-letters')
var remainingGuesses = document.getElementById('remaining-guesses')
var answer = words[Math.floor(Math.random() * words.length)]
var wins = 0
var losses = 0
var wrongGuess = []
var goodGuess = []
var lives = 10   //set to 10 lives
var correct = false
var lastLetters = answer.length
var winElement = document.getElementById('wins')
var loseElement = document.getElementById('losses')


//remaining guesses
remainingGuesses.textContent = lives

var solution = answer.split('')

wordToGuess.textContent = ""


//for loop to check if letter guess is in the answer
for (i = 0; i < answer.length; i++){
  solution[i] = '_'
}

//Update the answer
var board = solution.join("")
console.log(answer)

wordToGuess.textContent = board
document.body.onkeyup = function(e){

  var key = e.key.toLowerCase()
  console.log(e.key)

  if (wrongGuess.includes(key) == false && goodGuess.includes(key) == false){

  for (i = 0; i < answer.length; i++){
    if (answer[i] == key){
      correct = true
      lastLetters--
      goodGuess.push(key)
      solution[i] = key

    }else{

    }
  }
  if (correct == true){
    board = solution.join("")
    wordToGuess.textContent = board
    if (lastLetters == 0){
      wins++
      winElement.textContent = wins
      previousWord.textContent = answer
      wordToGuess.textContent = ""
      answer = words[Math.floor(Math.random() * words.length)]
      solution = answer.split('')
      for (i = 0; i < answer.length; i++){
        wordToGuess.textContent = wordToGuess.textContent + "_"
        solution[i] = '_'
        }
        lives = 10
        remainingGuesses.textContent = lives
        board = solution.join("")
        console.log(answer)
        wordToGuess.textContent = board
        wrongGuess = []
        goodGuess = []
        lastLetters = answer.length
        incorrectLetters.textContent = ""
        }
    }else{
    lives--
    remainingGuesses.textContent = lives
    wrongGuess.push(key)
    incorrectLetters.textContent = wrongGuess
    if (lives == 0){
      losses++
      loseElement.textContent = losses
      previousWord.textContent = answer
      wordToGuess.textContent = ""
      answer = words[Math.floor(Math.random() * words.length)]
      solution = answer.split('')
      for (i = 0; i < answer.length; i++){
        wordToGuess.textContent = wordToGuess.textContent + "_"
        solution[i] = '_'
        }
        lives = 10
        remainingGuesses.textContent = lives
        board = solution.join("")
        console.log(answer)
        wordToGuess.textContent = board
        wrongGuess = []
        goodGuess = []
        lastLetters = answer.length
        incorrectLetters.textContent = ""
    }
    var correct = false
  }
}
}