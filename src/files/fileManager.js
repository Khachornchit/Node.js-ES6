const fs = require('fs');
module.exports = {
    createFile: (fileName) => {
        const fd = fs.openSync(fileName, 'w');
    },
    saveFile: (obj, fileName) => {
        const json = JSON.stringify(obj);
        fs.writeFile(fileName, json, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(`Save to file ${fileName}`);
        })
    },
    readFile: (fileName) => {
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            let json = JSON.parse(data);
            console.log(`Read data = ${JSON.stringify(json.data)}`);
        })
    }
}