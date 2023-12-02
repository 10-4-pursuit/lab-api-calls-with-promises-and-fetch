document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    fetchTrivia();
  })


function fetchTrivia() {
    fetch('https://opentdb.com/api.php?amount=12')
      .then(response => response.json())
      .then(data => displayTrivia(data.results))
      .catch(error => console.error('Error fetching API:', error));
  }
  
  
  function displayTrivia(results) {
    const main = document.querySelector('main');
    const existingTriviaContainer = document.getElementById('trivia-container');
  if (existingTriviaContainer) {
    existingTriviaContainer.remove();
  }

  const triviaContainer = document.createElement('div');
  triviaContainer.id = 'trivia-container';
  triviaContainer.classList.add("centered")

  
    results.forEach(result => {
      const card = createTriviaCard(result);
      triviaContainer.appendChild(card);
    });

    main.appendChild(triviaContainer)

  }
  

  function createTriviaCard(result) {
    const card = document.createElement('article');
    card.classList.add('card');
  
    // Elements to copy format in readme
    const h2Element = document.createElement('h2');
    h2Element.textContent = result.category;
  
    const questionElement = document.createElement('p');
    questionElement.textContent = result.question;
  
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Show Answer';
    buttonElement.addEventListener('click', () => GiveAnswer(card));
  
    const answerElement = document.createElement('p');
    answerElement.classList.add('hidden');
    answerElement.textContent = result.correct_answer;


     
  const difficultyLevel = result.difficulty.toLowerCase();
  if (difficultyLevel === 'easy') {
    card.style.borderColor = 'green';
  } else if (difficultyLevel === 'medium') {
    card.style.borderColor = 'yellow';
  } else {
    card.style.borderColor = 'red';
  }

    card.appendChild(h2Element);
    card.appendChild(questionElement);
    card.appendChild(buttonElement);
    card.appendChild(answerElement);
  
    return card;
  }
  
  
  function GiveAnswer(card) {
    const answerElement = card.querySelector('.hidden');
    answerElement.classList.toggle('hidden');
  }

 

