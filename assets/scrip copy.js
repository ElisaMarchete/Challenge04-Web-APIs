// Control the next question
let countQuestion = 0;
let getQuestion;

// Assignment Code
let startQuizBtn = document.querySelector(".startQuiz");
let questionParag = document.getElementById("questionParag");
let choiceBtn1 = document.getElementById("btn1");
let choiceBtn2 = document.getElementById("btn2");
let choiceBtn3 = document.getElementById("btn3");
let choiceBtn4 = document.getElementById("btn4");
let answerEl = document.getElementById("answer");
let containerEl = document.querySelector(".container");
let hideContentEl = document.getElementById("hideContent");
let initials = document.getElementById("initials");
let submitInitials = document.getElementById("submitInitials");
let savedInitScore = document.getElementById("savedInitScore");
let errorMsg = document.getElementById("errorMsg");
let timerElement = document.getElementById("timerCount");

// Add event listener to generate button
// startQuizBtn.addEventListener("click", startGame);
// Display hidden content
startQuizBtn.addEventListener("click", displayContent);
// Hide header
startQuizBtn.addEventListener("click", hideHeader);
// add event listener to move to the nextquestion
choiceBtn1.addEventListener("click", nextQuestion);
choiceBtn2.addEventListener("click", nextQuestion);
choiceBtn3.addEventListener("click", nextQuestion);
choiceBtn4.addEventListener("click", nextQuestion);

function startGame() {
  createQuestion();
  displayContent();
  hideHeader();
  startTimer();
}

function nextQuestion(event) {
  let getResponse = getQuestion.correctAnswer;
  let selectedChoice = event.target.textContent;

  // check if the answer is correct
  if (selectedChoice == getResponse) {
    answerEl.innerHTML = "Correct Answer!";
  } else {
    answerEl.innerHTML = "Incorrect Answer!";
  }

  // move tp the next question
  countQuestion++;

  // Call function to create a qustion when one option is selected
  createQuestion();
}

// Display question, choices, and response
function createQuestion() {
  getQuestion = questions[countQuestion];
  questionParag.textContent = getQuestion.question;

  choiceBtn1.textContent = getQuestion.options[0];
  choiceBtn2.textContent = getQuestion.options[1];
  choiceBtn3.textContent = getQuestion.options[2];
  choiceBtn4.textContent = getQuestion.options[3];
}

// Display hide questions
function displayContent() {
  if (containerEl.style.display === "none") {
    containerEl.style.display = "block";
  } else {
    containerEl.style.display = "none";
  }
}

// Hide header
function hideHeader() {
  if (hideContentEl.style.display === "block") {
    hideContentEl.style.display = "none";
  } else {
    hideContentEl.style.display = "block";
  }
}

submitInitials.addEventListener("click", function (event) {
  event.preventDefault();

  let userInitials = initials.value;
  localStorage.setItem("storeInitials", userInitials);

  let getInit = localStorage.getItem("storeInitials");
  savedInitScore.textContent = getInit;

  if (userInitials === "") {
    errorMsg.innerHTML = "ERROR! Cannot be blank";
  } else {
    errorMsg.innerHTML = "Registered successfully";
  }
});

function startTimer() {
  let timer = 60;
  let seconds;
  setInterval(function () {
    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerElement.textContent = "00:" + seconds;
    if (--timer < 0) {
      timer = 60;
    }
  }, 1000);

  
}


// DEDUCT INCORRECT ANSWER 10 SECONDS
// GET THE REMAINING TIME LEFT AS SCORE

// MERGE THE SCORE + INITIAL

// Array of questions, choices, and answers
let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<lb>", "<line>", "<break>"],
    correctAnswer: "<br>",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "colorful style sheets",
      "cascading style sheets",
      "computer style sheets",
      "creative style sheets",
    ],
    correctAnswer: "cascading style sheets",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<html>", "<script>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<scripting>", "<js>", "<script>", "<javascript>"],
    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <footer> section",
      "The <head> section",
      "The <body> section",
      "Both the <head> section and the <body> section are correct",
    ],
    correctAnswer: "The <body> section",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function ()",
    ],
    correctAnswer: "function myFunction()",
  },
];

// Hide start screen
