const questionsURL =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"; //api request
const generateQuestionBtn = document.querySelector("#new-questions-btn"); //variable selects the new questions button
const questionCategory = document.querySelector("#category"); //variable selects the category h2 title
let questionText = document.querySelector("#question"); //variable selects the question area
const answersElement = document.querySelector("button"); //variable selects the show answer button
const resultsElement = document.querySelector(".hidden"); // variable selects the hidden section with the correct answers

let currentQuestion = 0; //begins at the first question at index 0
let score = 0; //keeps tab on the score

fetch(questionsURL)
  .then((res) => res.json())
  .then((data) => {
    const questions = data.results;

    displayQuestion(questions[currentQuestion]);

    generateQuestionBtn.addEventListener("click", (event) => {
      event.preventDefault
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(questions[currentQuestion]);
      } else {
        resultsElement.textContent = `You answered ${score} out of 10 questions correctly!`;
      }
    });
  });

function displayQuestion(question) {
  questionText.innerText = question.question; //this is the text for the question
  questionCategory.innerText = question.category
  const correctAnswer = question.correct_answer;
  const incorrectAnswers = question.incorrect_answers;

  // questionCategory.innerText = result.results[0].category;
  //       question.innerText = result.results[0].question;

  question.textContent = questionText;

  answersElement.innerHTML = "";

  const answers = [correctAnswer].concat(incorrectAnswers); //?
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5); //?

  for (const answer of shuffledAnswers) {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;

    answerButton.addEventListener("click", (event) => {
      resultsElement.style.display = "block";
      if (answer === correctAnswer) {
        resultsElement.textContent = "Correct!";
      } else {
        resultsElement.textContent = `Incorrect. The correct answer is ${correctAnswer}`;
      }
      // resultsElement.style.display = "none";
    });

    answersElement.appendChild(answerButton);
  }
}

// generateQuestionBtn.addEventListener("click", (event) => {
//   event.preventDefault();

//       questionCategory.innerText = result.results[0].category;
//       question.innerText = result.results[0].question;

//       const card = document.querySelector(".card")
//       const questionOptions = document.createElement("div");
//       questionOptions.id = ('question-options')
//       question.insertAdjacentElement('afterend', questionOptions)

//       const label = document.createElement('label');
//       label.textContent = 'Who are you?';
//       label.setAttribute('for', 'option1')

//       const optionElement = document.createElement("input");
//       optionElement.type = "radio";
//       optionElement.id = "option1";
//       optionElement.name = "question";

//       label.appendChild(optionElement)

//       // optionElement.value = "option1";
//       optionElement.label = "option1?"
//       questionOptions.appendChild(label)

//       // document.body.removeChild(optionElement)

//       // questionOptions.parentNode.removeChild(questionOptions)

//     });
// });

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

// let updateDetails = (category) => {
//   questionCategory.innerText = category;
// };

// const generateQuestion() = {

// .then(result => {
//   updateDetails = console.log(result.results[0].category)
// });
// }
