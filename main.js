fetch(`https://opentdb.com/api.php?amount=10`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let trivQ = 0; trivQ < data.results.length; trivQ++) {
            createTriviaQuestion(data.results[trivQ]);
        }
    })
    .catch(console.error)

function createTriviaQuestion(trivQ) {
    const card = document.createElement("article");
    card.className = "card"
    const category = document.createElement("h2");
    category.textContent = trivQ.category;
    const question = document.createElement("p");
    question.textContent = trivQ.question;
    const ansButton = document.createElement("button");
    ansButton.textContent = "Show Answer";
    const correctAns = document.createElement("p");
    correctAns.className = "hidden"
    correctAns.textContent = trivQ.correct_answer;

    ansButton.addEventListener("click", (event) => {
        event.preventDefault();
        correctAns.classList.remove("hidden");
    })

    card.append(
        category,
        question,
        ansButton,
        correctAns
    )

    document.querySelector("main").append(card);
}