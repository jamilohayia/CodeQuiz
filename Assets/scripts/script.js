// Assignment Code
var startBtn = document.querySelector("#start");
console.log("Javascript");

// Add event listener to the "Start the Quiz!" button 
startBtn.addEventListener("click", startQuiz);

var questionContainerElement = document.getElementById ('questionContainer')
var introduction = document.querySelector("#Introduction");
var timeCounter = 60;
var interval;
var currentQuestion = 0;
var correctAnswers = 0;
var wrongAnswers = 0;



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

}

function displayQuestion () {
    $("#question").text("test");

    // use a loop 
}

displayQuestion();
