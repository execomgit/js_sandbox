
// Create event listener
document.getElementById("btn").addEventListener("click", loadText);
function loadText() {

  // create new XHR object
  var myRequest = new XMLHttpRequest();

  // OPEN - type, url/file, async
  myRequest.open("GET", "ajax_file_01.txt", true);

  myRequest.onload = function(){
    if(this.status == 200){
      console.log(this.responseText);
    }
  }

  //Sends Request
  myRequest.send();
}
