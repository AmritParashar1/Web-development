document.addEventListener("DOMContentLoaded", ()=> {

    const startButton = document.getElementById("start-btn");
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");

    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question : "What is the capital of France ? ",
            choices : ["Paris", "London", "Berlin", "Madrid"],
            answer :  "Paris",
        },

        {
            question : "Which planet is known as the red planet ?",
            choices : ["Mars", "Earth" , "Venus", "Jupiter"],
            answer : "Mars",
        },

        {
            question : "Who wrote 'Hamlet' ? ",
            choices : ["William Sexy", "Charles Dicken", "Munsi Premchand", "Kinugasa"],
            answer : "William Sexy",
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startButton.addEventListener("click", startQuiz) 

    function startQuiz() {
        startButton.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestions();
    }

    function showQuestions() {
        nextButton.classList.add("hidden");
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if(choice === correctAnswer) {
            score++;
        }
        nextButton.classList.remove("hidden"); 
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;

        if(currentQuestionIndex < questions.length) {
            showQuestions();
        }
        else {
            showResult();
        }
    });

    function showResult() {
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }

    restartButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    })
});