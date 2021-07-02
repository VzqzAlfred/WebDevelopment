// var fs = require('fs');
// console.log("\nAbriendo archivo\n");

// function print(err, content){
//     console.log(content);
// };

// var content = fs.readFile('archivo.txt', 'utf-8', print);

// console.log("Fin del programa\n");
// console.log( process.uptime() );


/**********************************************/
var fs = require('fs');
console.log("\nAbriendo archivo...\n");

var content = fs.readFile('archivo.txt', 'utf-8', 
function print(err, content){
    console.log(content);
});

console.log("Fin del programa\n");
console.log( Math.round(process.uptime() * 100) + "ms" );