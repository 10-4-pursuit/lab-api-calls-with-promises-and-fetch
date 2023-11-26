const questionsURL =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"; //api request


  const answerButton = document.querySelector("#show-answers")
  console.log(answerButton)

  const triviaContainer = document.querySelector(".card")
  console.log(triviaContainer)

  const generateQuestionBtn = document.querySelector("#new-questions-btn"); //variable selects the new questions button
  console.log(generateQuestionBtn)

  const questionCategory = document.querySelector("#category"); //variable selects the category h2 title

  const questionText = document.querySelector("#question"); //variable selects the question area
  console.log(questionText)

// const text = "Who wrote the novel 'Fear And Loathing In Las Vegas'?";
// const escapedText = text.replace(/'/g, "\\'");
// console.log(escapedText); // O

fetch(questionsURL)
  .then((res) => res.json())
  .then((data) => {
    const result = data.results[0];
    const question = data.results[0].question;
    const category = data.results[0].category;
    const correctAnswer = data.results[0].correct_answer;
    const incorrectAnswers = data.results[0].incorrect_answers;

    incorrectAnswers.forEach((incorrectAnswer) => {
      console.log(incorrectAnswer);

    
      questionCategory.textContent = category 
      questionText.textContent = question



    });
    let answers = [correctAnswer].concat(incorrectAnswers);
    console.log(answers);

    for (let answer of answers){
      const newAnswerButton = document.createElement('button')
      newAnswerButton.textContent = answer;

      triviaContainer.appendChild(newAnswerButton)
      answerButton.style.display = 'none';
    }

  

   

    console.log(result);
  });
