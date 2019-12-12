'use strict';
/////////// Global variable///////////
var darkAnswer = [];
var lightAnswer = [];
var questions = [];
var questionBox = document.getElementById('question-box');
var buttonBox = document.getElementById('button-box')
var buttonOne = document.getElementById('button-a');
var buttonTwo = document.getElementById('button-b');
var round = 0;

/////////////constructor/////////////

function Strings (question, dark, light) {
  this.question = question;
  this.dark = dark;
  this.light = light;

  questions.push(this.question);
  darkAnswer.push(this.dark);
  lightAnswer.push(this.light);
}

//////////helper function////////
function hide(elem) {
  elem.style.display = 'none';
}
/////////////////////////////////
function instantiate() {
new Strings ('baby yoda', 'b424ye', 'cool');
new Strings ('hi2', 'b4ye', 'cool');
new Strings ('hi3', 'by1e', 'cool');
new Strings ('hi4', 'b3ye', 'cool');
new Strings ('hi5', 'bye3', 'cool');
new Strings ('hi6', 'by2e', 'cool');
new Strings ('hi7', 'bye', 'cool');
new Strings ('hi', 'bye', 'cool');
new Strings ('hi', 'bye', 'cool');
new Strings ('hi', 'bye', 'cool');
new Strings ('hi', 'bye', 'cool');
}

function handleClick(event) {
  round++;
  renderQuestion();
}


function renderQuestion() {
  questionBox.textContent = questions[round];
  buttonOne.textContent = lightAnswer[round];
  buttonTwo.textContent = darkAnswer[round];
}




instantiate();
buttonBox.addEventListener('click', handleClick);
// buttonTwo.addEventListener('click', handleClick);
renderQuestion()

