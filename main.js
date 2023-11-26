document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const mainSection = document.querySelector("main");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedCategory = document.getElementById("category").value;
    const isValidCategory = /^\d+$/.test(selectedCategory);

    if (isValidCategory) {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${selectedCategory}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          displayQuestions(data.results);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    } else {
      console.error("Invalid category selected.");
    }
  });

  function displayQuestions(questions) {
    mainSection.innerHTML = "";

    questions.forEach((question) => {
      const card = createCard(question);
      mainSection.appendChild(card);
    });
  }

  function createCard(question) {
    const article = document.createElement("article");
    const category = document.createElement("h2");
    const questionText = document.createElement("p");
    const showAnswerButton = document.createElement("button");
    const correctAnswer = document.createElement("p");
    const difficultyText = document.createElement("p");

    article.classList.add("card");
    category.innerHTML = `Category: ${question.category}`;
    questionText.innerHTML = question.question;
    showAnswerButton.textContent = "Show Answer";
    correctAnswer.classList.add("hidden");
    correctAnswer.innerHTML = `Correct Answer: ${question.correct_answer}`;
    article.classList.add(`difficulty-${question.difficulty.toLowerCase()}`);
    difficultyText.textContent = `Difficulty: ${question.difficulty}`;

    if (question.type === "multiple") {
      const answersList = document.createElement("ul");

      const correctAnswerItem = document.createElement("li");
      correctAnswerItem.innerHTML = `Correct Answer: ${question.correct_answer}`;
      correctAnswerItem.classList.add("correct-answer");
      answersList.appendChild(correctAnswerItem);

      question.incorrect_answers.forEach((incorrectAnswer) => {
        const incorrectAnswerItem = document.createElement("li");
        incorrectAnswerItem.innerHTML = `Incorrect Answer: ${incorrectAnswer}`;
        answersList.appendChild(incorrectAnswerItem);
      });

      article.appendChild(answersList);
    }

    showAnswerButton.addEventListener("click", function () {
      correctAnswer.classList.toggle("hidden");
    });

    article.appendChild(category);
    article.appendChild(questionText);
    article.appendChild(showAnswerButton);
    article.appendChild(correctAnswer);
    article.appendChild(difficultyText);

    return article;
  }
});