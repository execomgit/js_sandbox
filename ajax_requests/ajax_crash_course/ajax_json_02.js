
// Create event listener
document.getElementById('btn').addEventListener('click', githubUsers);

function githubUsers() {
  var usersRequest = new XMLHttpRequest();
  usersRequest.open('GET', 'https://api.github.com/users', true);

  usersRequest.onload = function() {
    if(this.status == 200) {
      var userResponse = JSON.parse(this.responseText);
      // console.log(userResponse);

      var output = '';
      for(var i in userResponse) {
        output +=
        '<div class="githubUsers">' +
          '<img src="'+userResponse[i].avatar_url+'" width="70" height="70">' +
          '<ul>'+
          '<li>ID: '+userResponse[i].id+'</li>' +
          '<li>Login: '+userResponse[i].login+'</li>' +
          '</ul>'+
        '</div>';
      }
      document.getElementById('users').innerHTML = output;
    }
  }

  usersRequest.send();
}


// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
