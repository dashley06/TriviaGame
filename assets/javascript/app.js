$(document).ready(function() {

//variables
var resetTimer=0;
var resetTime;
var intervalID;
var timer;
var t;
var userInput;
var correctGameChoice;
var randomQuestion;
var totalCorrect=0;
var totalIncorrect=0;
var gameCount=0;

//game questions and answers object
var gameQuestions=[{
    question: "Which of the following candy does not contain chocolate?",
    answer: ["Twix", "Butterfinger", "Skittles", "Reese's Peanut Butter Cup"],
    correct: "3",
}, {
    question:"What chemical gives Pop Rocks their pop",
    answer: ["carbon dioxide", "oxygen", "nitrogen", "helium"],
    correct:"1",
}, {
    question:"Which jellybean color is the favorite among most children?",
    answer: ["yellow", "red", "black", "green"],
    correct:"2",
}, {
    question:"What is the top selling candy in the US?",
    answer:["M&M's", "Snickers", "Candy Corn", "Jolly Ranchers"],
    correct:"3",
}, {
    question: "The lollipop was invented in what year?",
    answer: ["1908", "1918", "1928", "1938"],
    correct:"1",
},{
   question: "The paper flag on the Hershey Kiss is called what?",
   answer: ["banner", "plume", "flog", "stripe"],
   correct:"2",
},{
    question: "What former President is known to love Milky Ways?",
    answer: ["Ronald Reagan", "Barack Obama", "George Washington","Richard Nixon"],
    correct:"4",
},{
    question: "Which candy's slogan is 'Make Mouths Happy'?",
    answer:["Good-N-Plenty","Red Vines","Skittles", "Twizzlers"],
    correct:"4",
}, {
    question: "Which of the following best describes a boston baked bean?",
    answer:["chocolate covered bean", "sugar coated peanut","sugar coated bean","chocolate covered raisin"],
    correct:"2",
},{
    question: "Which holiday boosts highest candy sales?",
    answer:["Valentines Day", "Halloween", "Easter", "Christmas"],
    correct:"2",
}];
//on-click events
//on-click event for start button to begin game
$("#startButton").on("click", function (){
    $("#startButton").hide();
    $("#resultsPage").hide();
    $("#gameDisplay").show();
    timer=7;
    startGame();
});
//on-click event to start game without refreshing page
$("#restartButton").on("click", function (){
    $("#startButton").show();
    $("#resultsPage").hide();
    $("#gameDisplay").hide();
});

//submit button for each question to advance to next question
$("#submit").on("click", function (){
    $("#resultsPage").show();
    $("#gameDisplay").hide();
    checkAnswers();
});


//start function to run at the beginning of each game
function startGame (){
    intervalID = setInterval(decrement, 1000);//timer will call decrement function every second, timer starts at 10 seconds
    timer=7;
    resetTimer=0;
    loadQuestion();
    $("#startButton").hide();
    $("#resultsPage").hide();
    $("#gameDisplay").show();
}
//select random question object each game
function loadQuestion (){
    randomQuestion = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];     
    //appends questions and answer objects into HTML 
    $(".questions").append(randomQuestion.question);
    $(".answer1").append(randomQuestion.answer[0]);
    $(".answer2").append(randomQuestion.answer[1]);
    $(".answer3").append(randomQuestion.answer[2]);
    $(".answer4").append(randomQuestion.answer[3]);
} 

//updates timer display in DOM, decrement by one
function decrement(){
    $("#gametimer").html(timer);
    timer--; 
    showResultPage();
}

//end of timer countdown to display results screen
function showResultPage(){
    if(timer <= -1){
    $("#gameDisplay").hide();
    $("#resultsPage").show();
    $("#timeup").html("You ran out of time!");
    $("#image3").hide();
    checkAnswers();
}}
    
//comparison of answers to check if radio button select was correct
function checkAnswers() {
    userInput = document.querySelector("input[name=choice]:checked").value;
    userInput= parseInt(userInput);     
       // console.log(userInput);
    correctGameChoice = randomQuestion.correct;
    correctGameChoice = parseInt(correctGameChoice);
       // console.log(correctGameChoice)
    gameCount++;
        if (userInput === correctGameChoice){
            totalCorrect++;
            $("#resultsCorrect").text("That was correct! The correct answer is option" + " " + correctGameChoice);
            $("#image1").show();
            $("#image2").hide();
            $("#image3").hide();
            restartTimer();
        } else {
            totalIncorrect++;
            $("#resultsCorrect").text("That was incorrect. The correct answer is option" + " " + correctGameChoice);
            $("#image1").hide();
            $("#image2").show();
            $("#image3").hide();
            restartTimer();
        }
    }
//second timer for countdown interval for each questions before advancing to next page
function restartTimer(){
    clearInterval(intervalID);
    resetTime = setInterval(countdown, 1000);// call function every second
}

function countdown() {
    resetTimer++  
    console.log(resetTimer)
    timerDoesntWork();
}

function timerDoesntWork (){
    if(resetTimer === 3){
      console.log("game over", gameCount);
       $(".questions").empty();
       $(".answer1").empty();
       $(".answer2").empty();
       $(".answer3").empty();
       $(".answer4").empty();
       gameCounter();
       clearInterval(resetTime); 
}}
//counter for each round, game stops after 5 rounds
function gameCounter (){
    if (gameCount === 5){
    endGame();
    }
    else {
        startGame();
    }}

//end of game function
function endGame(){
    clearTimeout(restartTimer);
    clearTimeout(resetTimer);
    clearTimeout(resetTime);
    $("#gameDisplay").hide();
    $("#resultsPage").show();
    $("#timeup").html("")
    $("#restartButton").show();
    $("#resultsCorrect").text("Game Over!! You got" + " " + totalCorrect + " " + "correct and" + " " + totalIncorrect + " " + "incorrect!");
    $("#restartButton").text("Restart Game");
    $("#image1").hide();
    $("#image2").hide();
    $("#image3").show();
    return;
    console.log("WTF");
}


});