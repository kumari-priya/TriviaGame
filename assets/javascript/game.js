$(document).ready(function() {
    // Set global variables
    var imageFolder = "assets/images/"
    var reset = false;
    var winCount = 0;
    var lossCount = 0;
    var noAnswer = 0;
    var totalQuestions = 0;
    var questionsAnswered = 0;
    var questionDiv;
    var showTimer;
    var rightAnswer;
    var clockRunning = false;
    var time = 30;


    // Get the htm elements
    var questionDiv = $("#questionDiv");
    var resultDiv = $("#resultDiv");
    var option1 = $("#option1");
    var option2 = $("#option2");
    var option3 = $("#option3");
    var option4 = $("#option4");
    var question = $("#question");
    var timerDiv = $("#timerDiv");
    var summary = $("#summary");
    var correctDiv = $("#correctDiv");
    var correct = $("#correct");
    var incorrect = $("#incorrect");
    var unanswered = $("#unanswered");
    var reset = $("#reset");
    var timer = $("#timer");
    var correctAnswer = $("#correct-answer");

    // Questions Array
    var questions = [{
            question: "What is the name of the high school in High School Musical",
            choices: ["East High School", "West High School", "North High School", "South High School"],
            answer: "East High School"
        }, {
            question: "Who said - If you keep on believing, the dream that you wish will come true.",
            choices: ["Belle", "Cinderella", "Elsa", "Moana"],
            answer: "Cinderella"

        }, {
            question: "Which Disney movie was the first to have a soundtrack album?",
            choices: ["Peter Pan", "Pirates of the Caribbean", "Snow White and the Seven Dwarfs", "Frozen"],
            answer: "Snow White and the Seven Dwarfs"

        }, {
            question: "What is the name of the young boy from Old Yeller?",
            choices: ["Peter", "Travis Coates", "Mike", "Goofy"],
            answer: "Travis Coates"

        }, {
            question: "How many Academy Awards for Best Original Songs has Disney won?",
            choices: ["20", "15", "12", "10"],
            answer: "12"

        }, {
            question: " What is the only Disney song to win a Grammy Award for Song of the Year?",
            choices: ["A Whole New World", "Happy Song", "Melody of Spirit", "Let it go"],
            answer: "A Whole New World"

        }, {
            question: "What is the name of Elsa's sister?",
            choices: ["Emma", "Anna", "Moana", "Rapenzul"],
            answer: "Anna"

        }, {
            question: "Which 1998 Disney film was Lindsay Lohan’s film debut?",
            choices: ["The Neighbour Trap", "The Brother Trap", "The Sister Trap", "The Parent Trap"],
            answer: "The Parent Trap"

        }, {
            question: "What is the name of the bunny officer in Zootopia?",
            choices: ["Pink", "Judy", "Luna", "Maya"],
            answer: "Judy"

        }, {
            question: "who is Simba's father in the Lion King",
            choices: ["Scar", "Nala", "Mufasa", "Pumbaa"],
            answer: "Mufasa"
        }

    ];

    // Hide all divs
    questionDiv.hide();
    resultDiv.hide();
    timerDiv.hide();
    summary.hide();
    correctDiv.hide();

    // Get the total number of questions
    totalQuestions = questions.length;

    // Create and add event listeners for questions
    function startGame() {
        questionDiv.show();
        timerDiv.show();
        resultDiv.hide();
        summary.hide();
        correctDiv.hide();
        reset.hide();

        var currentQuestion = questions[questionsAnswered];
        // Add question
        question.text(currentQuestion.question);
        // Add answere
        questionDiv.attr("data-answer", currentQuestion.answer);
        // Add options
        option1.text(currentQuestion.choices[0]);
        option2.text(currentQuestion.choices[1]);
        option3.text(currentQuestion.choices[2]);
        option4.text(currentQuestion.choices[3]);
        timer.text(30);
        clearInterval(showTimer);
        time = 30;
        showTimer = setInterval(countDown, 1000);
    }

    $(document).on("click", ".trivia", displayResult);

    function displayResult() {
        correctDiv.hide();
        clearInterval(showTimer);
        var str1 = $(this).text();
        var str2 = questionDiv.attr("data-answer");
        if (str1 == str2) {
            showResult("won");
        } else {
            showResult("lost");
        }
    }

    // Reset function
    $("#reset").on("click", function() {
        questionsAnswered = 0;
        winCount = 0;
        lossCount = 0;
        noAnswer = 0;
        resetGame();
    });

function gameOver(){
    correctDiv.hide();
  clearInterval(showTimer);
  resultDiv.text("All done, here is how you did! ");
  correct.text(winCount);
  incorrect.text(lossCount);
  unanswered.text(noAnswer);
  summary.show();
  reset.text("Start Over").show();
}

    function showResult(result) {
        console.log("In result" + questionsAnswered);
        questionDiv.hide();
        resultDiv.show();
        reset.hide();
        // All the questions got answered
        if (questionsAnswered == questions.length) {
gameOver();
        }
        // Game is still on
        else {
            if (result == "won") {
                resultDiv.text("Correct!");
                winCount++;

            } else if (result == "lost") {
                correctDiv.show();
                resultDiv.text("Wrong!");
                correctAnswer.text(questionDiv.attr("data-answer"));
                lossCount++;

            } else if (result == "no") {
                resultDiv.text("Out of Time!");
                noAnswer++;
            }
            questionsAnswered++;
            if (questionsAnswered == questions.length) {

              setTimeout(gameOver, 5000);
            }
            else{
              setTimeout(startGame, 5000);
            }
        }
        console.log(result);

    }
    // Reset game
    function resetGame() {
        summary.hide();
        startGame();
    }

    function countDown() {
        console.log(time);
        time--;
        if (time >= 0) {
            timer.text(time);
        } else {
            //show right answer
            clearInterval(showTimer);
            showResult("no")
        }
    }
});
