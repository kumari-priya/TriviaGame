$(document).ready(function() {
    // Set global variables
    var imageFolder = "assets/images/"
    var reset = false;
    var winCount = 0;
    var lossCount = 0;
    var totalQuestions = 0;
    var questionsAnswered = 0;

    var questionDiv = $("#message");
    var resultDiv = $("#btnReset");

    resultDiv.hide();

    var questions = [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    choices: ["Rajah", "Bo", "Iago", "Jack" ],
    images:  ["../images/Rajah.gif"],
    validAnswer: "Rajah"
    }, {
    question:"In Peter Pan, Captain Hook had a hook on which part of his     body?",
    choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    validAnswer: "Left Hand"

    }, {
    question:"In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    validAnswer: "Pride Rock"

    }, {
    question:"In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
    choices: ["2 Dozen", "5 Dozen", "5000", "0"],
    validAnswer: "5 Dozen"

    }, {
    question:"In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    validAnswer: "Dinah"

     }, {
    question:"After being on earth, where did Hercules first meet his   father Zeus?",
    choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian   Fields"],
    validAnswer: "In the Temple of Zeus"

    }, {
    question:"During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
    choices: ["Yellow", "Blue", "Gold", "White"],
    validAnswer: "Gold"

    }, {
    question:"In Bambi, what word does the owl use to describe falling in love?",
    choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
    validAnswer: "Twitterpatted"

    }

    ];

    // Get the total number of questions
    totalQuestions =   questions.length;

    // Create and add event listeners for questions
    function initialiseQuestions(questionsArray) {

    };



    // Reset function
    $("#btnReset").on("click", function() {
        resetGame()

    });

    // Reset game
    function resetGame() {
        if (reset) {

            // Set the reset flag
            reset = false;

        }
    }

    // Check result after every attack
    var checkResult = function() {
        if (attackerHealth < 1) {

            reset = true;

        }
    };

});
