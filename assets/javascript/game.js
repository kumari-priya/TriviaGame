$(document).ready(function() {
    // Set global variables
    var imageFolder = "assets/images/"
    var reset = false;
    var winCount = 0;
    var lossCount = 0;
    var totalQuestions = 0;
    var questionsAnswered = 0;
    var questionDiv;
    var showQuestion;


    var questions = [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    choices: ["Rajah", "Bo", "Iago", "Jack" ],
    images:  ["../images/Rajah.gif"],
    answer: "Rajah"
    }, {
    question:"In Peter Pan, Captain Hook had a hook on which part of his     body?",
    choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    answer: "Left Hand"

    }, {
    question:"In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    answer: "Pride Rock"

    }, {
    question:"In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
    choices: ["2 Dozen", "5 Dozen", "5000", "0"],
    answer: "5 Dozen"

    }, {
    question:"In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    answer: "Dinah"

     }, {
    question:"After being on earth, where did Hercules first meet his   father Zeus?",
    choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian   Fields"],
    answer: "In the Temple of Zeus"

    }, {
    question:"During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
    choices: ["Yellow", "Blue", "Gold", "White"],
    answer: "Gold"

    }, {
    question:"In Bambi, what word does the owl use to describe falling in love?",
    choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
    answer: "Twitterpatted"

    }

    ];

    // Get the total number of questions
    totalQuestions =   questions.length;

    // Create and add event listeners for questions
    function initialiseQuestions(questionsArray) {

      // Create a variable named questionDiv
      questionDiv = $("#questionDiv");

      // Give each "playerBox" a class "player-box"
      questionDiv.addClass("player-box");

      // Add question
      var questionText = $("<h6>");
      questionText.text(questionsArray.question);
      questionDiv.append(questionText);

      // Add answere
questionDiv.data("answer",questionsArray.answer);
      // Add options
      for (var i = 0; i < questionsArray.choices.length; i++) {
    var optionsDiv = $("<div>");
    options.text(questionsArray.choices[i]);
    questionDiv.append(options);
    optionsDiv.on("click", function() {
if (optionsDiv.text == questionDiv.data("answer")) {
  winCount++;
}
else{
  lossCount++;
}
questionsAnswered++;
      });
      }
    }

    showQuestion = setInterval(initialiseQuestions(questions[0]),0, 20000);






    // Reset function
    $("#btnReset").on("click", function() {
        resetGame()

    });

function showResult(result){
  // All the questions got answered
  if(questionsAnswered==questions.length)
  {
    questionDiv.text = "won" + winCount + "lost" +lossCount;
      clearInterval(showQuestion);
  }
  // Game is still on
  else{
    if(result){
      questionDiv.text = "won";
    }
    else{
      questionDiv.text = "lost";
    }

  }
}


    // Reset game
    function resetGame() {
        if (reset) {
        showQuestion = setInterval(initialiseQuestions(questions[0]), 20000);
            // Set the reset flag
        reset = false;

        }
    }


});
