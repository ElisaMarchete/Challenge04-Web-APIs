// Control the next question
let countQuestion = 0
let getQuestion
let time
let timeInterval
let timerEl
let nameScore
let score

// Assignment Code
let startQuizBtn = document.querySelector('.startQuiz')
let questionParag = document.getElementById('questionParag')
let choiceBtn1 = document.getElementById('btn1')
let choiceBtn2 = document.getElementById('btn2')
let choiceBtn3 = document.getElementById('btn3')
let choiceBtn4 = document.getElementById('btn4')
let answerEl = document.getElementById('answer')
let containerEl = document.querySelector('.container')
let hideContentEl = document.getElementById('hideContent')
let initials = document.getElementById('initials')
let submitInitials = document.getElementById('submitInitials')
let savedInitScore = document.getElementById('savedInitScore')
let errorMsg = document.getElementById('errorMsg')
let timerElement = document.getElementById('timerCount')
let doneMsg = document.querySelector('.storeInfo')
let timeParag = document.getElementById('timeParag')
let scoreStorage = document.getElementById('score')
let highScores = document.querySelector('.savedInfo')
let btnGoBack = document.getElementById('btnGoBack')
let btnClear = document.getElementById('btnClear')
let savedInfo = document.querySelector('.savedInfo')

// Add event listener to generate button
startQuizBtn.addEventListener('click', startGame)

// add event listener to move to the nextquestion
choiceBtn1.addEventListener('click', nextQuestion)
choiceBtn2.addEventListener('click', nextQuestion)
choiceBtn3.addEventListener('click', nextQuestion)
choiceBtn4.addEventListener('click', nextQuestion)
// Get player name
submitInitials.addEventListener('click', initialsInput)

btnGoBack.addEventListener('click', initialScreen)

btnClear.addEventListener('click', clearLocalStorage)

function initialScreen() {
  hideContentEl.style.display = 'block'
  containerEl.style.display = 'none'
  savedInfo.style.display = 'none'
  savedInitScore.style.display = 'block'

  savedInitScore.innerHTML = ''
}
function startGame() {
  countQuestion = 0
  time = 90
  timerElement.style.display = 'block'

  timeInterval = setInterval(timer, 1000)
  createQuestion()
  displayContent()
  hideHeader()
}

function timer() {
  time = time - 1
  timerEl = timerElement.textContent = time
  if (time <= 0) {
    clearInterval(timeInterval)
  }
}

function nextQuestion(event) {
  let getResponse = getQuestion.correctAnswer
  let selectedChoice = event.target.textContent

  // check if the answer is correct
  if (selectedChoice == getResponse) {
    answerEl.innerHTML = 'Correct Answer!'
  } else {
    answerEl.innerHTML = 'Incorrect Answer!'
    time = time - 10
  }

  // move tp the next question
  countQuestion++

  if (countQuestion >= 7) {
    clearInterval(timeInterval)
    doneMsg.style.display = 'block'
    timerElement.style.display = 'none'
    timeParag.style.display = 'none'
    answerEl.style.display = 'none'

    score = scoreStorage.textContent = time
  }

  // Call function to create a qustion when one option is selected
  createQuestion()
}

// Display question, choices, and response
function createQuestion() {
  getQuestion = questions[countQuestion]
  questionParag.textContent = getQuestion.question;

  choiceBtn1.textContent = getQuestion.options[0]
  choiceBtn2.textContent = getQuestion.options[1]
  choiceBtn3.textContent = getQuestion.options[2]
  choiceBtn4.textContent = getQuestion.options[3]
}

// Display hide questions
function displayContent() {
  if (containerEl.style.display == 'none') {
    containerEl.style.display = 'block'
  } else {
    containerEl.style.display = 'none'
  }
}

// Hide header
function hideHeader() {
  if (hideContentEl.style.display === 'block') {
    hideContentEl.style.display = 'none'
  } else {
    hideContentEl.style.display = 'block'
  }
}

function initialsInput(event) {
  event.preventDefault()
  let userInitials = initials.value;

  let storeResult = JSON.parse(localStorage.getItem('store'))
  let finalScore = `${userInitials} ${time}`
  if (!storeResult) {
    storeResult = [finalScore]
  } else {
    storeResult.push(finalScore)
  }

  let saveResult = JSON.stringify(storeResult)
  localStorage.setItem('store', saveResult)

  clearInterval(timeInterval)

  // let getInit = localStorage.getItem("storeInitials");
  for (let i = 0; i < storeResult.length; i++) {
    savedInitScore.innerHTML += `<li>${storeResult[i]}</li>`
  }
  highScores.style.display = 'block'
  doneMsg.style.display = 'none'
}

function clearLocalStorage() {
  let clear = localStorage.removeItem('store')
  if (!clear) {
    savedInitScore.style.display = 'none'
  }
}

// Array of questions, choices, and answers
let questions = [
  {
    question: 'What does HTML stand for?',
    options: [
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
    ],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'What is the correct HTML element for inserting a line break?',
    options: ['<br>', '<lb>', '<line>', '<break>'],
    correctAnswer: '<br>',
  },
  {
    question: 'What does CSS stand for?',
    options: [
      'colorful style sheets',
      'cascading style sheets',
      'computer style sheets',
      'creative style sheets',
    ],
    correctAnswer: 'cascading style sheets',
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    options: ['<style>', '<html>', '<script>', '<css>'],
    correctAnswer: '<style>',
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    options: ['<scripting>', '<js>', '<script>', '<javascript>'],
    correctAnswer: '<script>',
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    options: [
      'The <footer> section',
      'The <head> section',
      'The <body> section',
      'Both the <head> <body> section',
    ],
    correctAnswer: 'The <body> section',
  },
  {
    question: 'How do you create a function in JavaScript?',
    options: [
      'function = myFunction()',
      'function myFunction()',
      'function:myFunction()',
      'function ()',
    ],
    correctAnswer: 'function myFunction()',
  },
]
