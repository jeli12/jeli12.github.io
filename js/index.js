function buttonClicked() {
  document.getElementById('button-1').classList.toggle('is-pink');
}

function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

window.onload = windowLoaded;

function setNewImage()
{
  document.getElementById("img1").src ="../img/piplup.jpg";
}

function setOldImage()
{
  document.getElementById("img1").src ="../img/oshawott.jpg";
}

window.onload = windowLoaded;
