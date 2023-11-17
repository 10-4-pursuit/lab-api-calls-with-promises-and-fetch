fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let trivia = 0; trivia < data.results.length; trivia++) {
            createTriviaQuestion(data.results[trivia]);
        }
    })
    .catch(console.error)

function createTriviaQuestion(trivia) {
    const card = document.createElement("article");
    card.className = "card"
    
    const category = document.createElement("h2");
    category.textContent = trivia.category;
    
    const question = document.createElement("p");
    question.textContent = trivia.question;
    
    const ansButton = document.createElement("button");
    ansButton.textContent = "Show Answer";
    
    const correctAns = document.createElement("p");
    correctAns.className = "hidden"
    correctAns.textContent = trivia.correct_answer;
    
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