const EventEmitter = require('events');

class Customer extends EventEmitter {
    constructor(name, gender) {
        super();
        this.name = name;
        this.gender = gender;
    }
}

const callBackFunction = (foods, customer) => {
    for (const index in foods) {
        console.log(`${customer.name} call ${foods[index]}`)
    }
};

const john = new Customer("John", "Male");
const jane = new Customer("Jane", "Female");

john.on('eventCallFoods', callBackFunction);
jane.on('eventCallFoods', callBackFunction);

console.log('do something ...');
console.log('do task 1');
console.log('do task 2');

john.emit('eventCallFoods', ["Pizza", "Salad"], john);
jane.emit('eventCallFoods', ['Cake', 'Coffe'], jane);
