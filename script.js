//variable selects the new questions button
const generateQuestionBtn = document.querySelector("#new-questions-btn");

//variable selects the category h2 title
let questionCategory = document.querySelector("#category");

//variable selects the category h2 title
let question = document.querySelector("#question");
console.log(question);

// let updateDetails = (category) => {
//   questionCategory.innerText = category;
// };

// const generateQuestion() = {

// .then(result => {
//   updateDetails = console.log(result.results[0].category)
// });
// }

generateQuestionBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // questionCategory.innerText = "Kill Tony!"

  fetch(
    "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      questionCategory.innerText = result.results[0].category;
      question.innerText = result.results[0].question;

      const questionOptions = document.createElement("div");
      
      const choices = ["Option 1", "Option 2", "Option 3"];


      result.results[0].type;
    });
});

// console.log(generateQuestion)
// generateQuestion();

// fetch("https://randomuser.me/api")
//   .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse));

// function triviaGame(category, question, correct_answer) {

//   const article = document.createElement("article")
//   article.classList.add(".card")

//   const h2 = document.createElement("h2")
//   h2.innerText = category
//   article.append(h2)

//   const paragraph = document.createElement("p")
//   paragraph.innerText = question
//   article.append(paragraph)

//   const paragraph2 = document.createElement("p")
//   paragraph2.innerText = correct_answer
//   paragraph2.classList.add("hidden")
//   article.append(paragraph2)

//   const main = document.querySelector("main")

//   main.appendChild(article)

// fetch("https://opentdb.com/api.php?amount=10")
// .then(function(response) {
//     return response.json()
// })

// .then(function(data) {
//     console.log(Array.isArray(data.results))
//    for(let result of data.results){
//     console.log(result)
//     triviaGame(result.category, result.question, result.correct_answer)
//    }

// })
