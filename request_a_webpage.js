var request = require('request');
var fs = require('fs');

request('https://www.hipstercode.com', (error, response, body) => {
    console.log('error ', error);
    console.log('response ', response);
    console.log('body ', body);

    fs.writeFile("./test.txt", body, (err) => {
        if (err) {
            return console.log("something bad happened => ", err)
        }

        console.log("file successfully created");
    });
});