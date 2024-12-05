const questions = [
  {
    question: "Which tag is used to create a paragraph in HTML?",
    options: ["<p>", "<div>", "<h1>", "<span>"],
    correct: 0,
  },
  {
    question: "What does the <title> tag define in an HTML document?",
    options: [
      "The main heading",
      "The browser tab title",
      "The footer content",
      "A clickable link",
    ],
    correct: 1,
  },
  {
    question: "Which tag declares the HTML document type?",
    options: ["<html>", "<doctype>", "<!DOCTYPE html>", "<meta>"],
    correct: 2,
  },
  {
    question: "Where should the <meta charset=UTF-8> tag be placed?",
    options: [
      "Inside the <body>",
      "Inside the <head>",
      "After the <title>",
      "Before the <!DOCTYPE>",
    ],
    correct: 1,
  },
  {
    question: "What is the largest heading tag in HTML?",
    options: ["<h6>", "<h3>", "<h1>", "<h4>"],
    correct: 2,
  },
  {
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    correct: 1,
  },
  {
    question: "How do you specify a hyperlink in HTML?",
    options: ["<link>", "<href>", "<a>", "<anchor>"],
    correct: 2,
  },
  {
    question: "Which attribute is used to specify the URL of an image?",
    options: ["href", "alt", "src", "link"],
    correct: 2,
  },
  {
    question: "What does the alt attribute in the <img> tag do?",
    options: [
      "Defines image size",
      "Provides alternate text",
      "Specifies the image format",
      "Sets a background image",
    ],
    correct: 1,
  },
  {
    question: "Which HTML tag is used to create a line break?",
    options: ["<br>", "<lb>", "<hr>", "<break>"],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("question");
  const optionsButtons = document.querySelectorAll(".option");

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.onclick = () => checkAnswer(index);
    });
  } else {
    showResults();
  }
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (selectedOption === correctAnswer) score++;
  currentQuestionIndex++;
  displayQuestion();
}

function showResults() {
  const quizSection = document.getElementById("quiz-section");
  const resultSection = document.getElementById("result-section");
  const finalScore = document.getElementById("final-score");
  const finalGrade = document.getElementById("final-grade");

  quizSection.style.display = "none";
  resultSection.classList.remove("hidden");

  finalScore.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;

  const grade = (score / questions.length) * 50 + 50;
  finalGrade.textContent = `Your grade is: ${grade.toFixed(2)}`;
}

displayQuestion();
