const axios = require('axios');

async function main() {
    let resultA = await axios.get('http://petstore.swagger.io/v2/swagger.json');
    let resultB = await axios.get('http://petstore.swagger.io/v2/swagger.json');
    let resultC = await axios.get('http://petstore.swagger.io/v2/swagger.json');
    let resultD = await axios.get('http://petstore.swagger.io/v2/swagger.json');
    let resultE = await axios.get('http://petstore.swagger.io/v2/swagger.json');

    console.log(resultA);
}

main();