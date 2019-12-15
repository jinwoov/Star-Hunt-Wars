'use strict';
/////////// Global variable///////////
var buttonContentOne = [];
var buttonContentTwo = [];
var questions = [];
var picture = [];
var answers = [];
var scoreStorage = [];
var previousStorage = [];
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
var greenCounterOne = document.getElementById('green-counter1');
var greenCounterTwo = document.getElementById('green-counter2');
var greenCounterThree = document.getElementById('green-counter3');
var greenCounterFour = document.getElementById('green-counter4');
var highScore = document.getElementById('high-score');
var userScore = document.getElementById('user-score');


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
  new Strings('As you prepare to take off, you are startled by the sound of clashing and clanging. You exit the cockpit to find the child terrified and wreaking havoc on your ship. Everything in the hold where you put him has been knocked out of place. Several wall panels have been ripped off and thrown about. In one section of the wall, several cables have been disconnected and are sparking. The lights on the ship begin to flicker.', 'You distract the child with a small metal ball that it can play with and carry it up to the cockpit, where you buckle it into the seat beside yours.', 'You fire a warning shot which scares the child and stops the destruction. You then throw the child into a holding cell. That child deserves a timeout.', 'You distract the child with a small metal ball that it can play with and carry it up to the cockpit, where you buckle it into the seat beside yours.', 'baby-yoda');
  new Strings('As you return to your seat in the cockpit, your engine starts to sputter. Soon, it shuts down entirely and your ship begins to drift through space. You activate a distress signal and after several hours, another ship uses a tractor beam to pull your ship to their ship. It looks like a scavenger ship. You grab a large bag, tell the child to keep as quiet and still as possible, and put the child in the bag, covering the child as the scavengers prepare to board your ship.', 'You hide in a dark alcove of the ship in order to catch the scavengers by surprise. You manage to kill all the scavengers that board your ship as well as the remainder that are on the scavenger ship. You take over the ship, but the child is angry and uses its force powers to lock the ship controls and sets a course to Cattooine.', 'You hold up your hands as the scavengers come aboard and ask them to help you reach the nearest planet to help repair your ship. They agree, but only if you trade your chest plate for the tow. You agree to the trade and the scavengers take you to Cattooine.', 'You hold up your hands as the scavengers come aboard and ask them to help you reach the nearest planet to help repair your ship. They agree, but only if you trade your chest plate for the tow. You agree to the trade and the scavengers take you to Cattooine.', 'darthVader');
  new Strings('You arrive on Cattooine, just outside of Nos Nisely, a city known throughout the galaxy for being a central hub of the criminal underworld. As you walk about the city to find a place to purchase parts and repair your ship, the child grows restless and begins to pop its head out of the bag you’re carrying it in. Unfortunately for you, this eventually attracts the attention of the henchmen of one of the city’s most infamous mob bosses, Yabba the Hutt, also known as Yabba the Klutz behind his back. The henchmen ask you to come with them to bring the child to Yabba himself, as he’s offering a handsome price for the child.', 'You entertain the henchmen’s offer and follow them to Yabba’s palace.', 'You quickly take out the henchmen and make your way to Yabba’s palace yourself. You want to do this on your terms.', 'You entertain the henchmen’s offer and follow them to Yabba’s palace.','');
  new Strings('You arrive at Yabba’s palace with the child in tow. The guards at the door bring you in front of Yabba, where you ask about the offer. Yabba offers you over twice the amount you would need to cover the new parts and repairs your ship needs to operate again.', ' You turn down the offer. Yabba’s henchmen surround you and you are too outnumbered to take them out on your own. Luckily for you, the child understands what is happening and uses its force powers to slam half the henchmen against the wall while you take out the others. Once you take out all of the henchmen, you threaten Yabba, telling him you’ll kill him if he doesn’t give you the sum he offered for turning in the child.', 'You think it over, then ask for double the sum that Yabba initially offers. After all, it is the child’s fault that you were stranded there. Yabba recoils at your request, but after some negotiation, offers you 75% of what you asked for. You take it and hand the child over. As you leave, the child throws a tantrum and begins destroying the palace with it’s force powers. You chuckle on your way out. Yabba and the rest of his henchmen are unable to subdue the child. As you walk away from the palace, you hear the doors open. You turn and see Yabba’s henchmen throw the child out of the palace. The child picks himself up and makes its way toward you. Looks like you’re back on babysitting duty.', 'You turn down the offer. Yabba’s henchmen surround you and you are too outnumbered to take them out on your own. Luckily for you, the child understands what is happening and uses its force powers to slam half the henchmen against the wall while you take out the others. Once you take out all of the henchmen, you threaten Yabba, telling him you’ll kill him if he doesn’t give you the sum he offered for turning in the child.', '');
  new Strings('The repairs on your ship are now complete. As you’re preparing to take off, you receive a hologram message from an acquaintance, Seado Calrissian. He has come across some Meskar steel and though he has several parties interested in this rare metal, he decided he would give you a chance to win some from him. The catch? You have to beat him in a game of Tabacc. If you fail, he will not take anything of yours, but the Meskar will go to the highest bidder – which includes some of your rivals. You take him up on his offer.', 'You see you have a losing hand. One of Seado’s friends comes to the table to speak with him. As Seado is distracted, you switch a card in your hand for one on the table. No one notices.', 'You see you have a losing hand. One of Seado’s friends comes to the table to speak with him. As Seado is distracted, you consider switching a card in your hand for one on the table, but decide against it. You don’t want to burn bridges with Seado or wind up in trouble. However, the child uses its force powers swap a card in your hand for one on the table. No one seems to notice.', 'You see you have a losing hand. One of Seado’s friends comes to the table to speak with him. As Seado is distracted, you consider switching a card in your hand for one on the table, but decide against it. You don’t want to burn bridges with Seado or wind up in trouble. However, the child uses its force powers swap a card in your hand for one on the table. No one seems to notice.', '');
  new Strings('The final cards hit the table. You win by the smallest possible margin. Seado laughs, “I’m glad the Meskar is going to a worthy party. Get yourself some new armour, kid.” You pick up the child and take off for your Tantalorian clan, where there is a skilled smith who can forge the Meskar into new armour. Upon arriving to the forge where the smith works, you present them with the Meskar. The smith asks you what you intend to do with it.', 'You tell the smith that you want to make minor repairs to your armour and donate the rest to the foundlings.', 'You fully replace your own armour. There’s always more Meskar out there for the foundlings and you need new armour to operate effectively.', 'You tell the smith that you want to make minor repairs to your armour and donate the rest to the foundlings.', '');
  new Strings('After you leave the smith, it’s finally time for you to claim your prize for the bounties you collected throughout your journey. You hand over all of them to the bounty dealer aside from one, which is hidden in the bag. The bounty dealer asks where the cargo from the reptilian is. You ask him what the client wants with it. He tells you that it is the Empire’s business, not yours. He asks again if you have the cargo.', 'You realise that he is right, it is not your business. You ask him where to meet with the Empire. He calls several guards over to escort you to the meeting place.', 'You tell him that the cargo was destroyed while fighting the reptilian. “How unfortunate,” the dealer replies. As you leave, several guards surround you. They know you have the cargo and escort you to a meeting with the Empire.', 'You tell him that the cargo was destroyed while fighting the reptilian. “How unfortunate,” the dealer replies. As you leave, several guards surround you. They know you have the cargo and escort you to a meeting with the Empire.', '');
  new Strings('what is one?', 'bye', 'cool', 'your right', '');
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
  } else if (score <= -4) {
    show(redCounterOne);
  } else if (score === 1) {
    show(greenCounterFour);
    hide(greenCounterTwo);
  } else if (score === 2) {
    show(greenCounterTwo);
    hide(greenCounterThree);
  } else if (score === 3) {
    show(greenCounterThree);
    hide(greenCounterFour);
  } else if (score >= 4) {
    show(greenCounterOne);
  }

  if(round === 10) {
    hide(questionBox);
    hide(buttonBox);
    hide(redBox);
    hide(greenBox);
    hide(questionImage);
    hide(handleBox);
    // hide(lightSaber);
    hide(answerBox);
    new Storingscore (name, score);
    for (var i=0; i <scoreStorage.length; i++ ){
      previousStorage.push(scoreStorage[i])
    }
    highScoreList();
    saveData ();

  }
}

function highScoreList() {
  //////////////heading//////////
  var h1El = document.createElement('h1')
  h1El.textContent = 'High Score';
  highScore.appendChild(h1El)
  for (var i=0; i < scoreStorage.length; i++) {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = scoreStorage[i].name;
    trEl.appendChild(thEl)
    var tdEl = document.createElement('td');
    tdEl.textContent = scoreStorage[i].score;
    trEl.appendChild(tdEl);
    userScore.appendChild(trEl);
  }
}
// var buttonReplay = document.createElement('button');
// buttonReplay.textContent = `replay`


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

  var previousScore = localStorage.getItem('score');
  var parseScore = JSON.parse(previousScore);
  console.log(previousScore)

  if (parseScore !== null) {
    for (var i = 0; i < parseScore.length; i++) {
      scoreStorage.push(parseScore[i])
    }
  }
  // if (parseScore !== null) {
}

function saveData () {
  var stringData = JSON.stringify(previousStorage);
  localStorage.setItem('score', stringData);
  console.log(localStorage);
}
  
// localStorage.setItem('name', enterName);


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

