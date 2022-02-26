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
        questions: "Which of the following is a type of pop-up box in JavaScript?",
        options: {
            a: "confirm and",
            b: "prompt",
            c: "alert",
            d: "all of the above",
        },
        ans: "d"
    },
    {
        questions: "What is a logical error?",
        options: {
            a: "Errors that come due to misuse of the command inside the HTML language.",
            b: "Errors that occur due to the bad logic performed ona function with a different operation.",
            c: "Errors  that come up when loading a web page, like improper syntax errors.",
            d: "Errors that occur when the user fails to provide a valid user name/password required for access to a file/directory.",
        },
        ans: "b"
    },
    {
        questions: "Which of the following character types declare an array?",
        options: {
            a: "var test = (];",
            b: "var test = ();",
            c: "var test = [];",
            d: "var test = {};",
        },
        ans: "c"
    },
    {
        questions: "Which of the following is not a loop type in JavaScript?",
        options: {
            a: "else loop",
            b: "while loop",
            c: "for loop",
            d: "do...while loop",
        },
        ans: "a"
    },
    {
        questions: "What is the pop method for arrays in JavaScript?",
        options: {
            a: "You can add a value asthe last item of an array",
            b: "You can remove the last item of an array",
            c: "You can sotr the items in an array",
            d: "You can remove the first item of an array",
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