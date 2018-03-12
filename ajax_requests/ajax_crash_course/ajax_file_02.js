
// Create event listener
document.getElementById("btn").addEventListener("click", loadText);
function loadText() {

  // create new XHR object
  var myRequest = new XMLHttpRequest();

  // OPEN - type, url/file, async
  myRequest.open("GET", "ajax_file_01.txt", true);

  console.log("READY_STATE: ", myRequest.readyState);

  // myRequest.onload = function(){
  //   if(this.status == 200){
  //     // console.log(this.responseText);
  //   }
  // }

  myRequest.onreadystatechange = function(){
    console.log("READY_STATE: ", myRequest.readyState);
    if(myRequest.readyState == 4 && myRequest.status == 200){
       // console.log(this.responseText);
    };
  };


  //Sends Request
  myRequest.send();
}


// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
