var ajax = new XMLHttpRequest();
ajax.onload = functionName;
ajax.onerror = errorFunctionName;
ajax.open("GET", "https://api.forecast.io/forecast/41c02e425ecf7f7b477822c19c0b2c9c/45.267136,19.833549", true);
ajax.send();


function functionName() {
  var json = JSON.parse(this.responseText);
  var currentTemp = json.currently.temperature;
  var forecastHi = json.daily.data[0].temperatureMin;
  var forecastLo = json.daily.data[0].temperatureMax;
  var diffHi = currentTemp - forecastHi;
  var diffLo = currentTemp - forecastLo;

    console.log(this); // log the response
    if (this.status == 200) { // request succeeded
        // do something with this.responseText;
    } else {
        // handle more HTTP response codes here;
    }
}
function errorFunctionName(e) {
    console.log(this);
    console.error(e);
    // do something with this.status, this.statusText
}
