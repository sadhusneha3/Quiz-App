const questions = [
    {
        question: "Who is the father of Computers?",
        answers: [
            { text: "James Gosling", correct:false},
            { text: "Charles Babbage", correct:true},
            { text: "Dennis Ritchie", correct:false},
            { text: "Bjarne Stroustrup", correct:false},
        ]
    },
    {
        question: "What is the full form of CPU?",
        answers: [
            { text: "Computer Processing Unit", correct:false},
            { text: "Computer Principle Unit", correct:false},
            { text: "Central Processing Unit", correct:true},
            { text: "Control Processing Unit", correct:false},
        ]
    },
    {
        question: " Which of the following is the first neural network computer?",
        answers: [
            { text: "AN", correct:false},
            { text: "AM", correct:false},
            { text: "RFD", correct:false},
            { text: "SNARC", correct:true},
        ]
    },
    {
        question: "Which unit of the computer is considered as the brain of the computer ?",
        answers: [
            { text: "Memory Unit", correct:false},
            { text: "Input Unit", correct:false},
            { text: "CPU", correct:true},
            { text: "Output Unit", correct:false},
        ]
    },
    {
        question: "Which of the following is an input device of a computer ?",
        answers: [
            { text: "Speaker", correct:false},
            { text: "Printer", correct:false},
            { text: "Scanner", correct:true},
            { text: "Monitor", correct:false},
        ]
    },
    {
        question:"A computer on the Internet that uses HTTP protocol is known as: ?",
        answers: [
            { text: "LAN", correct:false},
            { text: "Web Server", correct:true},
            { text: "WAP", correct:false},
            { text: "WAN", correct:false},
        ]
    },
    {
        question:"Which of the following is the smallest visual element on a video monitor?",
        answers: [
            { text: "Character", correct:false},
            { text: "Pixel", correct:true},
            { text: "Byte", correct:false},
            { text: "Bit", correct:false},
        ]
    },
    {
        question:"Which of the following is an input device used to enter motion data in computers or other electronic devices ?",
        answers: [
            { text: "Monitor", correct:false},
            { text: "Trackball", correct:true},
            { text: "Plotter", correct:false},
            { text: "Joystick", correct:false},
        ]
    },
    {
        question:"Which of the following is not considered hardware?",
        answers: [
            { text: "Operating system", correct:true},
            { text: "CPU", correct:false},
            { text: "Keyboard", correct:false},
            { text: "Hard disk", correct:false},
        ]
    },
    {
        question:"In the field of information and communication technology, what is the full form of FDD ?",
        answers: [
            { text: "Folder Disk Drive ", correct:false},
            { text: "Floppy Disk Drive ", correct:true},
            { text: "Folder Data Drive ", correct:false},
            { text: "Floppy Data Drive ", correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
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
        button.addEventListener("click",selectAnswer);
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
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Submit";
    nextButton.style.display = "block";
    nextButton.onclick = function() {
        window.location.href = "feedback.html";
    };
    //nextButton.classList.add("redirect-button"); // Add a class for redirection
}

// function redirectToPage(url) {
//     window.location.href = url;
// }

// document.addEventListener("click", function(event) {
//     if (event.target.classList.contains("redirect-button")) {
//         redirectToPage("feedback.html"); // Replace with your desired URL
//     }
// });

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
})

// Feedback form handling


startQuiz();