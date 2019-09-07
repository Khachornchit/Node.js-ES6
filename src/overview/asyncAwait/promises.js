let request = require("request");
let userDetails;

function initialize() {
    let options = {
        url: 'http://petstore.swagger.io/v2/swagger.json',
        headers: {
            'Content-type': 'application/json'
        }
    };

    return new Promise(function (resolve, reject) {
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

function main() {
    let initializePromise = initialize();

    initializePromise.then(
        function (result) {
            userDetails = result;
            console.log("Initialized user details");
            console.log(userDetails)
        },
        function (err) {
            console.log(err);
        })
}

main();

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result')
    }, 100)
})
    .then(console.log)
    .catch(console.error)

