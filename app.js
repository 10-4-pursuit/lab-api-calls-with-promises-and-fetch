function createQuestion({ category, question, correct_answer}) {

const article = document.createElement("article");
    article.classList.add("card");   

const h2 = document.createElement("h2");
    h2.textContent = category;
    article.append(h2)
  
const paragraph = document.createElement("p");
    paragraph.textContent = question;   
    article.append(paragraph)
    
const button = document.createElement("button")
    button.textContent = "Show Answer";
    button.addEventListener("click", (event) => {
        cAnswer.classList.remove("hidden")
    }) 
    article.append(button)
   const cAnswer = document.createElement("p")
   cAnswer.classList.add("hidden")
   cAnswer.textContent = correct_answer;
   article.append(cAnswer)
   const main = document.querySelector("main")
   main.append(article)
}
  const button = document.querySelector("form button")
  button.addEventListener("click", (event) => {
    event.preventDefault();
    
fetch("https://opentdb.com/api.php?amount=10")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (question of data.results) {
        console.log(question)
        createQuestion(question)
    }
  })  
  .catch(function(error) {
    console.log(error);
  });
    
  });
