const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const audio1 = document.getElementById("correct_audio");
const audio2 = document.getElementById("wrong_audio");


var answer = 0;

function generate_equation() {
    var num1 = Math.floor(Math.random() * 51);
    var num2 = Math.floor(Math.random() * 51);
    var dummyAnswer1 = Math.floor(Math.random() * 51);
    var dummyAnswer2 = Math.floor(Math.random() * 51);
    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 / num2;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    for (i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", () => {
    if (option1.innerHTML == answer) {
        audio1.play();
        generate_equation();
    }
    else {
        audio2.play();
    }
});
option2.addEventListener("click", () => {
    if (option2.innerHTML == answer) {
        audio1.play();
        generate_equation();
    }
    else {
        audio2.play();
    }
});
option3.addEventListener("click", () => {
    if (option3.innerHTML == answer) {
        audio1.play();
        generate_equation();
    }
    else {
        audio2.play();
    }
});

generate_equation();