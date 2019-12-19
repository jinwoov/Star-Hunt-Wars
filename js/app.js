'use strict';
////////////////////// Global variable//////////////////////
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
var buttonBox = document.getElementById('button-box');
var answerBox = document.getElementById('answer');
var questionImage = document.getElementById('question-image');
var round = 0;
var score = 0;
var name;
// var handleBox = document.getElementById('counterBox')
var highScore = document.getElementById('high-score');
var userScore = document.getElementById('user-score');
var hLight = document.getElementById('h-light');

//////////////////////////constructor//////////////////////////

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

function Storingscore(name, score) {
  this.name = name;
  this.score = score;

  scoreStorage.push(this);
}

/////////////////////////////////////////////////////
////////////////////helper function//////////////////

function hide(elem) {
  elem.style.display = 'none';
}
function show(elem) {
  elem.style.display = 'inline-block';
}
///////////////////////////////////////////////////////
///////////////////////instantiate////////////////////

function instantiate() {
  new Strings('You look out of the window of your cockpit, the deep darkness of space flecked with bright stars as far as you can see. You are a Tantalorian bounty hunter with a hard-earned reputation for efficiency and consistency in capturing your targets. Behind you, you hear the clink of metal against metal and turn around. Your most recent target, a smuggler, is handcuffed to the seat behind you and is starting to regain consciousness. As he comes to awareness, he offers to double the bounty on his head if you let him go.', 'You accept his offer and take his money before shoving him into an escape pod, eject it into the deep darkness of space, and leave him to fend for himself.', 'You stay silent and uncuff the smuggler and lead him below deck where you freeze him in Carbonite.', 'You accept his offer and take his money before shoving him into an escape pod, eject it into the deep darkness of space, and leave him to fend for himself.', 'mandalorian');
  new Strings('When you return to your cockpit, you activate a new bounty puck. A reptilian humanoid creature appears in a hologram, with text underneath reading “Recover cargo. Use extreme caution when handling cargo.” You activate your target tracker and set course to capture the mark. When you arrive, you find the reptilian humanoid loading a small metal crate with several holes onto a speeder. You make quick work of the reptilian. You hear whimpering from inside the crate. Curious, you open the crate and find a small, green creature with long ears and massive black eyes looking up at you. It looks like it must still be a child.', 'You gently pick up the child and carry it back to the ship.', 'You close the crate back up with the child still inside it and haul it back to your ship. The child cries the whole way, but it does not sway your resolve. This is part of the job.', 'You gently pick up the child and carry it back to the ship.', 'baby-yoda');
  new Strings('As you prepare to take off, you are startled by the sound of clashing and clanging. You exit the cockpit to find the child terrified and wreaking havoc on your ship. Everything in the hold where you put him has been knocked out of place. Several wall panels have been ripped off and thrown about. In one section of the wall, several cables have been disconnected and are sparking. The lights on the ship begin to flicker.', 'You distract the child with a small metal ball that it can play with and carry it up to the cockpit, where you buckle it into the seat beside yours.', 'You fire a warning shot which scares the child and stops the destruction. You then throw the child into a holding cell. That child deserves a timeout.', 'You distract the child with a small metal ball that it can play with and carry it up to the cockpit, where you buckle it into the seat beside yours.', 'baby-yoda');
  new Strings('As you return to your seat in the cockpit, your engine starts to sputter. Soon, it shuts down entirely and your ship begins to drift through space. You activate a distress signal and after several hours, another ship uses a tractor beam to pull your ship to their ship. It looks like a scavenger ship. You grab a large bag, tell the child to keep as quiet and still as possible, and put the child in the bag, covering the child as the scavengers prepare to board your ship.', 'You hide in a dark alcove of the ship in order to catch the scavengers by surprise. You manage to kill all the scavengers that board your ship as well as the remainder that are on the scavenger ship. You take over the ship, but the child is angry and uses its force powers to lock the ship controls and sets a course to Cattooine.', 'You hold up your hands as the scavengers come aboard and ask them to help you reach the nearest planet to help repair your ship. They agree, but only if you trade your chest plate for the tow. You agree to the trade and the scavengers take you to Cattooine.', 'You hold up your hands as the scavengers come aboard and ask them to help you reach the nearest planet to help repair your ship. They agree, but only if you trade your chest plate for the tow. You agree to the trade and the scavengers take you to Cattooine.', 'darthVader');
  new Strings('You arrive on Cattooine, just outside of Nos Nisely, a city known throughout the galaxy for being a central hub of the criminal underworld. As you walk about the city to find a place to purchase parts and repair your ship, the child grows restless and begins to pop its head out of the bag you’re carrying it in. Unfortunately for you, this eventually attracts the attention of the henchmen of one of the city’s most infamous mob bosses, Yabba the Hutt, also known as Yabba the Klutz behind his back. The henchmen ask you to come with them to bring the child to Yabba himself, as he’s offering a handsome price for the child.', 'You entertain the henchmen’s offer and follow them to Yabba’s palace.', 'You quickly take out the henchmen and make your way to Yabba’s palace yourself. You want to do this on your terms.', 'You entertain the henchmen’s offer and follow them to Yabba’s palace.', '');
  new Strings('You arrive at Yabba’s palace with the child in tow. The guards at the door bring you in front of Yabba, where you ask about the offer. Yabba offers you over twice the amount you would need to cover the new parts and repairs your ship needs to operate again.', 'You turn down the offer. Yabba’s henchmen surround you and you are too outnumbered to take them out on your own. Luckily for you, the child understands what is happening and uses its force powers to slam half the henchmen against the wall while you take out the others. Once you take out all of the henchmen, you threaten Yabba, telling him you’ll kill him if he doesn’t give you the sum he offered for turning in the child.', 'You think it over, then ask for double the sum that Yabba initially offers. After all, it is the child’s fault that you were stranded there. Yabba recoils at your request, but after some negotiation, offers you 75% of what you asked for. You take it and hand the child over. As you leave, the child throws a tantrum and begins destroying the palace with it’s force powers. You chuckle on your way out. Yabba and the rest of his henchmen are unable to subdue the child. As you walk away from the palace, you hear the doors open. You turn and see Yabba’s henchmen throw the child out of the palace. The child picks himself up and makes its way toward you. Looks like you’re back on babysitting duty.', 'You turn down the offer. Yabba’s henchmen surround you and you are too outnumbered to take them out on your own. Luckily for you, the child understands what is happening and uses its force powers to slam half the henchmen against the wall while you take out the others. Once you take out all of the henchmen, you threaten Yabba, telling him you’ll kill him if he doesn’t give you the sum he offered for turning in the child.', '');
  new Strings('The repairs on your ship are now complete. As you’re preparing to take off, you receive a hologram message from an acquaintance, Seado Calrissian. He has come across some Meskar steel and though he has several parties interested in this rare metal, he decided he would give you a chance to win some from him. The catch? You have to beat him in a game of Tabacc. If you fail, he will not take anything of yours, but the Meskar will go to the highest bidder – which includes some of your rivals. You take him up on his offer.', 'You see you have a losing hand. One of Seado’s friends comes to the table to speak with him. As Seado is distracted, you switch a card in your hand for one on the table. No one notices.', 'You see you have a losing hand. One of Seado’s friends comes to the table to speak with him. As Seado is distracted, you consider switching a card in your hand for one on the table, but decide against it. You don’t want to burn bridges with Seado or wind up in trouble. However, the child uses its force powers swap a card in your hand for one on the table. No one seems to notice.', 'You see you have a losing hand. One of Seado’s friends comes to the table to speak with him. As Seado is distracted, you consider switching a card in your hand for one on the table, but decide against it. You don’t want to burn bridges with Seado or wind up in trouble. However, the child uses its force powers swap a card in your hand for one on the table. No one seems to notice.', '');
  new Strings('The final cards hit the table. You win by the smallest possible margin. Seado laughs, “I’m glad the Meskar is going to a worthy party. Get yourself some new armour, kid.” You pick up the child and take off for your Tantalorian clan, where there is a skilled smith who can forge the Meskar into new armour. Upon arriving to the forge where the smith works, you present them with the Meskar. The smith asks you what you intend to do with it.', 'You tell the smith that you want to make minor repairs to your armour and donate the rest to the foundlings.', 'You fully replace your own armour. There’s always more Meskar out there for the foundlings and you need new armour to operate effectively.', 'You tell the smith that you want to make minor repairs to your armour and donate the rest to the foundlings.', '');
  new Strings('After you leave the smith, it’s finally time for you to claim your prize for the bounties you collected throughout your journey. You hand over all of them to the bounty dealer aside from one, which is hidden in the bag. The bounty dealer asks where the cargo from the reptilian is. You ask him what the client wants with it. He tells you that it is the Empire’s business, not yours. He asks again if you have the cargo.', 'You realise that he is right, it is not your business. You ask him where to meet with the Empire. He calls several guards over to escort you to the meeting place.', 'You tell him that the cargo was destroyed while fighting the reptilian. “How unfortunate,” the dealer replies. As you leave, several guards surround you. They know you have the cargo and escort you to a meeting with the Empire.', 'You tell him that the cargo was destroyed while fighting the reptilian. “How unfortunate,” the dealer replies. As you leave, several guards surround you. They know you have the cargo and escort you to a meeting with the Empire.', '');
  new Strings('You and your escort enter the room where the representatives from the Empire are waiting. An old general sits at a table and a young scientists stands next to you. The guards that escorted you continue to surround you, their guns at the ready. The general asks to see the cargo. You refuse, telling him you need to see your reward first. Laughing, the general orders a soldier to pull a large crate over on a cart. The soldier opens to the lid to the crate to reveal more Meskar than you’ve ever seen at once before. There is more than enough to make new armour for your entire Tantalorian clan. You open the bag and take the child out. He looks at you with large, unblinking, sad eyes.', 'With resolve, you hand the child over and take the Meskar. As you leave the room, you hear the child cry out. Once you’ve left the building, you hear loud crashes, blasters go off, shouting, then silence. It sounds like the Empire got more than they bargained for. You smirk as you turn to head towards your ship. Before you’re able to take another step, you feel a small tug on your leg. Looks like you’re stuck babysitting yet again.', 'You nod to the child and the child uses the force to throw the soldiers and guards against the wall. With the child tucked under one arm and your blaster in the other, you make short work of the soldiers, the guards, the general, and the scientist. Once the room is still, you gently place the child on top of the crate of Meskar. You and the child then leave the building and head toward the Tantalorian smith to make a sizeable donation of Meskar before heading to your ship to further travel the galaxy.', 'You nod to the child and the child uses the force to throw the soldiers and guards against the wall. With the child tucked under one arm and your blaster in the other, you make short work of the soldiers, the guards, the general, and the scientist. Once the room is still, you gently place the child on top of the crate of Meskar. You and the child then leave the building and head toward the Tantalorian smith to make a sizeable donation of Meskar before heading to your ship to further travel the galaxy.', '');
}

