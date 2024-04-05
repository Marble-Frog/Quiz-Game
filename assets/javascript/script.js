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
        },
        {
            question: "What is the capital of England"
            answers: [
                { text: "Manchester", correct: false},
                { text: "Liverpool", correct: false},
                { text: "Scotland", correct: false},
                { text: "London", correct: true},
            ]
        },
        {
            question: "What is Batman's real name"
            answers: [
                { text: "Wayne Bruce", correct: false},
                { text: "Wruce Bayne", correct: true},
                { text: "Bruce Wayne", correct: false},
                { text: "Batman", correct: false},
            ]
        },
        {
            question: "How many continents are there and what are they called"
            answers: [
                { text: "7", correct: false},
                { text: "8", correct: true},
                { text: "6", correct: false},
                { text: "9", correct: false},
            ]
        },
        {
            question: "What's the name of the giant lizard that attacked Japan"
            answers: [
                { text: "Godzilla", correct: true},
                { text: "King Kong", correct: false},
                { text: "King ghidorah", correct: false},
                { text: "Mothra", correct: false},
            ]
        },
        {
            question: "When did WW2 end?"
            answers: [
                { text: "1939", correct: false},
                { text: "1918", correct: false},
                { text: "1945", correct: true},
                { text: "1946", correct: false},
            ]
        },
        {
            question: "Who painted the mona lisa?"
            answers: [
                { text: "Leonardo da Vinici", correct: true},
                { text: "Vincent van Gogh ", correct: false},
                { text: "Pablo Picasso", correct: false},
                { text: "Michelangelo", correct: false},
            ]
        },
        {
            question: "What is the largest planet in the solar system?"
            answers: [
                { text: "Saturn", correct: false},
                { text: "Jupiter", correct: true},
                { text: "Uranus", correct: false},
                { text: "Pluto", correct: false},
            ]
        },
        {
            question: "What is the greek god of Music called?"
            answers: [
                { text: "Hippo", correct: false},
                { text: "Elephant", correct: false},
                { text: "Rhino", correct: false},
                { text: "", correct: true},
            ]
        },
        {
            question: "What is the fastest animal in the world"
            answers: [
                { text: "cheetah", correct: false},
                { text: "Sailfish", correct: false},
                { text: "Peregrine Falcon", correct: true},
                { text: "Pronghorn Antelope", correct: false},
            ]
        },
    ];
    
    ];
    runGame();
});