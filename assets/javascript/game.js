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
            question: "In Aladdin, what is the name of Jasmine's pet tiger?",
            choices: ["Rajah", "Bo", "Iago", "Jack"],
            images: ["../images/Rajah.gif"],
            answer: "Rajah"
        }, {
            question: "In Peter Pan, Captain Hook had a hook on which part of his     body?",
            choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
            answer: "Left Hand"

        }, {
            question: "In the Lion King, where does Mufasa and his family live?",
            choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
            answer: "Pride Rock"

        }, {
            question: "In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
            choices: ["2 Dozen", "5 Dozen", "5000", "0"],
            answer: "5 Dozen"

        }, {
            question: "In Alice in Wonderland, what is the name of Alice’s kitten?",
            choices: ["Dinah", "Sammie", "Kat", "Luna"],
            answer: "Dinah"

        }, {
            question: "After being on earth, where did Hercules first meet his   father Zeus?",
            choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian   Fields"],
            answer: "In the Temple of Zeus"

        }, {
            question: "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
            choices: ["Yellow", "Blue", "Gold", "White"],
            answer: "Gold"

        }, {
            question: "In Bambi, what word does the owl use to describe falling in love?",
            choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
            answer: "Twitterpatted"

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
              correctDiv.hide();
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