///////Adding Sounds to Event Listener////////
function myPlay(){
  var audio = new Audio("../sounds/lightsaber-on-sound.mp3");
  audio.play();
}

///////////////////Clicking//////////////////////

function handleClick(event) {
  event.preventDefault();
  myPlay();
  var clickButton = event.target.textContent;
  // console.log(clickButton);
  if (clickButton === answers[round]) {
    score++;
  } else {
    score--;
  }
  round++;
  showRounds();
  renderQuestion();
  if (score === 0) {
    hLight.style.boxShadow = '0 0 5px rgb(70, 112, 248),0 0 8px rgb(70, 112, 248),0 0 12px rgb(70, 112, 248),0 0 15px blue,0 0 25px blue;';
  } else if (score === -1) {
    hLight.style.boxShadow = '0 0 5px #ffcccc,0 0 8px #ffcccc,0 0 12px #ffcccc,0 0 15px #ffcccc,0 0 25px #ffcccc';
  } else if (score === -2) {
    hLight.style.boxShadow = '0 0 5px #ff9999,0 0 8px #ff9999,0 0 12px #ff9999,0 0 15px #ff9999,0 0 25px #ff9999';
  } else if (score === -3) {
    hLight.style.boxShadow = '0 0 5px #ff6666,0 0 8px #ff6666,0 0 12px #ff6666,0 0 15px #ff6666,0 0 25px #ff6666';
  } else if (score === -4) {
    hLight.style.boxShadow = '0 0 5px #ff3232,0 0 8px #ff3232,0 0 12px #ff3232,0 0 15px #ff3232,0 0 25px #ff3232';
  } else if (score === -5) {
    hLight.style.boxShadow = '0 0 5px #ff1919,0 0 8px #ff1919,0 0 12px #ff1919,0 0 15px #ff1919,0 0 25px #ff1919';
  } else if (score === -6) {
    hLight.style.boxShadow = '0 0 5px #ff0000,0 0 8px #ff0000,0 0 12px #ff0000,0 0 15px #ff0000,0 0 25px #ff0000';
  } else if (score <= -7) {
    hLight.style.boxShadow = '0 0 5px #cc0000,0 0 8px #cc0000,0 0 12px #cc0000,0 0 15px #cc0000,0 0 25px #cc0000';
  } else if (score === 1) {
    hLight.style.boxShadow = '0 0 5px #cce5cc,0 0 8px #cce5cc,0 0 12px #cce5cc,0 0 15px #cce5cc,0 0 25px #cce5cc';
  } else if (score === 2) {
    hLight.style.boxShadow = '0 0 5px #99cc99,0 0 8px #99cc99,0 0 12px #99cc99,0 0 15px #99cc99,0 0 25px #99cc99';
  } else if (score === 3) {
    hLight.style.boxShadow = '0 0 5px #66b266,0 0 8px #66b266,0 0 12px #66b266,0 0 15px #66b266,0 0 25px #66b266';
  } else if (score === 4) {
    hLight.style.boxShadow = '0 0 5px #329932,0 0 8px #329932,0 0 12px #329932,0 0 15px #329932,0 0 25px #329932';
  } else if (score === 5) {
    hLight.style.boxShadow = '0 0 5px #198c19,0 0 8px #198c19,0 0 12px #198c19,0 0 15px #198c19,0 0 25px #198c19';
  } else if (score === 6) {
    hLight.style.boxShadow = '0 0 5px #008000,0 0 8px #008000,0 0 12px #008000,0 0 15px #008000,0 0 25px #008000';
  } else if (score => 7) {
    hLight.style.boxShadow = '0 0 5px #007300,0 0 8px #007300,0 0 12px #007300,0 0 15px #007300,0 0 25px #007300';
  }

  if (round === 10) {
    hide(questionBox);
    hide(buttonBox);
    hide(questionImage);
    hide(answerBox);
    new Storingscore(name, score);
    for (var i = 0; i < scoreStorage.length; i++) {
      previousStorage.push(scoreStorage[i]);
    }
    highScoreList();
    saveData();
    newPlayerButtonShow();
  }
}

