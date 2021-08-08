let startButton = document.getElementById("start-btn")
let timerElement = document.getElementById("timer")
let timerCount = document.querySelector("timer")
let questionPool = document.getElementById("question-container")





startButton.addEventListener("click", startTimer)
startButton.addEventListener("click", startGame)
let winSenario = false;
let timer;
let winCounter = 0;
let lossCounter = 0;



function startTimer(){
    console.log("started")
    
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
                // loseGame();
              }
        }, 1000);
}

function startGame() {
    startButton.classList.add("hide")
    questionPool.classList.remove("hide")

}






// function winGame() {
//     winCounter++
//     setWins()
// }

// function loseGame() {
//     lossCounter++
//     setLosses()
// }

















// function nextQuestion()

