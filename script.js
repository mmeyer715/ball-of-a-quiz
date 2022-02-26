//  pulling elements from html and creating their vars
var timer = document.querySelector("count");
var startBtn = document.querySelector("#start");
var resultsBox = document.getElementById("#submit");
var highscore = document.getElementById("#highscores");

//  creating quiz questions
var quizQuest = [
    {
        question: "JavaScript is a ________ ________.",
        answers: {
            a: "scripting programming language",
            b: "object-oriented programming language",
            c: "procedural programming language",
            d: "logic programming language",
        },
        correct: "a"
    },
    {
        question: "Which of the following is not a promise object state?",
        answers: {
            a: "rejected",
            b: "settled",
            c: "archived",
            d: "pending",
        },
        correct: "c"
    },
    {
        question: "Which of the following is a type of pop-up box in JavaScript?",
        answers: {
            a: "confirm and",
            b: "prompt",
            c: "alert",
            d: "all of the above",
        },
        correct: "d"
    },
    {
        question: "What is a logical error?",
        answers: {
            a: "Errors that come due to misuse of the command inside the HTML language.",
            b: "Errors that occur due to the bad logic performed ona function with a different operation.",
            c: "Errors  that come up when loading a web page, like improper syntax errors.",
            d: "Errors that occur when the user fails to provide a valid user name/password required for access to a file/directory.",
        },
        correct: "b"
    },
    {
        question: "Which of the following character types declare an array?",
        answers: {
            a: "var test = (];",
            b: "var test = ();",
            c: "var test = [];",
            d: "var test = {};",
        },
        correct: "c"
    },
    {
        question: "Which of the following is not a loop type in JavaScript?",
        answers: {
            a: "else loop",
            b: "while loop",
            c: "for loop",
            d: "do...while loop",
        },
        correct: "a"
    },
    {
        question: "What is the pop method for arrays in JavaScript?",
        answers: {
            a: "You can add a value as the last item of an array",
            b: "You can remove the last item of an array",
            c: "You can sort the items in an array",
            d: "You can remove the first item of an array",
        },
        correct: "b"
    },
    {
        question: "Where do we put the JavaScript inside of the HTML?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<script>",
            d: "<java>",
        },
        correct: "c"
    },
    {
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        answers: {
            a: ".getAttribute()",
            b: ".getElementsByClassName()",
            c: ".getElementById()",
            d: "both b and c",
        },
        correct: "d"
    },
    {
        question: "Which is not a data type in JavaScript?",
        answers: {
            a: "boolean",
            b: "valueless",
            c: "string",
            d: "undefined",
        },
        correct: "b"
    },
    {
        question: "What does the operator "===" translate to?",
        answers: {
            a: "returns the type of variable",
            b: "the values are equal only in value",
            c: "compares the inequalities of two operads.",
            d: "the values are equal in value and data type",
        },
        correct: "d"
    }
];


// creating timer function
function startTimer() {
    timer.textContent = count;
};


// generating quiz questions
function generateQuiz() {
    // holds user output
};
// generating your results
function yourResults() {
    
};

// storing the to the leaderboard
function leaderboard() {

};

generateQuiz();

// hide intro and start quiz

function hide() {
    var hide = document.getElementById("hidden");
    hide.classList.remove("intro");
    hide.classList.add("intro.b h1 h3 button")
    // var titleIntro = document.getElementsByClassName("intro");
    // if (titleIntro.style.display === "none") {
    //     titleIntro.style.display = "block";
    // } else {
    //     titleIntro.style.display = "none";
    // }
};
