let sinon = require('sinon');
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let should = chai.should();

class Document {
    constructor(db) {
        this.db = db;
    }

    getData(id) {
        return this.db.get(id);
    }
}

db = {};
db.get = sinon.stub();
db.get
    .withArgs('abc_1')
    .returns(
        {
            id: 'abc_1',
            text: 'some text'
        });
const doc = new Document(db);

expect(doc.getData('abc_1')).to.deep.equal(
    {
        id: 'abc_1',
        text: 'some text'
    });