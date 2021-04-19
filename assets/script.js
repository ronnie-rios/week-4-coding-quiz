//elements
const startButton = document.querySelector("#start-btn")
const questionContainerEl = document.querySelector("#question-container")
const startingElement = document.querySelector("#start-control")

//question and andswer elements
const questionElement = document.querySelector("#question")
const answerElement = document.querySelector("#answer-buttons")
//time left
var timeLeft = 60;
let score = 0

let questionIndex = 0

//question array
const questionArr =[
    {
    question: "Which of the following is not a dataype?",
    choices: ['boolean', 'JSON', 'string', 'interger'],
    correctAnswer: 'choice2'
    },

    {
    question: "Which of the following would you use to iterate though an array",
    choices: ['array.loop', 'If statement', 'For Loop', 'prompt'],
    correctAnswer: 'choice3'
    },

    {
    question: "Booleans have what two values",
    choices: ['true or false', '1 or 0', 'string or number', 'prompt or function'],
    correctAnswer: 'choice1'
    },
   
]
var lastQuestion = 3
//startgame function
function startGame() {
    document.querySelector("#start-control").setAttribute("class", "hide");
    currentQuestion = 0;
    questionContainerEl.classList.remove('questions-hide')
    startingElement.classList.remove('start-control')
    countDown();
    setNextQuestion();
}

//next question
function setNextQuestion() {
    displayQuestion(questionArr[questionIndex])
  
}

//dynamically displays questions and answers from objects in questionArr
function displayQuestion(question) {
    //display question
    questionElement.innerText = question.question
    //answer choices creation
    var answer1 =
    "<button id='choice1' class='btn btn-primary answerChoice' value= 'choice1'>" +
    questionArr[questionIndex].choices[0];
    var answer2 =
        "<button id='choice2' class='btn btn-primary' value='choice2'>" +
        questionArr[questionIndex].choices[1];
    var answer3 =
        "<button id='choice3' class='btn btn-primary' value='answer3'>" +
        questionArr[questionIndex].choices[2];
    var answer4 =
        "<button id='choice4' class='btn btn-primary' value='answer4'>" +
        questionArr[questionIndex].choices[3];
//adding answers to innerHTML
  answerElement.innerHTML =
    "<ul class=answer-list'><li>" +
    answer1 +
    "</li><li>" +
    answer2 +
    "</li><li>" +
    answer3 +
    "</li><li>" +
    answer4 +
    "</li></ul>";
}

//timer function to display timer and start countdown
function countDown(){
    timer = setInterval(function(){
        if(timeLeft<0){
            timeLeft=0;
        }
    document.getElementById('countdown').innerHTML = 'Time: ' + timeLeft;
    if(timeLeft <= 0 || questionIndex == 3){
        clearInterval(timer);
    }
    timeLeft--;
}, 1000);
}
//gets user button click and checks it to see if it's correct
function checkAnswer(e) {
    var checkedAnswer = questionArr[questionIndex].correctAnswer
    
    var userAnswer =e.target.id
   if (userAnswer === checkedAnswer) {
       console.log ("hello, youre right");
       score += 10;
     
   } else {
       console.log("you're wrong")
      timeLeft = timeLeft - 10;
      score -= 5;
   }

    questionIndex++
    console.log(score);
    
   if (questionIndex == lastQuestion){
       userScore();
   } else {
       setNextQuestion();
   }}
   

function userScore() {
    questionElement.innerText ="Congratulations on finishing."
    answerElement.innerHTML = "Your final score is " + score + ".";
   
}
//function to save score to local storage

//funciton to display high schoe when click on 'view score'

//event listeners
startButton.addEventListener('click', startGame)
answerElement.addEventListener('click', checkAnswer)