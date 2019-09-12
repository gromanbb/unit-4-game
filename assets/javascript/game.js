// VARIABLES
// ==============================================================================
var compRandom = 0;
var diamondRandom = 0;
var rubyRandom = 0;
var sapphireRandom = 0;
var topazRandom = 0;

var userScore = 0;

var cntWins = 0;
var cntLoses = 0;

// FUNCTIONS
// ==============================================================================
// Function to generate random numbers between a max and a min value
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate main random number (between 19 and 120) and random numbers for each crystal (between 1 and 12)
function generateRandomNumbers () {
    compRandom = generateRandom(19, 120);
    diamondRandom = generateRandom(1, 12);
    rubyRandom = generateRandom(1, 12);
    sapphireRandom = generateRandom(1, 12);
    topazRandom = generateRandom(1, 12);

    //console.log("compRandom: " + compRandom + "; diamondRandom: " + diamondRandom + "; rubyRandom: " + rubyRandom + "; sapphireRandom: " + sapphireRandom + "; topazRandom: " + topazRandom);
}

// Function to display game stats
function displayStats () {
    $("#random-number").text(compRandom);
    $("#wins").text(cntWins);
    $("#loses").text(cntLoses);
    $("#total-score").text(userScore);
}

// Function to reset game
function resetGame () {
    userScore = 0;

    generateRandomNumbers();

    displayStats();
}

// Function to add crystals points to userScore and check if user won or lost game
function addPoints (points) {
    userScore = userScore + points;

    displayStats();

    // Check if userScore matches main random number (won game) or if it is greater (lost game)
    if (userScore === compRandom) {
        cntWins++;

        alert("You won!");
        //console.log("Won game! userScore: " + userScore + " equals compRandom: " + compRandom);
        
        displayStats();
            
        resetGame();
    }
    else if (userScore > compRandom) {
        cntLoses++;

        alert("You lost!");
        //console.log("Lost game! userScore: " + userScore + " greater than compRandom: " + compRandom);
            
        displayStats();
            
        resetGame();
    }
}

// MAIN PROCESS
// ==============================================================================

// Start game after HTML has finished loading
$(document).ready(function() {

    console.log("Main--> Start game!");

    // First time playing
    resetGame ();

    // On click event for crystals: Add their random numbers as points to userScore
    $("#diamond").click(function () {
        addPoints(diamondRandom);
    });
    $("#ruby").click(function () {
        addPoints(rubyRandom);
    });
    $("#sapphire").click(function () {
        addPoints(sapphireRandom);
    });
    $("#topaz").click(function () {
        addPoints(topazRandom);
    });

});
