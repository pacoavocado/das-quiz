let startButton = document.getElementById("start-button")
let timerElement = document.getElementById("timer")
let timerCount = document.querySelector("timer")
let questionContainerEl = document.getElementById("question-container")
let questionEl = document.getElementById("question-lines")
let answerButtonsEl = document.getElementById("answer-button")
let startBox = document.getElementById("start-container")


let listOfQuestions, questionIndex



startButton.addEventListener("click", startTimer)
startButton.addEventListener("click", startGame)
button.addEventListener("click", () => {
    questionIndex++
    nextQuestion()
})



let timer;
let winCounter = 0;
let lossCounter = 0;



function startGame() {
    startButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    listOfQuestions = questions.sort(() => Math.random() -.5);
    questionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    resetState()
    showQuestion(listOfQuestions[ questionIndex ]) ;
    
}
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answers.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    // nextButton.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.remove.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (listOfQuestions.length > currentQuestionsI +1) {
        
    }
    
}

function setStatusClass ( element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    }
    else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}


let questions = [
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
    {
        question: "what is red?",
        answers: [
            { text: "a feeling", correct: false },
            { text: "a color", correct: true },
            { text: "a feeling", correct: false },
            { text: "a feeling", correct: false },
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
    } 
]

function startTimer(){
    console.log("timer started")
    let winSenario = false;
    
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
