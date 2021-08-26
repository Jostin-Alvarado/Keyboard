function showPanelSound(id) {
  var keyboard = document.getElementById("keyboard");

  var soundPanel = "soundPanel" + id;
  var soundKeyboard = document.getElementById(soundPanel);

  keyboard.style.display = "none";
  soundKeyboard.style.display = "block";
}

function showKeyboard(id) {
  var keyboard = document.getElementById("keyboard");

  var soundKeyboard = document.getElementById(id);

  keyboard.style.display = "block";
  soundKeyboard.style.display = "none";
}

function putIntoText(param) {
  var place = document.getElementById("place");
  var x = document.getElementById(param).textContent;

  place.innerHTML += x;
}

function space() {
  var place = document.getElementById("place");
  place.innerHTML += " ";
}

function erase() {
  var place = document.getElementById("place");
  place.innerHTML = ""
}
