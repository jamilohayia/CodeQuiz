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


var questions = [

    {
        question: "How many teams are in the NBA?",
        choiceA: "30",
        choiceB: "32",
        choiceC: "28",
        choiceD: "40",
        answer: 'choiceA',
    },
        
    {      
        question: "Who won the MVP during the 2018-2019 season?",
        choiceA: "James Harden",
        choiceB: "Lebron",
        choiceC: "Kawhi",
        choiceD: "Giannis",
        answer: 'choiceD',
    },

    {
        question: "What is the most amount of points scored in a single game by one player?",
        choiceA: "110",
        choiceB: "100",
        choiceC: "81",
        choiceD: "72",
        answer: 'choiceB',
    },

    {
        question: "What was the second NBA team that Lebron played for?",
        choiceA: "Cavaliers",
        choiceB: "Lakers",
        choiceC: "Heat",
        choiceD: "Knicks",
        answer: 'choiceC',      
    },

    {
        question: "Who was the most recent #1 overall pick?",
        choiceA: "Ben Simmons",
        choiceB: "Zion Williamson",
        choiceC: "Deandre Ayton",
        choiceD: "Karl-Anthony Towns",
        answer: 'choiceB',    
    },

];


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
    console.log (questions,"console log questions")
    questionElement.innerText = questions[currentQuestion].question
    let q = questions[runningQuestion];
    choiceA.innerHTML = q.choiceA;
   
 
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    score = 0;
}


// Loop through the array of questions 
// for (var i = 0; i < questions[currentQuestion].question)

// Check Answer 














function checkAnswer() {
    guess = parseInt($(this).attr("value"))
    let correct = questions[currentQuestion].answer;
    choiceA.addEventListener("click", function(){
        console.log("buttonA")
    })
    document.addEventListener("click", function(event){
        console.log("event",event.target);
if (guess === correct) {
        console.log(guess);
    } else {
        // Counter drops 5 seconds for every wrong answer
        counter = counter -= 5;
    }
    })

    


    

    // currentQuestion++;

}

// checkAnswer();
//     if (currentQuestion === questions.length) {
//         showResults();
//         // stopCounter(interval);

//     } else {
//         $("#btn-grid").hide();
//         setTimeout(showQuestion);
//     }
// }

