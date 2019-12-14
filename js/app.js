'use strict';
/////////// Global variable///////////
var buttonContentOne = [];
var buttonContentTwo = [];
var questions = [];
var picture = [];
var answers = [];
var scoreStorage = [];
var questionBox = document.getElementById('question-box');
var buttonOne = document.getElementById('button-a');
var buttonTwo = document.getElementById('button-b');
var buttonBox = document.getElementById('button-box')
var answerBox = document.getElementById('answer');
var questionImage = document.getElementById('question-image');
var round = 0;
var score = 0;
var name;
var redBox = document.getElementById('red');
var greenBox = document.getElementById('green');
var handleBox = document.getElementById('handle')
var redCounterOne = document.getElementById('red-counter1');
var redCounterTwo = document.getElementById('red-counter2');
var redCounterThree = document.getElementById('red-counter3');
var redCounterFour = document.getElementById('red-counter4');
var lightSaberYoda = document.getElementById('yoda-example');
var lightSaber = document.getElementById('demo');
var greenCounterOne = document.getElementById('green-counter1');
var greenCounterTwo = document.getElementById('green-counter2');
var greenCounterThree = document.getElementById('green-counter3');
var greenCounterFour = document.getElementById('green-counter4');
var highScore = document.getElementById('high-score')


/////////////constructor/////////////

function Strings(question, one, two, answer, src) {
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

  // all.push(this);

}

function Storingscore (name, score) {
  this.name = name;
  this.score = score;
  
  scoreStorage.push(this);
}

//////////helper function////////
function hide(elem) {
  elem.style.display = 'none';
}
function show(elem) {
  elem.style.display = 'inline-block';
}

///////////////instantiate//////////////////
function instantiate() {
  new Strings('You look out of the window of your cockpit, the deep darkness of space flecked with bright stars as far as you can see. You are a Tantalorian bounty hunter with a hard-earned reputation for efficiency and consistency in capturing your targets. Behind you, you hear the clink of metal against metal and turn around. Your most recent target, a smuggler, is handcuffed to the seat behind you and is starting to regain consciousness. As he comes to awareness, he offers to double the bounty on his head if you let him go.', 'You accept his offer and take his money before shoving him into an escape pod, eject it into the deep darkness of space, and leave him to fend for himself.', 'You stay silent and uncuff the smuggler and lead him below deck where you freeze him in Carbonite.', 'You accept his offer and take his money before shoving him into an escape pod, eject it into the deep darkness of space, and leave him to fend for himself.', 'mandalorian');
  new Strings('When you return to your cockpit, you activate a new bounty puck. A reptilian humanoid creature appears in a hologram, with text underneath reading “Recover cargo. Use extreme caution when handling cargo.” You activate your target tracker and set course to capture the mark. When you arrive, you find the reptilian humanoid loading a small metal crate with several holes onto a speeder. You make quick work of the reptilian. You hear whimpering from inside the crate. Curious, you open the crate and find a small, green creature with long ears and massive black eyes looking up at you. It looks like it must still be a child.', 'You gently pick up the child and carry it back to the ship.', 'You close the crate back up with the child still inside it and haul it back to your ship. The child cries the whole way, but it does not sway your resolve. This is part of the job.', 'You gently pick up the child and carry it back to the ship.', 'bounty-robot');
  new Strings('Is this the wise Yoda or 50 year old Yoda?', 'wise', '50', '50', 'baby-yoda');
  new Strings('whos is the father of Luke', 'Enoch', 'Darth Vader', 'Darth Vader', 'darthVader');
  new Strings('Mandalorian land on to the new planet and had found yoda would he save him?', 'bye3', 'cool', 'your right');
  new Strings('what is six?', 'by2e', 'cool', 'your right');
  new Strings('what is seven?', 'bye', 'cool', 'your right');
  new Strings('what is eight?', 'bye', 'cool', 'your right');
  new Strings('what is one?', 'bye', 'cool', 'your right');
  new Strings('what is one?', 'bye', 'cool', 'your right');
  new Strings('what is one?', 'bye', 'cool', 'your right');
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
    hide(redCounterFour);
    hide(greenCounterFour);
  } else if (score === -1) {
    show(redCounterFour);
    hide(redCounterThree);
  } else if (score === -2) {
    show(redCounterThree);
    hide(redCounterTwo);
  } else if (score === -3) {
    show(redCounterTwo);
    hide(redCounterOne);
  } else if (score === -4) {
    show(redCounterOne);
  } else if (score < -4) {
    lightSaberYoda.checked = 'checked';
  } else if (score === 1) {
    show(greenCounterFour);
    hide(greenCounterTwo);
  } else if (score === 2) {
    show(greenCounterTwo);
    hide(greenCounterThree);
  } else if (score === 3) {
    show(greenCounterThree);
    hide(greenCounterFour);
  } else if (score === 4) {
    show(greenCounterOne);
  } else if (score > 4) {
    lightSaberYoda.checked = 'checked';
  }

  if(round === 10) {
    hide(questionBox);
    hide(buttonBox);
    hide(redBox);
    hide(greenBox);
    hide(questionImage);
    hide(handleBox);
    hide(lightSaber);
    hide(answerBox);
    new Storingscore (name, score);
    highScoreList();

  }
}

function highScoreList() {
  //////////////heading//////////
  var h1El = document.createElement('h1')
  h1El.textContent = 'High Score';
  highScore.appendChild(h1El)
  var ulEl = document.createElement('ul');
  for (var i=0; i < scoreStorage.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${scoreStorage[i].name}        ${scoreStorage[i].score}`
    ulEl.appendChild(liEl);
  }
  highScore.appendChild(ulEl);
}

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
renderQuestion();
hide(redCounterOne);
hide(redCounterTwo);
hide(redCounterThree);
hide(redCounterFour);
hide(greenCounterOne);
hide(greenCounterTwo);
hide(greenCounterThree);
hide(greenCounterFour);


