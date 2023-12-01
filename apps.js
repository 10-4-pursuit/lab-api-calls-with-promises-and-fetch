function triviaGame(category, question, correct_answer) {


    const article = document.createElement("article")
    article.classList.add("card")
 
    const h2 = document.createElement("h2")
    h2.innerText = category
    article.append(h2)
 
    const paragraph = document.createElement("p")
    paragraph.innerText = question
    article.append(paragraph)
 
    const paragraph2 = document.createElement("p")
    paragraph2.innerText = correct_answer
    paragraph2.classList.add("hidden")   
    article.append(paragraph2)
 
    const main = document.querySelector("main")
    
    const button = document.createElement("button")
    button.innerText = "Show Answer"
    button.addEventListener("click", function (e) {
         paragraph2.classList.remove("hidden")
     })
     article.append(button)
     
 
 
 
    main.appendChild(article)
     
 }
 
 fetch("https://opentdb.com/api.php?amount=10")
 .then(function(response) {
     return response.json()
 })
 
 .then(function(data) {
     console.log(Array.isArray(data.results))
     console.log(data.results)
    for(let result of data.results){
     console.log(result)
     triviaGame(result.category, result.question, result.correct_answer)
    }
 
 });