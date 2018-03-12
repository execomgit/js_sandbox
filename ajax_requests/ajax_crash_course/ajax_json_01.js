
// Create event listener
document.getElementById("btn").addEventListener("click", loadUser);

function loadUser () {
  var fetchUser = new XMLHttpRequest();
  fetchUser.open('GET', 'ajax_json_users.json', true);

  fetchUser.onload = function(){
    if(fetchUser.status == 200){
      var resultReceived = JSON.parse(fetchUser.responseText);
      console.log(resultReceived[1].name);
    }
  }
  fetchUser.send();


}




// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
