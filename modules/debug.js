console.log('Debug Testing');
debugger;
var findMean = (numbers) => {
    var total = 0;
    debugger;
    for (let number in numbers) {
        total = total + parseFloat(number);
        console.log(`total is : ${total}, number is ${number}`)
    }
    console.log(`Result is : ${total / numbers.length}`)
}

findMean([1, 2, 3, 4, 5]);