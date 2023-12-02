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




    // const gilmore = document.createElement("img")
    // gilmore.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
    // lakeMountain.append(gilmore)
    // gilmore.setAttribute("alt", "Image of a mountain in front of a lake.")
    // lakeMountain.append(gilmore)
    
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

})

// const section = document.querySelector("section");
// section.classList.add("featured")

// const lakeMountain = document.createElement("article")

// const gilmore = document.createElement("img")
// gilmore.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
// lakeMountain.append(gilmore)
// gilmore.setAttribute("alt", "Image of a mountain in front of a lake.")
// lakeMountain.append(gilmore)

// const headLine = document.createElement("h3")
// headLine.innerText = "Stop Planning"
// lakeMountain.append(headLine)

// <article class="card">
//   <h2>CATEGORY</h2>
//   <p>QUESTION</p>
//   <button>Show Answer</button>
//   <p class="hidden">CORRECT ANSWER</p>
// </article>