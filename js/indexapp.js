//////////////////////global/////////////////////////
// var enterName = document.getElementById('name').value;
var button = document.getElementById('button-container');

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


function handleClick() {
  saveData();
  ////////////--Enoch--Adlib Input//////////
  saveAdlibData();
}



button.addEventListener('click', handleClick);