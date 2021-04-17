//buttons and variables
const startButton = document.querySelector("#start-btn")
const questionContainerEl = document.querySelector("#question-container")
let randomqQuestions, currentQuestion

const questionElement = document.querySelector("#question")
const answerElement = document.querySelector("#answer-buttons")

//startgame function
function startGame() {
    console.log("hello")
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
//display question
function displayQuestion(question) {
    questionElement.innerText = question.question
}
//select answer
function selectAnser() {

}
//question array with objects
const questionArr =[
    {
    question: "Practice question",
    answers: [
        {option: 'x', correct: true},
        {option: 'y', correct: false},
        {option: 'z', correct: false},
        {option: 'a', correct: false}
    ]
    }
]

//function to display questions and answers 


//for loop to go through questions/answers and check

//function to save score to local storage

//funciton to display high schoe when click on 'view score'

//event listeners
startButton.addEventListener('click', startGame)