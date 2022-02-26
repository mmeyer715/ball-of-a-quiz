var timer = document.querySelector("count");
var startBtn = document.querySelector("#start");

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