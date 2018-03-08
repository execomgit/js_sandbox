var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://github.com/LearnWebCode/json-example/blob/master/animals-1.json");
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData[0]);
};

ourRequest.send();
