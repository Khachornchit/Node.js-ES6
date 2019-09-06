let fs = require('fs');

fs.readFile(__dirname + '/../../data/log.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        let json = JSON.parse(data);
        console.log(JSON.stringify(json.data));
    }
});