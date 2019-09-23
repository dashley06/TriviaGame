$(document).ready(function() {

//variables
var resetTimer=4;
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
//display gifs for incorrect and correct answers
const funnyWin=[
    './assets/images/'
];

const sadLoss = [

];

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
//timer will call decrement function every second, timer starts at 10 seconds
    intervalID = setInterval(decrement, 1000);
    timer=7;
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
    checkAnswers();
}}
    
//comparison of answers to check if radio button select was correct
function checkAnswers() {
    restartTimer();
    userInput = document.querySelector("input[name=choice]:checked").value;
    userInput= parseInt(userInput);     
        console.log(userInput);
    correctGameChoice = randomQuestion.correct;
    correctGameChoice = parseInt(correctGameChoice);
        console.log(correctGameChoice)
        if (userInput === correctGameChoice){
            totalCorrect++
            gameCount++
            $("#resultsCorrect").text("That was correct! The correct answer is option" + " " + correctGameChoice);
           funImages();
        } else {
            totalIncorrect++
            gameCount++
            $("#resultsCorrect").text("That was incorrect. The correct answer is option" + " " + correctGameChoice);
            sadImages();
        }
    } 
//second timer for countdown interval for each questions before advancing to next page
function restartTimer(){
    clearInterval(intervalID);
    resetTime = setInterval(countdown, 1000);// call function every second
    resetTimer= 3; 
}

function countdown() {
    resetTimer--; 
    if(resetTimer === 0){
       console.log("game over", gameCount); 
       clearInterval(restartTimer);
       clearInterval(intervalID);
       $(".questions").empty();
       $(".answer1").empty();
       $(".answer2").empty();
       $(".answer3").empty();
       $(".answer4").empty();
       startGame();
       gameCounter();
    }
}
//counter for each round, game stops after 5 rounds
function gameCounter (){
    if (gameCount === 5){
     endGame();
    }
}
//end of game function
function endGame(){
    $("#gameDisplay").hide();
    $("#resultsPage").show();
    $("#restartButton").show();
    $("#resultsCorrect").text("Game Over!! You got" + " " + totalCorrect + " " + "correct and" + " " + totalIncorrect + " " + "incorrect!");
    clearInterval(restartTimer);
    clearInterval(intervalID);
}

function randomImages(images){
    const random = Math.floor(Math.random()*images.lenth);
    const randomImages= images[random];
    return randomImages;
}
function funImages(){
    $("#gifDisplay").html(
        <div>
        <p class= "preloadImages"> Good win!</p>
        <img src="${randomImages(funnyWin)}"/>
        </div>
    )};
function sadImages(){
    $("#gifDisplay").html(
        <div>
        <p class= "preloadImages"> That was terrible!</p>
        <img src="${randomImages(sadLoss)}"/>
        </div>
    )};

});