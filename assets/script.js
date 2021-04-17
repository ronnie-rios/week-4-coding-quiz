//buttons and variables
const startButton = document.querySelector("#start-btn")
const questionContainerEl = document.querySelector("#question-container")
let randomqQuestions, currentQuestion

const questionElement = document.querySelector("#question")
const answerElement = document.querySelector("#answer-buttons")

//question arr
const questionArr =[
    {
    question: "Practice question",
    choices: ['afakeanswer', 'b', 'c', 'd'],
    correctAnswer: 'b'
    }
]

//startgame function
function startGame() {
   
    //startButton.style.display = "none";
    document.querySelector("#start-control").setAttribute("class", "hide");
    randomqQuestions= questionArr.sort(() => Math.random() -.5);
    currentQuestion = 0;
    questionContainerEl.classList.remove('questions-hide')
    setNextQuestion()
}

//next question
function setNextQuestion() {
    displayQuestion(randomqQuestions[currentQuestion])
}

//display questions and answers
function displayQuestion(question) {
    console.log(question)
    //display question
    questionElement.innerText = question.question
    var choices = question.choices

    for(var i=0;i<choices.length;i++){
        var answerBtn=document.createElement('button');
        var buttonName = choices[i]
        answerBtn.setAttribute('class','btn')
        answerBtn.setAttribute('id', 'btn-' + (i+1));
        answerBtn.setAttribute("data-choice", buttonName)
        answerBtn.innerHTML = buttonName
        answerElement.appendChild(answerBtn);
        console.log(buttonName)
    }
}


//select answer
function selectAnswer() {

}
//question array with objects


//function to display questions and answers 


//for loop to go through questions/answers and check

//function to save score to local storage

//funciton to display high schoe when click on 'view score'

//event listeners
startButton.addEventListener('click', startGame)