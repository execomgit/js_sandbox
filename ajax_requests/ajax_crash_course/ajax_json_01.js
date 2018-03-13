
// Create event listener
document.getElementById("btn").addEventListener("click", loadUser);

function loadUser () {
  var fetchUser = new XMLHttpRequest();
  fetchUser.open('GET', 'ajax_json_users.json', true);

  fetchUser.onload = function(){
    if(fetchUser.status == 200){
      var resultReceived = JSON.parse(fetchUser.responseText);
      var outputText = '';
      outputText += '<ul>' +
       '<li>ID: '+resultReceived[1].id+'</li>' +
       '<li>Name: '+resultReceived[1].name+'</li>' +
       '<li>Email: '+resultReceived[1].email+'</li>' +
      '</ul>'

      document.getElementById('users').innerHTML = outputText;
    }
  }
  fetchUser.send();


}




// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
