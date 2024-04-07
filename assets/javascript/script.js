document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("next-btn");
    const questionElement = document.getElementById("question")
    let currentQuestionIndex = 0;
    let gameScore = 0;
    let previousSelectedButton = null;

    function runGame() {
        currentQuestionIndex = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
        showNextQuestion();
    }
    function showQuestion(){
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        document.getElementById("answers").innerHTML = "";

        currentQuestion.answers.forEach(answer => {
            let button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            document.getElementById("answers").appendChild(button);
            button.addEventListener("click", function(event) {
                selectedAnswer(answer.correct, event);
                document.getElementById("next-btn").style.display = "block"
            });
        });
    }
    function showNextQuestion() {
        nextButton.addEventListener("click", function () {
            let selectedAnswer = currentSelectedAnswer;
            let isCorrect = checkAnswer(selectedAnswer);
            if (isCorrect) {
                incrementScore();
            } else {
                incrementAttempts();
            }
            currentQuestionIndex += 1;
            showQuestion();
        });
    }
    function selectedAnswer(answer, event) {
        let selectedButton = event.target;

        if (previousSelectedButton) {
            previousSelectedButton.style.border = ""
        }
        selectedButton.style.border = "solid 3px orange";
        previousSelectedButton = selectedButton;
        currentSelectedAnswer = answer;
    }

    function checkAnswer (selectedAnswer){
        let currentQuestion = questions[currentQuestionIndex]
        let correctAnswer = currentQuestion.answers.find(answer => answer.correct)
        return selectedAnswer === correctAnswer.text && correctAnswer.correct;
    }
    function incrementScore() {
        gameScore++;
        document.getElementById("correctAnswers").innerText = gameScore;
    }
    function incrementAttempts() {

    }

    const questions = [
        {
            question: "What is the largest land animal in the world?",
            answers: [
                { text: "Hippo", correct: false},
                { text: "Elephant", correct: true},
                { text: "Rhino", correct: false},
                { text: "Blue Whale", correct: false},
            ]
        },
        {
            question: "What is the capital of England",
            answers: [
                { text: "Manchester", correct: false},
                { text: "Liverpool", correct: false},
                { text: "Scotland", correct: false},
                { text: "London", correct: true},
            ]
        },
        {
            question: "What is Batman's real name",
            answers: [
                { text: "Wayne Bruce", correct: false},
                { text: "Wruce Bayne", correct: true},
                { text: "Bruce Wayne", correct: false},
                { text: "Batman", correct: false},
            ]
        },
        {
            question: "How many continents are there and what are they called",
            answers: [
                { text: "7", correct: false},
                { text: "8", correct: true},
                { text: "6", correct: false},
                { text: "9", correct: false},
            ]
        },
        {
            question: "What's the name of the giant lizard that attacked Japan",
            answers: [
                { text: "Godzilla", correct: true},
                { text: "King Kong", correct: false},
                { text: "King ghidorah", correct: false},
                { text: "Mothra", correct: false},
            ]
        },
        {
            question: "When did WW2 end?",
            answers: [
                { text: "1939", correct: false},
                { text: "1918", correct: false},
                { text: "1945", correct: true},
                { text: "1946", correct: false},
            ]
        },
        {
            question: "Who painted the mona lisa?",
            answers: [
                { text: "Leonardo da Vinici", correct: true},
                { text: "Vincent van Gogh ", correct: false},
                { text: "Pablo Picasso", correct: false},
                { text: "Michelangelo", correct: false},
            ]
        },
        {
            question: "What is the largest planet in the solar system?",
            answers: [
                { text: "Saturn", correct: false},
                { text: "Jupiter", correct: true},
                { text: "Uranus", correct: false},
                { text: "Pluto", correct: false},
            ]
        },
        {
            question: "What is the greek god of Music called?",
            answers: [
                { text: "Zues", correct: false},
                { text: "Hercules", correct: false},
                { text: "Ares", correct: false},
                { text: "Apollo", correct: true},
            ]
        },
        {
            question: "What is the fastest animal in the world",
            answers: [
                { text: "cheetah", correct: false},
                { text: "Sailfish", correct: false},
                { text: "Peregrine Falcon", correct: true},
                { text: "Pronghorn Antelope", correct: false},
            ]
        },
    ];
    runGame()
});