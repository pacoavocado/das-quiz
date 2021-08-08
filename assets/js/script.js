let answerButton = document.getElementById("answer-btn")
let timerElement = document.getElementById("timer")






answerButton.addEventListener("click", startTimer)

let winSenario = false;
let timer;
let timeCount;



function startGame(){
    console.log("started")
}


function nextQuestion()


function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {

            if (winSenario && timerCount > 0) {

                clearInterval(timer);
                winGame();
            }
        }

        if (timerCount === 0) {

            clearInterval(timer);
            loseGame();
          }
    }, 1000);
}
    
