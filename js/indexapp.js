//////////////////////global/////////////////////////
// var enterName = document.getElementById('name').value;
var button = document.getElementById('button-container');
var script = document.getElementById('instruction-container')
var userInstruction = document.getElementById('instructions-user')
// var instructionContainer = document.getElementById('button-instruction');
var buttonInstruction = document.getElementById('button-instruction');
var buttonScript = document.getElementById('button-script');


////////////--Enoch--Adlib Input//////////
// var adlibQuestion1 = document.getElementById('adlibQuestionOne').value;
// var adlibQuestion2 = document.getElementById('adlibQuestionTwo').value;
// var adlibQuestion3 = document.getElementById('adlibQuestionThree').value;
// var adlibQuestion4 = document.getElementById('adlibQuestionFour').value;

/////////////////////Save Name///////////////////////////////
function saveData () {
  var enterName = document.getElementById('name').value;
  localStorage.setItem('name', enterName);
}

////////////--Enoch--Adlib Input//////////
function saveAdlibData () {
  var adlibQuestion1 = document.getElementById('adlibQuestionOne').value;
  var adlibQuestion2 = document.getElementById('adlibQuestionTwo').value;
  var adlibQuestion3 = document.getElementById('adlibQuestionThree').value;
  var adlibQuestion4 = document.getElementById('adlibQuestionFour').value;
  localStorage.setItem('Question1', adlibQuestion1);
  localStorage.setItem('Question2', adlibQuestion2);
  localStorage.setItem('Question3', adlibQuestion3);
  localStorage.setItem('Question4', adlibQuestion4);
}

///////////Helper function ///////
function hide(elem) {
  elem.style.display = 'none';
}

function show(elem) {
  elem.style.display = 'inline-block';
}

//////////instruction render///////
function instructionShow() {
  show(userInstruction)
  hide(script);
}

function scriptShow() {
  show(script);
  hide(userInstruction)
}


function handleClick() {
  saveData();
  ////////////--Enoch--Adlib Input//////////
  saveAdlibData();
}



hide(userInstruction);
buttonInstruction.addEventListener('click', instructionShow);
buttonScript.addEventListener('click', scriptShow);
button.addEventListener('click', handleClick);
