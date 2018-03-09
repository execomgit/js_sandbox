
var animalContainer = document.getElementById("animal_info");
var ajaxButton = document.getElementById("btn");

ajaxButton.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json#");
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderhtml(ourData);
  };
  ourRequest.send();
});


function renderhtml(data) {
  animalContainer.insertAdjacentHTML("beforeend", "test123")
}
