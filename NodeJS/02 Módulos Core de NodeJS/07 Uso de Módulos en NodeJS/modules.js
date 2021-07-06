'use strict';

let myData = require('./my-data'),
    Clock = require('./clock'),
     cucu = new Clock();

console.log(
    myData.name, 
    myData.email,
    myData.phone
);


cucu.on("tictac", function () {
  cucu.theTime();
});
