// api for the trivia questions

const url =
  "https://opentdb.com/api.php?amount=10";

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTriviaQuestions(data.results))
    .catch((error) => console.log("Error loading trivia questions", error));
});

// display trivia questions

const displayTriviaQuestions = (questions) => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  questions.forEach((question) => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `
     <h2>${question.category}</h2>
     <p>${question.question}</p>
     <button>Show Answer</button>
     <p class="hidden">Correct Answer: ${question.correct_answer}</p>`;

     card.querySelector("button").addEventListener("click", () => {
       card.querySelector(".hidden").classList.toggle("hidden");
     })
     main.appendChild(card);
  });
};
