document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("next-btn");
    const questionElement = document.getElementById("question")
    let currentQuestionIndex = 0;
    let score = 0;

    function runGame() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    function showQuestion(){
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    }
    function incrementScore() {

    }

    function incrementAttempts() {

    }

    const questions = [
        {
            question: "What is the largest land animal in the world?",
        }
    ];
    runGame();
});