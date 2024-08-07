document.addEventListener("DOMContentLoaded", function () {
  
  
  /**Decladed variables */
  let nextButton = document.getElementById("next-btn");
  let questionElement = document.getElementById("question");
  let readyButton = document.getElementById("ready");
  let currentQuestionIndex = 0;
  let gameScore = 0;
  let attemptsScore = 0;
  let previousSelectedButton = null;
  let timerInterval;
  let elapsedTime = 0;
  let currentSelectedAnswer;
  let err;

  
  /**Event listener to start the quiz when ready button is clicked
   * also starts the timer
   */
  readyButton.addEventListener("click", function () {
    document.querySelector(".app").style.display = "block";
    document.getElementById("intro").style.display = "none";
    startTimer();
  });

  nextButton.addEventListener("click", handleNextQuestion);

  function runGame() {
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    let answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
      let button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answersElement.appendChild(button);
      button.addEventListener("click", function (event) {
        selectedAnswer(answer.correct, event.target);
        nextButton.style.display = "block";
      });
    });
  };


  
  /**Code that adds to the corrrisponding answer selected
   * also finishes the quiz and show time in the console
   */
  function handleNextQuestion() {
    try {
      let selectedAnswer = currentSelectedAnswer;
      let isCorrect = checkAnswer(selectedAnswer);
      if (isCorrect) {
        incrementScore();
        if (gameScore === 10) {
          clearInterval(timerInterval);
          let finalTime = elapsedTime;
          console.log("Final time:", formatTime(finalTime));
          document.getElementById("finished").style.display = "block";
          
          var img = document.createElement("img");
          img.src = "assets/images(Quiz)/fireworks.gif"
          var src = document.getElementById("finished");
          src.appendChild(img);
          
          let x = document.getElementsByClassName("app");
          for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          return;
        }
      } else {
        incrementAttempts();
      }
      showQuestion();
      currentSelectedAnswer = null;
    } catch (eer) {
      console.error("An error occured in HandleNextQuestion", err);
    }
  }
  
  
  
  /**Code for checking if selected answer is correct or not*/
  function checkAnswer(selectedAnswer) {
    let currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.answers.find(
      (answer) => answer.correct
    );
    return selectedAnswer === correctAnswer.correct;
  }


  
  /**Code for Highlighting current selected answer*/
  function selectedAnswer(answer, selectedButton) {
    if (previousSelectedButton) {
      previousSelectedButton.style.border = "";
    }
    selectedButton.style.border = "solid 3px orange";
    previousSelectedButton = selectedButton;
    currentSelectedAnswer = answer;
  }

  
  
  /**Code relating to scores*/
  function incrementScore() {
    gameScore++;
    document.getElementById("correctAnswers").innerText = gameScore;
    currentQuestionIndex++;
  }

  function incrementAttempts() {
    attemptsScore++;
    document.getElementById("attempts").innerText = attemptsScore;
  }



  /**Code relating to the timer*/
  function startTimer() {
    timerInterval = setInterval(function () {
      elapsedTime++;
      document.getElementById("timer").innerText = formatTime(elapsedTime);
    }, 1000);
  }

  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (remainingSeconds < 10 ? "0" : "") +
      remainingSeconds
    );
  }
  
  
  
  /**Questions */
  const questions = [
    {
      question: "What is the largest land animal in the world?",
      answers: [
        { text: "Hippo", correct: false },
        { text: "Elephant", correct: true },
        { text: "Rhino", correct: false },
        { text: "Blue Whale", correct: false },
      ],
    },
    {
      question: "What is the capital of England?",
      answers: [
        { text: "Manchester", correct: false },
        { text: "Liverpool", correct: false },
        { text: "Scotland", correct: false },
        { text: "London", correct: true },
      ],
    },
    {
      question: "What is Batman's real name?",
      answers: [
        { text: "Wayne Bruce", correct: false },
        { text: "Wruce Bayne", correct: false },
        { text: "Bruce Wayne", correct: true },
        { text: "Batman", correct: false },
      ],
    },
    {
      question: "How many continents are there and what are they called?",
      answers: [
        { text: "7", correct: true },
        { text: "8", correct: false },
        { text: "6", correct: false },
        { text: "9", correct: false },
      ],
    },
    {
      question: "What's the name of the giant lizard that attacked Japan?",
      answers: [
        { text: "Godzilla", correct: true },
        { text: "King Kong", correct: false },
        { text: "King ghidorah", correct: false },
        { text: "Mothra", correct: false },
      ],
    },
    {
      question: "When did WW2 end?",
      answers: [
        { text: "1939", correct: false },
        { text: "1918", correct: false },
        { text: "1945", correct: true },
        { text: "1946", correct: false },
      ],
    },
    {
      question: "Who painted the mona lisa?",
      answers: [
        { text: "Leonardo da Vinici", correct: true },
        { text: "Vincent van Gogh ", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false },
      ],
    },
    {
      question: "What is the largest planet in the solar system?",
      answers: [
        { text: "Saturn", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Uranus", correct: false },
        { text: "Pluto", correct: false },
      ],
    },
    {
      question: "What is the greek god of Music called?",
      answers: [
        { text: "Zues", correct: false },
        { text: "Hercules", correct: false },
        { text: "Ares", correct: false },
        { text: "Apollo", correct: true },
      ],
    },
    {
      question: "What is the fastest animal in the world?",
      answers: [
        { text: "cheetah", correct: false },
        { text: "Sailfish", correct: false },
        { text: "Peregrine Falcon", correct: true },
        { text: "Pronghorn Antelope", correct: false },
      ],
    },
  ];
  let refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

  runGame();
});