//////////////////High Score/////////////////////////

function highScoreList() {
  var h1El = document.createElement('h1')
  h1El.textContent = 'High Score';
  highScore.appendChild(h1El)
  for (var i = 0; i < scoreStorage.length; i++) {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = scoreStorage[i].name;
    trEl.appendChild(thEl)
    var tdEl = document.createElement('td');
    tdEl.textContent = `Power Level ${scoreStorage[i].score}`;
    var tdEle = document.createElement('td');
    if (scoreStorage[i].score < 0) {
      tdEle.textContent = 'Empire';
      tdEl.style.color = 'red';
      tdEle.style.color = 'red';
    } else if (scoreStorage[i].score > 0) {
      tdEle.textContent = 'Rebellion';
      tdEl.style.color = 'greenyellow';
      tdEle.style.color = 'greenyellow';
    } else if (scoreStorage[i].score === 0){
      tdEle.textContent = 'Mandalorian';
    }
    trEl.appendChild(tdEl);
    trEl.appendChild(tdEle);
    userScore.appendChild(trEl);
  }
}



///////////////////page rendering//////////////////////////

function renderQuestion() {
  questionBox.textContent = questions[round];
  buttonOne.textContent = buttonContentOne[round];
  buttonTwo.textContent = buttonContentTwo[round];
  questionImage.src = picture[round];
}

