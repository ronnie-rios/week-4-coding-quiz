//elements
const startButton = document.querySelector("#start-btn")
const questionContainerEl = document.querySelector("#question-container")

//question and andswer elements
const questionElement = document.querySelector("#question")
const answerElement = document.querySelector("#answer-buttons")
//time left
var timeLeft = 60;
let randomqQuestions, currentQuestion

let questionIndex = 0
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

    {
    question: "Booleans have what two values",
    choices: ['true or false', '1 or 0', 'string or number', 'prompt or function'],
    correctAnswer: 'true or false'
    },
   
]

//startgame function
function startGame() {
    document.querySelector("#start-control").setAttribute("class", "hide");
    currentQuestion = 0;
    questionContainerEl.classList.remove('questions-hide')
    setNextQuestion()
}

//next question
function setNextQuestion() {
    displayQuestion(questionArr[questionIndex])
   
}

//dynamically displays questions and answers from objects in questionArr
function displayQuestion(question) {
    //display question
    questionElement.innerText = question.question
    // var answerChoices = question.choices
    //for loop to append answer choices and buttons from questionArr
    // for(var i=0;i<choices.length;i++){
    //     var answerBtn=document.createElement('button');
    //     var buttonName = choices[i]
    //     answerBtn.setAttribute('class','btn')
    //     answerBtn.setAttribute('id', 'btn-' + (i+1));
    //     answerBtn.setAttribute("value", buttonName)
    //     answerBtn.innerHTML = buttonName
    //     answerElement.appendChild(answerBtn);
    //     answerBtn.onclick = checkAnswer;
    //       }
    var answer1 =
    "<button id='choice1' class='btn btn-primary btn-lg btn-block answerChoice'>" +
    questionArr[questionIndex].choices[0];
    var answer2 =
        "<button id='choice2' class='btn btn-primary btn-lg btn-block answerChoice'>" +
        questionArr[questionIndex].choices[1];
    var answer3 =
        "<button id='choice3' class='btn btn-primary btn-lg btn-block answerChoice'>" +
        questionArr[questionIndex].choices[2];
    var answer4 =
        "<button id='choice4' class='btn btn-primary btn-lg btn-block answerChoice'>" +
        questionArr[questionIndex].choices[3];

  answerElement.innerHTML =
    "<ul class='no-bullets'><li>" +
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
// function countdown() {
//     var timeleft = 60;
//     var timeInterval = setInterval(function() {
//         if (timeLeft > 1) {
//             console.log(hello)
//             timeLeft--
//         }
//     })
// }
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
answerElement.addEventListener('click', checkAnswer)