'use strict';
/////////// Global variable///////////
var darkAnswer = [];
var lightAnswer = [];
var questions = [];
var picture = [];
var answers = [];
var questionBox = document.getElementById('question-box');
var buttonBox = document.getElementById('button-box')
var buttonOne = document.getElementById('button-a');
var buttonTwo = document.getElementById('button-b');
var answerBox = document.getElementById('answer')
var questionImage = document.getElementById('question-image');
var round = 0;

/////////////constructor/////////////

function Strings (question, dark, light, answer) {
  this.question = question;
  this.dark = dark;
  this.light = light;
  this.answer = answer;

  questions.push(this.question);
  darkAnswer.push(this.dark);
  lightAnswer.push(this.light);
  answers.push(this.answer);
  

}

//////////helper function////////
function hide(elem) {
  elem.style.display = 'none';
}
/////////////////////////////////
function instantiate() {
new Strings ('what is one?', 'b424ye', 'cool', 'your right');
new Strings ('what is tow?', 'b4ye', 'cool', 'your right');
new Strings ('what is three?', 'by1e', 'cool', 'your right');
new Strings ('what is four?', 'b3ye', 'cool', 'your right');
new Strings ('what is five?', 'bye3', 'cool', 'your right');
new Strings ('what is six?', 'by2e', 'cool', 'your right');
new Strings ('what is seven?', 'bye', 'cool', 'your right');
new Strings ('what is eight?', 'bye', 'cool', 'your right');
new Strings ('what is one?', 'bye', 'cool', 'your right');
new Strings ('what is one?', 'bye', 'cool', 'your right');
new Strings ('what is one?', 'bye', 'cool', 'your right');
}

function handleClick(event) {
  round++;
  renderQuestion();
}

console.log()
function renderQuestion() {
  questionBox.textContent = questions[round];
  buttonOne.textContent = lightAnswer[round];
  buttonTwo.textContent = darkAnswer[round];
  answerBox.textContent = answers[round];
  // questionImage.src = picture[round].src;
}


instantiate();
buttonBox.addEventListener('click', handleClick);
// buttonTwo.addEventListener('click', handleClick);
renderQuestion()

