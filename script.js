//  pulling elements from html and creating their vars
var timer = document.querySelector("count");
var startBtn = document.querySelector("#start");

//  creating quiz questions
var quizQuest = [
    {
        questions: "JavaScript is a ________ ________.",
        options: {
            a: "scripting programming language",
            b: "object-oriented programming language",
            c: "procedural programming language",
            d: "logic programming language",
        },
        ans: "a"
    },
    {
        questions: "Which of the following is not a promise object state?",
        options: {
            a: "rejected",
            b: "settled",
            c: "archived",
            d: "pending",
        },
        ans: "c"
    },
    {
        questions: "",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        ans: ""
    },
    {
        questions: "",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        ans: ""
    },
    {
        questions: "",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        ans: ""
    },
    {
        questions: "",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        ans: ""
    },
    {
        questions: "",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        ans: ""
    },
    {
        questions: "",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        ans: ""
    },
    {
        questions: "",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        ans: ""
    },
    {
        questions: "Which is not a data type in JavaScript?",
        options: {
            a: "boolean",
            b: "valueless",
            c: "string",
            d: "undefined",
        },
        ans: "b"
    },
    {
        questions: "What does the operator "===" translate to?",
        options: {
            a: "returns the type of variable",
            b: "the values are equal only in value",
            c: "compares the inequalities of two operads.",
            d: "the values are equal in value and data type",
        },
        ans: "d"
    }
];

// creating timer function
function startTimer() {
    timer.textContent = count;
}

// hide intro and start quiz

function hideIntro() {
    var titleIntro = document.getElementById("container");
    if (titleIntro.style.display === "none") {
        titleIntro.style.display = "block";
    } else {
        titleIntro.style.display = "none";
    }
}    