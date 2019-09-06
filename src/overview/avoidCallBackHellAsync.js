// Avoid call back hells using control flow library like async

let async = require("async");
let fs = require('fs');

let obj = {
    dev: "/../../data/dev.json",
    test: "/../../data/test.json",
    prod: "/../../data/prod.json",
    null: "/../../data/null.json"
};

let configs = {};

async.forEachOf(obj, (value, key, callback) => {
    fs.readFile(__dirname + value, "utf8", (err, data) => {
        if (err) return callback(err);
        try {
            let json = JSON.parse(data);
            configs[key] = json;
            console.log(JSON.stringify(json.dataType))
        } catch (e) {
            return callback(e);
        }
        callback();
    });
}, err => {
    if (err) console.error(err.message);
});