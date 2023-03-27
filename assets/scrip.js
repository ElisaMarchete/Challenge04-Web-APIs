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

// Add event listener to generate button
startQuizBtn.addEventListener("click", startGame);
// add event listener to move to the nextquestion
choiceBtn1.addEventListener("click", nextQuestion);
choiceBtn2.addEventListener("click", nextQuestion);
choiceBtn3.addEventListener("click", nextQuestion);
choiceBtn4.addEventListener("click", nextQuestion);



function startGame() {
createQuestion();
}


function nextQuestion(event) {

    let getResponse = getQuestion.correctAnswer;
   console.log({getResponse});
    let selectedChoice = event.target.textContent; //.value?
    // let stringResponse = JSON.stringify(getResponse);
    
    // check if the answer is correct
    if (selectedChoice == getResponse) {
    (console.log("correct"));
    } else {
    (console.log("wrong"));
    }


// move tp the next question
countQuestion++;

createQuestion();






}


// Display question, choices, and response
function createQuestion(){
    
    getQuestion = questions[countQuestion]; 
    questionParag.textContent = getQuestion.question;
    
    choiceBtn1.textContent = getQuestion.options[0]; 
    choiceBtn2.textContent = getQuestion.options[1]; 
    choiceBtn3.textContent = getQuestion.options[2]; 
    choiceBtn4.textContent = getQuestion.options[3]; 

   
  
}

// Array of questions, choices, and answers
let questions = [
    {
        question: "What does HTML stand for?",
        options: ["Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Hyper Text Multiple Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<line>", "<break>"],
        correctAnswer: "<br>"
    },
    {
        question: "What does CSS stand for?",
        options: ["colorful style sheets","cascading style sheets", "computer style sheets", "creative style sheets"],
        correctAnswer: "cascading style sheets"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>",  "<html>", "<script>", "<css>"],
        correctAnswer: "<style>"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<js>", "<script>", "<javascript>"],
        correctAnswer:  "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <footer> section", "The <head> section", "The <body> section", "Both the <head> section and the <body> section are correct"],
        correctAnswer: "The <body> section"    
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function ()"],
        correctAnswer: "function myFunction()"
    }
]


// Hide start screen
    