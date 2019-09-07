let sinon = require('sinon');
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let should = chai.should();

class DB {
    constructor(db) {
        this.db = db;
    }

    save(data) {
        this.db.save(data);
    }

    get(id) {
        return this.db.get(id)
    }
}

let sinonDb = {};
sinonDb.get = sinon.stub();
sinonDb.get
    .withArgs('abc_1')
    .returns(
        {
            id: 'abc_1',
            text: 'some text'
        });
sinonDb.save = sinon.stub();

const db = new DB(sinonDb);
const spy = sinon.spy(db, 'save');
db.save({ text: "Hello" })
expect(spy.calledOnce).to.equal(true)