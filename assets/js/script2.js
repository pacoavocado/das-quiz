let startButton = document.querySelector("start-button")
let timerElement = document.querySelector("timer")
let timerCount = document.querySelector("timer")
let questionContainerEl = document.querySelector("question-container")
let questionElement = document.querySelector("question-lines")
let answerButtonsEl = document.querySelector("answer-btn")

const shuffledQuestion, currentQuestionsI

startButton.addEventListener("click", startTimer)
startButton.addEventListener("click", startGame)
let winSenario = false
let rightCounter = 0
let wrongCounter = 0





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



console.log(questionElement)


function startGame() {
    startButton.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    shuffledQuestion = questions.sort(() => Math.random() -.5)
    currentQuestionsI = 0
    
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestion[currentQuestionsI])
}

function showQuestion(questions) {
    questionEl.innerText = question.question
}

function selectAnswers() {

}

function setWinCount(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add(rightCounter++)
    } 
    else {
       timerCount.add( 10 )
    }

    
}


function startTimer() {
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
            
            if (timer === 0)  {
                scoreSheet()
                return
            }
        }, 1000);
}
