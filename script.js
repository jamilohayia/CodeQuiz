// Variable Assignments
var counter = 60;
var interval;
var currentQuestion = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var guess;

// Quiz questions stored in an array 
var questions = [
    {
        title: "How many teams are in the NBA?",
        answers: ["30", "32", "28", "40"],
        correctAnswer: 0,
    },
    {
        title: "Who won the MVP during the 2018-2019 season?",
        answers: ["James Harden", "Lebron", "Kawhi", "Giannis"],
        correctAnswer: 3,
    },
    {
        title: "What is the most amount of points scored in a single game by one player?",
        answers: ["110", "100", "81", "72"],
        correctAnswer: 1,
    },
    {
        title: "What is the name of the second NBA Team that LeBron played for?",
        answers: ["Cavaliers", "Lakers", "Heat", "Knicks"],
        correctAnswer: 2,
    },
    {
        title: "Who was the most recent #1 overall pick?",
        answers: ["Ben Simmons", "Zion Williamson", "Deandre Ayton", "Ja Morant"],
        correctAnswer: 1,
    },
];

$(document).ready(function () {

    // Hide Final Score & High Scores sections when webpage is first loaded.
    $("#final-score").hide();
    $("#high-score").hide();

    // Timer Function, which kicks off when GO! is clicked and counts down from 60 (seconds).
    $("#start").click(function clock() {
        event.preventDefault();
        var interval = setInterval(function () {
            counter--;
            if (-1 >= counter) {
                console.log("Timer 0 --> " + counter);
                showResults();
                $("#score").text("0");
                return clearInterval(interval);
            } else {
                $('#time').text(counter);
                console.log("Timer --> " + counter);
            }
        }, 1000);
        $("#start").hide();
        $("#jumbotron").hide();
        $("#quiz").show();
        showQuestion();
    });


    function stopCounter() {
        var counter = 60;
        var interval = setInterval(function () {
            counter--;
            $('#time').text(counter);
            if (counter != undefined) {
                clearInterval(interval);
                counter = undefined;
            }
        }, 1000);
    }

    $(".answer").on("click", checkAnswer);

    // Function to display questions and answers.
    function showQuestion() {
        $("#quiz h2").text(questions[currentQuestion].title);
        $("#quiz .answerA").text(questions[currentQuestion].answers[0]);
        $("#quiz .answerB").text(questions[currentQuestion].answers[1]);
        $("#quiz .answerC").text(questions[currentQuestion].answers[2]);
        $("#quiz .answerD").text(questions[currentQuestion].answers[3])
        $("#box").show();
        $("#answer-status").hide();
        timer = 60;
        countDown = setInterval(counter, 1000);
        // console.log(questions[currentQuestion].answers);
    }

    // Function to check to see if user's input is correct or incorrect.
    function checkAnswer() {

        guess = parseInt($(this).attr("value"))
        let correct = questions[currentQuestion].correctAnswer;

        if (guess === correct) {
            console.log(guess);
        } else {
            // Counter drops 5 seconds for every wrong answer
            counter = counter -= 7;
        }

        currentQuestion++;

        if (currentQuestion === questions.length) {
            showResults();
            // stopCounter(interval);

        } else {
            $("#box").hide();
            setTimeout(showQuestion);
        }
    }

    // Function to show Score at game's end & allow User to enter their Name.
    function showResults() {
        // stopCounter(interval);
        $("#quiz").hide();
        $("#timer").hide();
        $("#score").append(counter);
        $("#final-score").show();
        $("#user-initials").show();
        $("#answer-status").hide();
    }

    // Click event to allow user to input their initials and show the Leaderboard 
    $(".submit-initials").click(function () {
        console.log("button clicked")
        // stopCounter(interval);
        event.preventDefault();
        event.stopPropagation();
        $("#high-score").show();
        $("#player-list").show();
        $("#menu").show();
        $("#final-score").hide();
        var initials = $("#user-input").val().trim();
        $("#player-list").text(initials);
        localStorage.setItem("userInitials", initials);
        // localStorage.getItem(initials);
    })

    // Click event to allow user to go back to the start of the game 
    $(".go-back").click(function () {
        // stopCounter(interval);
        event.preventDefault();
        event.stopPropagation();
        $("#jumbotron").show();
        $("#start").show();
        $("#timer").show();
        $("#high-score").hide();
        
    })

    // Click event to allow user to clear out the Leaderboard
    $(".clear-score").click(function () {
        event.preventDefault();
        event.stopPropagation();
        $("#player-list").text('');
    })

})