function showRounds() {
  answerBox.textContent = `Mission ${round+1}`;
}


/////////////////////Local Storage////////////////////////
function getData() {
  var getName = localStorage.getItem('name');
  name = getName;

  var previousScore = localStorage.getItem('score');
  var parseScore = JSON.parse(previousScore);
  // console.log(previousScore)

  if (parseScore !== null) {
    for (var i = 0; i < parseScore.length; i++) {
      scoreStorage.push(parseScore[i])
    }
  }
  // if (parseScore !== null) {
} 
function saveData() {
  var stringData = JSON.stringify(previousStorage);
  localStorage.setItem('score', stringData);
  // console.log(localStorage);
}

/////////// New User Button ////////////
var newBtn = document.getElementById('newPlayerButton');
var newUserName = document.getElementById('newPlayer');

function newPlayerButtonHide() {

  if (round < 10) {
    hide(newBtn);
  }
}

function newPlayerButtonShow() {
  show(newBtn);
}
function openForm() {
  document.getElementById('myForm').style.display = 'block';
}
// function closeForm() {
//   document.getElementsById('myForm').style.display = 'none';
// }

function saveNewUser (){
  newUserName = document.getElementById('newPlayer').value;
  localStorage.setItem('name', newUserName);
}

function handleNewUserClick() {
  saveNewUser();
}
newBtn.addEventListener('click', handleNewUserClick);

// localStorage.setItem('name', enterName);
///////////////////////Calling all the function////////////////
newPlayerButtonHide();
instantiate();
getData();
buttonOne.addEventListener('click', handleClick);
buttonTwo.addEventListener('click', handleClick);
renderQuestion();
showRounds();
// hide(linkButton);

////////////////////////////////////////////////////////////////

