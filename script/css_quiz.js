const questions = [
  {
    question:
      "What determines which CSS rule is applied when multiple rules target the same element?",
    options: [
      "Specificity",
      "Inheritance",
      "Order of appearance",
      "Importance",
    ],
    correct: 0,
  },
  {
    question: "Which type of CSS rule has the highest priority?",
    options: [
      "External stylesheet",
      "Internal stylesheet",
      "Inline style",
      "Class selector",
    ],
    correct: 2,
  },
  {
    question: "What does the universal selector (*) do?",
    options: [
      "Selects elements with a specific class",
      "Applies to all elements on the page",
      "Selects all images",
      "Selects the first child of an element",
    ],
    correct: 1,
  },
  {
    question: "Which selector targets an element with a specific class?",
    options: ["#", ".", "*", ">"],
    correct: 1,
  },
  {
    question:
      "In the CSS box model, which of the following is the outermost layer?",
    options: ["Content", "Padding", "Border", "Margin"],
    correct: 3,
  },
  {
    question:
      "Which property controls the space inside an element, between the content and the border?",
    options: ["margin", "padding", "border-width", "outline"],
    correct: 1,
  },
  {
    question: "Which CSS property sets the background color of an element?",
    options: ["color", "background-color", "border-color", "fill-color"],
    correct: 1,
  },
  {
    question: "How do you specify a color using RGB values in CSS?",
    options: [
      "#123456",
      "rgb(255, 0, 0)",
      "color(255, 0, 0)",
      "hsl(0, 100%, 50%)",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is an inline element?",
    options: ["<p>", "<div>", "<span>", "<section>"],
    correct: 2,
  },
  {
    question:
      "Which property changes a block-level element into an inline element?",
    options: [
      "display: block;",
      "display: inline;",
      "visibility: inline;",
      "float: left;",
    ],
    correct: 1,
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
