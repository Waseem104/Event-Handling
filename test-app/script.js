const quizData=[
    {
        question: "What is capital of france?",
        options: ["Paris","London","Berlin","Madrid"],
        correct: 0,
    },
    {
        question: "Which is the Largest Planet in Our Solar System?",
        options: ["Earth","Mars","Jupiter","Saturn"],
        correct: 2,
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles","Jane","William","Mark"],
        correct: 2,
    },
    {
        question: "What is square root of 64?",
        options: ["6","7","8","9"],
        correct: 2,
    },
]

let currentQuestionIndex=0;
let score=0;

const questionEl=document.getElementById("question");
const options=document.querySelectorAll(".option");
const submit=document.getElementById("submit-btn");
const result=document.getElementById("result");
const scoreEl=document.getElementById("score");
const total=document.getElementById("total");


function loadQuestion(){
  const currentQuestion=quizData[currentQuestionIndex];
  questionEl.textContent=currentQuestion.question;

  options.forEach((option,index)=>{
    document.getElementById("option"+index).textContent=
    currentQuestion.options[index];

    option.checked=false;
  });
}
loadQuestion();

submit.addEventListener("click",checkAnswer);
// --------checkAnswer function
function checkAnswer(){
    let selectedOption=document.querySelector('input[name="option"]:checked');
    console.log(selectedOption);
    

    if(!selectedOption){
        alert("Please select the option");
        return;
    }
    let answer=selectedOption.value;
    if(answer==quizData[currentQuestionIndex].correct){
        score++;
    }
    currentQuestionIndex++;
    if(currentQuestionIndex<quizData.length){
        loadQuestion();
    }else{
        showResult();
    }
}

// ---------showResult function
function showResult(){
    result.classList.remove("hidden");
    scoreEl.textContent=score;
    total.textContent=quizData.length;
    document.getElementById("quiz").classList.add("hidden");
}