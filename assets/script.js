//buttons and variables
const startButton = document.querySelector("#start-btn")

//startgame function
function startGame() {
    console.log("hello")
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