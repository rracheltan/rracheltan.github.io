const questions = [
  {
    question:"Who was the first ever KPOP group?",
    answers:[
      {text:'Seo Taiji and Boys', correct: true},
      {text:'H.O.T', correct: false},
      {text:'Shinhwa', correct: false},
      {text:'Diva', correct: false},
    ]
  },
  {
    question: "Who was the first KPOP group to have a lightstick?",
    answers: [
      {text:'EXO', correct: false},
      {text:'BigBang', correct: true},
      {text:'Super Junior', correct: false},
      {text:'2pm', correct: false},
    ]
  },
  {
    question: "Which was the first KPOP group to perform at the GRAMMYs?",
    answers: [
      {text:'Blackpink', correct: false},
      {text:'Seventeen', correct: false},
      {text:'BTS', correct: true},
      {text:'Stray Kids', correct: false},
    ]
  },
  {
    question: "What does the group BTOB stand for?",
    answers: [
      {text:'Born to Beat', correct: true},
      {text:'Born to Big', correct: false},
      {text:'Born to Beloved', correct: false},
      {text:'Born to Believe', correct: false},
    ]
  },
  {
    question: "What is the fandom name of Twice?",
    answers: [
      {text:'Uaena', correct: false},
      {text:'ONCE', correct: true},
      {text:'Carat', correct: false},
      {text:'Joyful', correct: false},
    ]
  },
  {
    question: "How many members do the group SEVENTEEN have?",
    answers: [
      {text:'10', correct: false},
      {text:'13', correct: true},
      {text:'8', correct: false},
      {text:'12', correct: false},
    ]
  },
  {
    question: "Who is the only KPOP idol who trained for 1 day before debut?",
    answers: [
      {text:'MAMAMOO Solar', correct: false},
      {text:'Girls Day Yura', correct: false},
      {text:'Twice Sana', correct: false},
      {text:'LOONA Olivia Hye', correct: true},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz();
