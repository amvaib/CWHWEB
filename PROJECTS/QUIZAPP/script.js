const questions = [
    {
        question: "Which is the largest animal in the world?",

        answers: [
            {text: "Shark" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },

    {
        question: "Which is the largest animal in the world?",

        answers: [
            {text: "Shark" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },

    {
        question: "Which is the largest animal in the world?",

        answers: [
            {text: "Shark" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },

    {
        question: "Which is the largest animal in the world?",

        answers: [
            {text: "Shark" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },

    {
        question: "Which is the largest animal in the world?",

        answers: [
            {text: "Shark" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },


];

const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".answerbtns");

const nextBtn = document.querySelector("#nextbtn");


let currentQuesIndex = 0;
let score =0;

function startQuiz(){
    currentQuesIndex =0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuesIndex];
    let questionNo = currentQuesIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("options");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click",selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;    
    }

    else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    })
    nextBtn.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;

    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
    
}

function handleNextBtn(){
    currentQuesIndex++;
    if(currentQuesIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}

nextBtn.addEventListener("click",()=>{
    if(currentQuesIndex<questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
})



startQuiz();
