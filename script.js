var questions = [
    {
        question: "who is india's first president?",
        answers: [
            { answer: "abdul kalam", correct: false},
            { answer: "jawaharlal nehru", correct: true},
            { answer: "narendra modi", correct: false},
            { answer: "indira gandhi", correct: false}
        ]
    },
    {
        question: "Gandhi jayanthi is celebrated on which day?",
        answers: [
            { answer: "Oct 2nd", correct: true},
            { answer: "Aug 15th", correct: false},
            { answer: "sep 5th", correct: false},
            { answer: "jan 26th", correct: false}
        ]
    },
    {
        question: "which of the following is not an OOP's concept?",
        answers: [
            { answer: "Inheritence", correct: false},
            { answer: "Abstraction", correct: false},
            { answer: "Recursion", correct: true},
            { answer: "Polymorphism", correct: false}
        ]
    },
    {
        question: "which for the following CSS style is incorrect?",
        answers: [
            { answer: "box-shadow: .2em .2em .3em rgb(225,225,0), .1em .1em .3em rgb(25,25,220)", correct: false},
            { answer: "border: 1px solid hsl(0 0% 0%)", correct: false},
            { answer: "grid-template-columns: (1,1fr)", correct: false},
            { answer: "margin: 1px, 3px", correct: true}
        ]
    }
];

var score=0;
var crrIndex=0;
const qus=document.querySelector(".question");
const ansBtns=document.querySelector(".answers");
const nxtBtn=document.querySelector(".submit");


while(ansBtns.firstChild){
    ansBtns.removeChild(ansBtns.firstChild);
}

function startQuiz(){
    nxtBtn.style.visibility = "hidden";
    nxtBtn.innerHTML="next";
    crrIndex=0;
    score=0;
    displayQuestion();
}

function displayQuestion(){
    var question=questions[crrIndex];
    qus.innerHTML=(crrIndex+1) + ". " + question.question;
    question.answers.forEach((ans) => {
        const opt=document.createElement("button");
        opt.classList.add("option");
        opt.innerHTML=ans.answer;
        opt.dataset.correct = ans.correct;        
        ansBtns.appendChild(opt);
        opt.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(){
    if(this.dataset.correct == "true"){
        this.classList.add("correct");
        score++;
    }else{
        this.classList.add("incorrect");
    }
    Array.from(ansBtns.children).forEach((btn) => {
        if(btn.dataset.correct == "true"){
            btn.classList.add("correct");
        }
        btn.disabled = true;
    })
    nxtBtn.style.visibility = "visible";
    nxtBtn.addEventListener("click", next); 
}

function next(){
    while(ansBtns.firstChild){
            ansBtns.removeChild(ansBtns.firstChild);
        }
    if(crrIndex<questions.length){
        if(crrIndex<questions.length-1){
            crrIndex++;
            nxtBtn.style.visibility = "hidden";
            displayQuestion();
        }else{
            crrIndex++;
            nxtBtn.innerHTML="Restart";
            qus.innerHTML = 'you scored ' + score + ' out of ' + questions.length + "!";
        }
    }else{
        startQuiz();
    }    
}

startQuiz();