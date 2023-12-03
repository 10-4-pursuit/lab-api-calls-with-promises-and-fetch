document.getElementById('triviaForm').addEventListener("submit", function (event) {event.preventDefault();

    // fetchTriviaQuestions();
    const selectedCategory = document.getElementById("category").value;
    fetchTriviaQuestions(selectedCategory);
});

// function fetchtriviaQuestions(category) {
//     const apiUrl = `https://opentdb.com/api.php?amount=10&category=${encodeURI(category)}`;
//     fetch(apiUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             displayTriviaQuestions(data.results);
//         })
//         .catch(function (error) {
//             console.log("Error fetching trivia question:", error);
//         });
// }

function fetchTriviaQuestions() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayTriviaQuestions(data.results);
      })
      .catch(function (error) {
        console.log("Error fetching trivia questions:", error);
      });
  }

function displayTriviaQuestions(questions) {
    const triviaContainer = document.getElementById("triviaContainer");
    triviaContainer.innerHTML = "";

    questions.forEach(function (question) {
        const card = createCard(question);
        triviaContainer.appendChild(card);
    });
}

function createCard(question) {
    const card = document.createElement("article");
    card.classList.add("card");

    const category = document.createElement("h2");
    category.textContent = question.category;

    const difficulty = document.createElement("p");
    difficulty.textContent = `Difficulty: ${question.difficulty}`;
    card.appendChild(difficulty);

    const questionText = document.createElement("p");
    questionText.textContent = question.question;

    const showAnswerButton = document.createElement("button");
    showAnswerButton.textContent = "Show Answer";
    showAnswerButton.addEventListener("click", function () {
        revealAnswer(card);
    });

    const answer = document.createElement("p");
    answer.classList.add("hidden");
    answer.textContent = question.correct_answer;

    const answersContainer = document.createElement("div");

    question.incorrect_answers.forEach(function (answer) {
        const answerElement = document.createElement("p");
        answerElement.textContent = answer;
        answersContainer.appendChild(answerElement);
    });

    const correctAnswer = document.createElement("p");
    correctAnswer.classList.add("hidden");
    correctAnswer.textContent = question.correct_answer;
    answersContainer.appendChild(correctAnswer);

    card.appendChild(category);
    card.appendChild(questionText);
    card.appendChild(showAnswerButton);
    card.appendChild(answersContainer);

    return card;
}

function revealAnswer(card) {
    const correctAnswer = card.querySelector(".hidden");
    correctAnswer.style.display = "block";

    correctAnswer.style.backgroundColor = "#7FFF7F";
}




// function triviaGame({ category, question, correct_answer}) {

// }
// fetch("https://opentdb.com/api.php?amount=10")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// });

// const category = document.createElement("h2");
// const question = document.createElement("p");
// const correct_answer = document.createElement("p");

{/* <article class="card">
        <h2>CATEGORY</h2>
        <p>QUESTION</p>
        <button>Show Answer</button>
        <p class="hidden">CORRECT ANSWER</p>
      </article>  */}

/*{

for(let i = 0; i < 10; i ++) {

} }*/