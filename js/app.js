'use strict';
/////////// Global variable///////////
var darkAnswer = [];
var lightAnswer = [];
var questions = [];
var picture = [];
var answers = [];
var all = [];
var questionBox = document.getElementById('question-box');
var buttonBox = document.getElementById('button-box')
var buttonOne = document.getElementById('button-a');
var buttonTwo = document.getElementById('button-b');
var answerBox = document.getElementById('answer')
var questionImage = document.getElementById('question-image');
var round = 0;
var score = 0;

/////////////constructor/////////////

function Strings (question, dark, light, answer, src, name) {
  this.question = question;
  this.dark = dark;
  this.light = light;
  this.answer = answer;
  this.src = `../image/playImage/${src}.gif`;
  // this.name =
  questions.push(this.question);
  darkAnswer.push(this.dark);
  lightAnswer.push(this.light);
  answers.push(this.answer);
  picture.push(this.src);
  
  // all.push(this)

}

//////////helper function////////
function hide(elem) {
  elem.style.display = 'none';
}
/////////////////////////////////
function instantiate() {
  new Strings ('what is this robot?', 'BB8', 'R2D2', 'R2D2', 'bb8');
  new Strings ('Which group are these guys belong in?', 'rebellion', 'empire', 'empire', 'rebel');
  new Strings ('Is this the wise Yoda or 50 year old Yoda?', 'wise', '50', '50', 'baby-yoda');
  new Strings ('whos is the father of Luke', 'Enoch', 'Darth Vader', 'Darth Vader', 'darthVader');
  new Strings ('Mandalorian land on to the new planet and had found yoda would he save him?', 'bye3', 'cool', 'your right');
  new Strings ('what is six?', 'by2e', 'cool', 'your right');
new Strings ('what is seven?', 'bye', 'cool', 'your right');
new Strings ('what is eight?', 'bye', 'cool', 'your right');
new Strings ('what is one?', 'bye', 'cool', 'your right');
new Strings ('what is one?', 'bye', 'cool', 'your right');
new Strings ('what is one?', 'bye', 'cool', 'your right');
}

function handleClick(event) {
  var clickButton = event.target.textContent;
  console.log(clickButton)
  if (clickButton === answers[round]) {
    renderAnswer();
    score++
  } else {
    answerBox.textContent = 'you are wrong!'
    score--;
  }
  round++;
  renderQuestion();
  console.log(score)
}

console.log()
function renderQuestion() {
  questionBox.textContent = questions[round];
  buttonOne.textContent = lightAnswer[round];
  buttonTwo.textContent = darkAnswer[round];
  questionImage.src = picture[round];
}

function renderAnswer() {
  answerBox.textContent = 'you are right!';
}


// var buttonA = document.createElement('p');
// var buttonB = document.createElement('p');
// function createButton() {
//   buttonA = document.createElement('p');
//   buttonB = document.createElement('p');
// }
// function makeButton() {
//   buttonA.textContent = darkAnswer[round];
//   buttonBox.appendChild(buttonA)
//   buttonB.textContent = lightAnswer[round];
//   buttonBox.appendChild(buttonB);
// }



// function renderAnswer() {
  //   if ()
  // }
  
  
  instantiate();
  buttonOne.addEventListener('click', handleClick);
  buttonTwo.addEventListener('click', handleClick);
  console.log(picture[round]);
  // buttonTwo.addEventListener('click', handleClick);
  // console.log(all[round].question)
  renderQuestion();
  // makeButton();
  