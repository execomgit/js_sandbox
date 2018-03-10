
var pageCounter = 1;
var animalContainer = document.getElementById("animal_info");
var ajaxButton = document.getElementById("btn");

ajaxButton.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
});


function renderHTML(data) {
  var htmlString = "";

  for (i = 0 ; i < data.length ; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

    for (e = 0 ; e < data[i].foods.likes.length ; e++) {
      if (e == 0) {
        htmlString += data[i].foods.likes[e];
      } else {
        htmlString += " and " + data[i].foods.likes[e];
      };

    };

    htmlString += " and dislikes ";
    for (e = 0 ; e < data[i].foods.dislikes.length ; e++) {
      if (e == 0) {
        htmlString += data[i].foods.dislikes[e];
      } else {
        htmlString += " and " + data[i].foods.dislikes[e];
      };

    };

    htmlString += ".</p>";

  };

  animalContainer.insertAdjacentHTML("beforeend", htmlString + "<br>")
}
