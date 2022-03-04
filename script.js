// linking ids to js
var startBtn = document.getElementById('start');
var quizIntro = document.getElementById('intro');
var questionText = document.getElementById('quest-text');
var questionBox = document.getElementById('questions');
var optA = document.getElementById('a');
var optB = document.getElementById('b');
var optC = document.getElementById('c');
var optD = document.getElementById('d');
var submitBtn = document.getElementById('submit');
var playScore = document.getElementById('playScore');
var highscore = document.getElementById('highscores');
var userName = document.getElementById('user-name');
var userScore = document.getElementById('user-score');
var returnStart = document.getElementById('return');
var timer = document.getElementById('count');
var correctIncorrect = document.getElementById('correctIncorrect');
var answerBtns = document.getElementById('answer');
var endScore = document.getElementById('end-score');

// creating index to starting elements of quiz
let currentQuestion = 0;
var score = 0;
var secondsLeft = 90;
var timerId;

//  array of questions
var quizQuest = [
    {
        question: "JavaScript is a ________ ________.",
        answers: [
            {a: "scripting programming language",answer:true},
            {b: "object-oriented programming language",answer:false},
            {c: "procedural programming language",answer:false},
            {d: "logic programming language",answer:false},
        ]
    },
    {
        question: "Which of the following is not a promise object state?",
        answers: [
            {a: "rejected",answer:false},
            {b: "settled",answer:false},
            {c: "archived",answer:true},
            {d: "pending",answer:false},
        ]
    },
    {
        question: "Which of the following is a type of pop-up box in JavaScript?",
        answers: [
            {a: "confirm and",answer:false},
            {b: "prompt",answer:false},
            {c: "alert",answer:false},
            {d: "all of the above",answer:true},
        ]
    },
    {
        question: "What is a logical error?",
        answers: [
            {a: "Errors that come due to misuse of the command inside the HTML language.",answewr:false},
            {b: "Errors that occur due to the bad logic performed ona function with a different operation.",answer:true},
            {c: "Errors  that come up when loading a web page, like improper syntax errors.",answer:false},
            {d: "Errors that occur when the user fails to provide a valid user name/password required for access to a file/directory.",answer:false},
        ]
    },
    {
        question: "Which of the following character types declare an array?",
        answers: [
            {a: "var test = (];",answer:false},
            {b: "var test = ();",answer:false},
            {c: "var test = [];",answer:true},
            {d: "var test = {};",answer:false},
        ]
    },
    {
        question: "Which of the following is not a loop type in JavaScript?",
        answers: [
            {a: "else loop",answer:true},
            {b: "while loop",answer:false},
            {c: "for loop",answer:false},
            {d: "do...while loop",answer:false},
        ]
    },
    {
        question: "What is the pop method for arrays in JavaScript?",
        answers: [
            {a: "You can add a value as the last item of an array",answer:false},
            {b: "You can remove the last item of an array",answer:true},
            {c: "You can sort the items in an array",answer:false},
            {d: "You can remove the first item of an array",answer:false}
        ]
    },
    {
        question: "Which tag is used to link the JavaScript file inside of the HTML?",
        answers: [
            {a: "javascript",answer:false},
            {b: "js",answer:false},
            {c: "script",answer:true},
            {d: "java",answer:false},
        ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        answers: [
            {a: ".getAttribute()",answer:false},
            {b: ".getElementsByClassName()",answer:false},
            {c: ".getElementById()",answer:false},
            {d: "both b and c",answer:true},
        ]
    },
    {
        question: "Which is not a data type in JavaScript?",
        answers: [
            {a: "boolean",answer:false},
            {b: "valueless",answer:true},
            {c: "string",answer:false},
            {d: "undefined",answer:false},
        ]
    },
    {
        question: "What does the operator '===' translate to?",
        answers: [
            {a: "returns the type of variable",answer:false},
            {b: "the values are equal only in value",answer:false},
            {c: "compares the inequalities of two operads.",answer:false},
            {d: "the values are equal in value and data type",answer:true},
        ]
    }
];

function countdown () {
    secondsLeft--
    timer.innerHTML = secondsLeft
    if(secondsLeft === 0){
        clearInterval(timerId)
    }
}

function checkAns(event) {
    event.preventDefault();
        console.log(event.target.dataset.answer);
       if (event.target.dataset.answer === "true") {
           playScore.innerHTML = score += 10
           correctIncorrect.innerHTML = "Correct!"
           
       }
       else {
           secondsLeft -= 10 ;
           correctIncorrect.innerHTML = "Incorrect!"
       }
       currentQuestion++;
       nextQuestion();
}



function startQuiz() {
    quizIntro.classList.add('hide');
    questionBox.classList.remove('hide');
    currentQuestion = 0;
    timer.innerHTML = secondsLeft
    timerId = setInterval(countdown, 1000)

    questionText.innerHTML = quizQuest[currentQuestion].question;

    optA.innerHTML = quizQuest[currentQuestion].answers[0].a;
    optA.dataset.answer = quizQuest[currentQuestion].answers[0].answer;
    optA.onclick = checkAns
    
    optB.innerHTML = quizQuest[currentQuestion].answers[1].b;
    optB.dataset.answer = quizQuest[currentQuestion].answers[1].answer;
    optB.onclick = checkAns

    optC.innerHTML = quizQuest[currentQuestion].answers[2].c;
    optC.dataset.answer = quizQuest[currentQuestion].answers[2].answer;
    optC.onclick = checkAns

    optD.innerHTML = quizQuest[currentQuestion].answers[3].d;
    optD.dataset.answer = quizQuest[currentQuestion].answers[3].answer;
    optD.onclick = checkAns
}

function nextQuestion() {
    if(currentQuestion <= 9){
        questionText.innerHTML = quizQuest[currentQuestion].question;

        optA.innerHTML = quizQuest[currentQuestion].answers[0].a;
        optA.dataset.answer = quizQuest[currentQuestion].answers[0].answer;
        optA.onclick = checkAns;
        
        optB.innerHTML = quizQuest[currentQuestion].answers[1].b;
        optB.dataset.answer = quizQuest[currentQuestion].answers[1].answer;
        optB.onclick = checkAns;

        optC.innerHTML = quizQuest[currentQuestion].answers[2].c;
        optC.dataset.answer = quizQuest[currentQuestion].answers[2].answer;
        optC.onclick = checkAns;

        optD.innerHTML = quizQuest[currentQuestion].answers[3].d;
        optD.dataset.answer = quizQuest[currentQuestion].answers[3].answer;
        optD.onclick = checkAns;
    }
    else {
        stopQuiz();
    }
}

function stopQuiz() {
    answerBtns.classList.add('hide');
    submitBtn.classList.remove('hide');
    endScore.classList.remove('hide');
    correctIncorrect.innerHTML = "";
    questionText.innerHTML = "Congratulations! You've completed the quiz! Please enter your initials below."
    submitBtn.onclick = logHighscores;
}

function logHighscores() {
    endScore.classList.add('hide');
    submitBtn.classList.add('hide');
    questionBox.classList.add('hide');
}


