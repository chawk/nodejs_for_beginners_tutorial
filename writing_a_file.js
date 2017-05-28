var fs = require('fs');

fs.writeFile("./test.txt", "what we are writing", (err) => {
    if (err) {
        return console.log("something bad happened => ", err)
    }

    console.log("file successfully created");
});

