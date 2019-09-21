$(document).ready(function() {

//variables
var correctAnswers=0;
var incorrectAnswers=0;
var intervalID;
var timeRemaining= 6000;
var totalCorrect=0;
var totalIncorrect=0;

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
    answers:["Good-N-Plenty","Red Vines","Skittles", "Twizzlers"],
    correct:"4"
}, {
    question: "Which of the following best describes a boston baked bean?",
    answer:["chocolate covered bean", "sugar coated peanut","sugar coated bean","chocolate covered raisin"],
    correct:"2",
},{
    question: "Which holiday boosts highest candy sales?",
    answer:["Valentines Day", "Halloween", "Easter", "Christmas"],
    correct:"2",
}];

//show start button upon reload, hide game display----need start button
//hide start button on click, display game functions
$("#startButton").on("click", function (){
    $("#startButton").hide();
    correctAnswers=0;
    incorrectAnswers=0;
    timeRemaining=6000;
    startGame();
});

//on click of start button, start game
function startGame (){
    intervalID = setInterval(decrement, 6000);
    $("#gametimer").text(intervalID);
}

})