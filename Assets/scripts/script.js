// Assignment Code
var startBtn = document.querySelector("#start");
console.log("Javascript");

// Add event listener to the "Start the Quiz!" button 
startBtn.addEventListener("click", startQuiz);

var questionContainerElement = document.getElementById ('question-container')
var introduction = document.querySelector("#Introduction");
var timeCounter = 60;
var interval;
var correctAnswers = 0;
var wrongAnswers = 0;
var questions = [

    {
        question: "How many teams are in the NBA?",
        options: ["30","32","28","40"],
        answer: 0,
    },
        
    {
        question: "Who won the MVP during the 2018-2019 season?",
        options: ["James Harden","LeBron","Kawhi","Giannis"],
        answer: 3,
    },

    {
        question: "What is the most amount of points scored in a single game by one player?",
        options: ["110","100","81","72"],
        answer: 1,
    },

    {
        question: "What was the second team that Lebron played for?",
        options: ["Cavaliers","Lakers","Heat","Knicks"],
        answer: 2,
    },

    {
        question: "Who was the most recent #1 overall pick?",
        options: ["Ben Simmons","Zion Williamson","Deandre Ayton","Karl-Anthony Towns"],
        answer: 1,
    },

]




// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// code will go here
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }



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


