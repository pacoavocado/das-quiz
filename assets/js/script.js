let startButton = document.getElementById("start-button")
let timerElement = document.getElementById("timer")
let timerCount = document.querySelector("timer")

const questionContainerEl = document.getElementById("question-container")

let questionEl = document.getElementById("question-lines")
let answerButtonsEl = document.getElementById("answer-btn")
let startBox = document.getElementById("start-container")
let listOfQuestions, questionIndex



startButton.addEventListener("click", startTimer)
startButton.addEventListener("click", startGame)
let winSenario = false;
let timer;
let winCounter = 0;
let lossCounter = 0;



function startGame() {
    startButton.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    listOfQuestions = questions
    questionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(listOfQuestions[ questionIndex ]) 

}

function showQuestion(question) {
    questionEl.innerText = question.question
    questions.answers.forEach(answers => {
        const button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("btn")
        if (answers.correct) {
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
        }
    })
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from((answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    )
}




const questions = [
    {
        question: "what is blue?",
        answers: [
            { text: "a color", correct: true },
            { text: "a feeling", correct: false },
            { text: "a smell", correct: false },
            { text: "a emoji", correct: false }
        ]
    },
    {
        question: "what is red?",
        answers: [
            { text: "a feeling", correct: false },
            { text: "a color", correct: true },
            { text: "a feeling", correct: false },
            { text: "a feeling", correct: false },
        ]
    },
    
    
    
    
    
]

function startTimer(){
    console.log("timer started")
    
    timerCount = 60
        timer = setInterval(function() {
            timerCount--;
            timerElement.textContent = timerCount;
            if (timerCount >= 0) {
    
                if (winSenario && timerCount > 0) {
    
                    clearInterval(timer);
                    // winGame();
                }
            }
    
            if (timerCount === 0) {
    
                clearInterval(timer);
                scoreSheet()
                }
            else {
                clearInterval(timer - 10)
            }
        }, 1000);
}
