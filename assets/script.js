//start button
const startButton = document.querySelector("#start-btn")
const questionContainerEl = document.querySelector("#question-container")
let randomqQuestions, currentQuestion

let questionIndex = 0
//question and andswer elements
const questionElement = document.querySelector("#question")
const answerElement = document.querySelector("#answer-buttons")
//time left
var timeLeft = 60;
//answer variables
const choice1 = document.getElementById("#btn-1")
const choice2 = document.getElementById("#btn-2")
const choice3 = document.getElementById("#btn-3")
const choice4 = document.getElementById("#btn-4")
//question array
const questionArr =[
    {
    question: "Which of the following is not a dataype?",
    choices: ['boolean', 'JSON', 'string', 'interger'],
    correctAnswer: 'JSON'
    },

    {
    question: "Which of the following would you use to iterate though an array",
    choices: ['array.loop', 'If statement', 'For Loop', 'prompt'],
    correctAnswer: 'For Loop'
    },
]

//startgame function
function startGame() {
   
    //startButton.style.display = "none";
    document.querySelector("#start-control").setAttribute("class", "hide");
    // randomqQuestions= questionArr.sort(() => Math.random() -.5);
    currentQuestion = 0;
    questionContainerEl.classList.remove('questions-hide')
    setNextQuestion()
}

//next question
function setNextQuestion() {
    resetDisplay()
    displayQuestion(questionArr[questionIndex])
}

//dynamically displays questions and answers from objects in questionArr
function displayQuestion(question) {
    //display question
    questionElement.innerText = question.question
    var choices = question.choices
    //for loop to append answer choices and buttons from questionArr
    for(var i=0;i<choices.length;i++){
        var answerBtn=document.createElement('button');
        var buttonName = choices[i]
        answerBtn.setAttribute('class','btn')
        answerBtn.setAttribute('id', 'btn-' + (i+1));
        answerBtn.setAttribute("value", buttonName)
        answerBtn.innerHTML = buttonName
        answerElement.appendChild(answerBtn);
        answerBtn.onclick = checkAnswer;
    }
}

//timer function to display timer and start countdown
function countdown() {
    var timeleft = 60;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            console.log(hello)
            timeLeft--
        }
    })
}
//gets user button click and checks it to see if it's correct
function checkAnswer(e) {
    var checkedAnswer = questionArr[questionIndex].correctAnswer
    
    var userAnswer = e.target.value
   if (userAnswer === checkedAnswer) {
       console.log ("hello, youre right")
   } else {
       console.log("you're wrong")
   }
   questionIndex++
   setNextQuestion();
}


//function to save score to local storage

//funciton to display high schoe when click on 'view score'

//event listeners
startButton.addEventListener('click', startGame)