$(document).ready(function() {
    // Set global variables
    var imageFolder = "assets/images/"
    var reset = false;
    var winCount = 0;
    var lossCount = 0;
    var totalQuestions = 0;
    var questionsAnswered = 0;
    var questionDiv;
    var showTimer;
    var rightAnswer;
    var clockRunning = false;
    var time = 30;


    // Get the htm elements
    questionDiv = $("#questionDiv");
    resultDiv = $("#resultDiv");
    option1 = $("#option1");
    option2 = $("#option2");
    option3 = $("#option3");
    option4 = $("#option4");
    question = $("#question");

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

    // Get the total number of questions
    totalQuestions = questions.length;

    // Create and add event listeners for questions
    function initialiseQuestions() {
      // questionDiv.show();
      // resultDiv.hide();
        // $("#reset").hide();

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

        $('.options').on('click', function() {
          console.log("in");
          clearInterval(showTimer);
          console.log("out");
            var str1 = $(this).text();
            var str2 = questionDiv.attr("data-answer");
            if (str1 == str2) {
showResult(true);
            } else {
                showResult(false);
            }
        });
        clearInterval(showTimer);
        time = 30;
        showTimer =  setInterval(countDown, 1000);


    }
//initialiseQuestions(questions);

    // Reset function
    $("#reset").on("click", function() {
questionsAnswered = 0;
winCount = 0;
lossCount = 0;
        resetGame();
    });


    function showResult(result) {
      // questionDiv.hide();
      // resultDiv.show();
      // $("#reset").hide();
        // All the questions got answered
        if (questionsAnswered == questions.length) {
          clearInterval(showTimer);
            resultDiv.text("won" + winCount + "lost" + lossCount);
              $("#reset").text("Start Over").show();

        }
        // Game is still on

        else {
            if (result) {
                resultDiv.text("won");
                winCount++;

            } else {
                resultDiv.text("lost");
                lossCount++;

            }
            questionsAnswered++;
            setTimeout(initialiseQuestions, 5000);
        }
          console.log(result);

    }
    // Reset game
    function resetGame() {
            initialiseQuestions();
        }

    function countDown() {
      console.log(time);
        time--;
      if(time>=0){
        $("#timer").text(time);
      }
      else{
        //show right answer
        clearInterval(showTimer);
        showResult(false)
      }
    }
});
