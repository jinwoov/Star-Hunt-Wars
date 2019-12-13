var enterName = document.getElementById('name').value;
var button = document.getElementById('button-container')

function saveData () {
    enterName = document.getElementById('name').value;
    localStorage.setItem('name', enterName);
  }


//   console.log(enterName)
function handleClick() {
    // console.log(document.getElementById("name").value);
    saveData()
}

  button.addEventListener('click', handleClick);