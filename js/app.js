'use strict';
/////////// Global variable///////////
var buttonContentOne = [];
var buttonContentTwo = [];
var questions = [];
var picture = [];
var answers = [];
var questionBox = document.getElementById('question-box');
var buttonOne = document.getElementById('button-a');
var buttonTwo = document.getElementById('button-b');
var answerBox = document.getElementById('answer');
var questionImage = document.getElementById('question-image');
var round = 0;
var score = 0;
var name;
var redCounterOne = document.getElementById('red-counter1');
var redCounterTwo = document.getElementById('red-counter2');
var redCounterThree = document.getElementById('red-counter3');
var redCounterFour = document.getElementById('red-counter4');
var lightSaberYoda = document.getElementById('yoda-example');
var greenCounterOne = document.getElementById('green-counter1');
var greenCounterTwo = document.getElementById('green-counter2');
var greenCounterThree = document.getElementById('green-counter3');
var greenCounterFour = document.getElementById('green-counter4');


/////////////constructor/////////////

function Strings (question, one, two, answer, src, name) {
  this.question = question;
  this.one = one;
  this.two = two;
  this.answer = answer;
  this.src = `../image/playImage/${src}.gif`;
  // this.name =
  questions.push(this.question);
  buttonContentOne.push(this.one);
  buttonContentTwo.push(this.two);
  answers.push(this.answer);
  picture.push(this.src);
  
  // all.push(this)

}

//////////helper function////////
function hide(elem) {
  elem.style.display = 'none';
}
function show(elem) {
  elem.style.display = 'inline-block';
}
function colorRed(elem) {
  elem.style.backgroundColor = 'red';
}
function colorBlank(elem) {
  elem.style.backgroundColor = 'none';
}
///////////////instantiate//////////////////
function instantiate() {
  new Strings ('Mandolorian captured bunch of smuggler on his ship would he capture them or release?', 'Capture', 'Release', 'Release', 'bounty-robot');
  new Strings ('Arms deal was discovered and in-midst of that you find Yoda, would you save him or leave him there?', 'save him', 'leave him', 'save him', 'rebel');
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
  // console.log(clickButton);
  if (clickButton === answers[round]) {
    renderAnswer();
    score++;
  } else {
    answerBox.textContent = `${name} you are wrong!`;
    score--;
  }
  round++;
  renderQuestion();
  if (score === 0) {
    hide(redCounterFour)
    hide(greenCounterOne)
  } else if (score === -1) {
    show(redCounterFour);
    hide(redCounterThree)
  } else if (score === -2) {
    show(redCounterThree);
    hide(redCounterTwo);
  } else if (score === -3) {
    show(redCounterTwo);
    hide(redCounterOne)
  } else if (score === -4) {
    show (redCounterOne)
  } else if (score < -4) {
    lightSaberYoda.checked = "checked";
  } else if (score === 1) {
    show(greenCounterOne);
    hide(greenCounterTwo);
  }else if (score === 2) {
    show(greenCounterTwo);
    hide(greenCounterThree);
  } else if (score === 3) {
    show(greenCounterThree);
    hide(greenCounterFour);
  } else if (score === 4) {
    show (greenCounterFour)
  } else if (score > 4) {
    lightSaberYoda.checked = "checked";
  }
}
// console.log(score);
// }

function renderQuestion() {
  questionBox.textContent = questions[round];
  buttonOne.textContent = buttonContentOne[round];
  buttonTwo.textContent = buttonContentTwo[round];
  questionImage.src = picture[round];
}

function renderAnswer() {
  answerBox.textContent = `${name} you are right!`;
}

function getData() {
  var getName = localStorage.getItem('name');
  name = getName;
}

  
  
instantiate();
getData();
buttonOne.addEventListener('click', handleClick);
buttonTwo.addEventListener('click', handleClick);
renderQuestion();;
hide(redCounterOne);
hide(redCounterTwo);
hide(redCounterThree);
hide(redCounterFour);
hide(greenCounterOne);
hide(greenCounterTwo);
hide(greenCounterThree);
hide(greenCounterFour);


