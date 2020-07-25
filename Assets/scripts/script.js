// Assignment Code
var startBtn = document.querySelector("#start");
console.log("Javascript");

// Add event listener to the "Start the Quiz!" button 
startBtn.addEventListener("click", startQuiz);


// Select the elements
var questionContainerElement = document.getElementById ('questionContainer')
var introduction = document.querySelector("#Introduction");
var questionElement = document.getElementById('question')
var button = document.createElement('button')
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

// Create the variables
var timeCounter = 60;
var interval;
var currentQuestion = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var runningQuestion = 0;
var score = 0;

// This function initiates the quiz
function startQuiz () {

    // This is the function that will initiate the timer once the Start the Quiz option is clicked
    setInterval( function(){
        timeCounter--;
        if( timeCounter >= 0 ){
            id = document.getElementById("counter");
            id.innerHTML = timeCounter;
        } 
    },1000);

    console.log("Started")
    startBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    introduction.classList.add('hide')
    displayQuestion();
};

// Function to display a question
function displayQuestion () {
    questionElement.innerText = questions[currentQuestion].question
    let q = questions[runningQuestion];
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


// Check Answer 



