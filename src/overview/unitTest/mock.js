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
        console.log('Document getData(id) ...');
        return this.db.get(id);
    }

    verify() {
        console.log('Documnet verifying ...');
    }

    restore() {
        console.log('Documnet restore ...');
    }
}

const db = {};
db.get = sinon.stub();
db.get.withArgs('abc_1').returns({ id: 'abc_1', text: 'some text' });

const doc = new Document(db);

sinon.mock(doc)
    .expects('getData')
    .once()
    .withArgs('abc_1')
    .returns({ id: 'abc_1', text: 'some text' });

doc.verify();
doc.restore();