"use strict";
let currentQuestion = 0;
let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Bernes-Lee",
        "answer_4": "Justin Bieber",
        "solution": 3


    },
    {
        "question": "Wer hat JS erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Bernes-Lee",
        "answer_4": "Justin Bieber",
        "solution": 3


    }
];


function init() {
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion == questions.length) {
        document.getElementById('endScreen').classList.remove('d-none');
}
    else {
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answ_1').innerHTML = question['answer_1'];
        document.getElementById('answ_2').innerHTML = question['answer_2'];
        document.getElementById('answ_3').innerHTML = question['answer_3'];
        document.getElementById('answ_4').innerHTML = question['answer_4'];
    }
}

function answer(selected) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selected.slice(-1);
    let idOfRightAnswer = `answ_${question['solution']}`;
    if (selectedQuestionNumber == question['solution']) {
        document.getElementById(selected).parentNode.classList.add('bg-success');
    }
    else {
        document.getElementById(selected).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    resetAnswerButtons();
}

function resetAnswerButtons() {
    document.getElementById('nextButton').disabled = true;
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answ_${i}`).parentNode.classList.remove('bg-danger');
        document.getElementById(`answ_${i}`).parentNode.classList.remove('bg-success');
    }
}