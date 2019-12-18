//////////////////////global/////////////////////////
var enterName = document.getElementById('name').value;
var button = document.getElementById('button-container');

  ////////////--Enoch--Adlib Input//////////
var adlibQuestion1 = document.getElementById('adlibQuestionOne').value;
var adlibQuestion2 = document.getElementById('adlibQuestionTwo').value;
var adlibQuestion3 = document.getElementById('adlibQuestionThree').value;
var adlibQuestion4 = document.getElementById('adlibQuestionFour').value;


/////////////////////Save Name///////////////////////////////
function saveData () {
  enterName = document.getElementById('name').value;
  localStorage.setItem('name', enterName);
}


function handleClick() {
  saveData();
}



button.addEventListener('click', handleClick);