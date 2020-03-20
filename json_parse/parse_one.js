

/* First Example */
var jsonEX = require('../json_parse/example_files/basketball.json'); //(with path)
(function(){
    console.log(jsonEX); // {"a" : "b", "c" : "d"}
 })();



/* Second Example */
var data = require("../json_parse/example_files/basketball.json");
console.log(data);