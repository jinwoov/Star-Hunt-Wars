//////////////////////global/////////////////////////
var enterName = document.getElementById('name').value;
var button = document.getElementById('button-container');



/////////////////////Save Name///////////////////////////////
function saveData () {
  enterName = document.getElementById('name').value;
  localStorage.setItem('name', enterName);
}


function handleClick() {
  saveData();
}

button.addEventListener('click', handleClick);