var pageCounter = 1;
var animals = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var notice = document.getElementById("notice");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json#');
  myRequest.onload = function() {
    if (myRequest.status >= 200 && myRequest.status < 400){
      var myData = JSON.parse(myRequest.responseText);
      console.log(myRequest.responseText);
      renderHTML(myData);
      if(pageCounter > myData.length) {
         btn.classList.add("hide-me");
         notice.classList.add("notice-appear");
       }
    } else {
      console.log("Oops! Looks like there is an error!");
    }
  };

  myRequest.send();
  pageCounter++;
});

function renderHTML(data) {
  var htmlString = "";

  for(i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " and likes to eat ";

    for(ii = 0; ii < data[i].foods.likes.length; ii++){
      if(ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += " and dislikes ";

    for(ii = 0; ii < data[i].foods.dislikes.length; ii++){
      if(ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += ".</p>";

  }

  animals.insertAdjacentHTML('beforeend', htmlString);
};
