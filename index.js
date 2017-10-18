const fs = require('fs');
var converter = require('./converter');

var args = process.argv.slice(2);
var filenameIn = args[0];
var filenameOut = args[1];

fs.readFile(filenameIn, "utf8", function(err, data) {
    if (err) throw err;

    data = converter(data);

    fs.writeFile(filenameOut, data, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
        process.exit();
    });
});