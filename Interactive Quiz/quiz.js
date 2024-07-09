const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Venus", "Saturn"],
        answer: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuiz = quizData[currentQuestion];

    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = ''; // Clear options container

    currentQuiz.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <input type="radio" id="option${index}" name="option" value="${option}">
            <label for="option${index}">${option}</label>
        `;
        optionsElement.appendChild(optionElement);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }
    const answer = selectedOption.value;
    const currentQuiz = quizData[currentQuestion];

    if (answer === currentQuiz.answer) {
        score++;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = `Wrong! The correct answer is: ${currentQuiz.answer}`;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('question').textContent = '';
    document.getElementById('options').innerHTML = ''; // Clear options container
    document.getElementById('feedback').textContent = '';
    document.getElementById('score').textContent = `Your score: ${score}/${quizData.length}`;
}

loadQuestion();
