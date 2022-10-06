const { expect } = require('chai');
const { lookupChar } = require('./index.js');

describe('lookupChar', function() {
    it('should have string param', function() {
        let string = [1, 2, 3];
        let result = lookupChar(string, 1);
        expect(result).to.be.undefined;
    });

    it('should have number param', function() {
        let index = '3';
        let result = lookupChar('string', index);
        expect(result).to.be.undefined;
    });

    it('should have number param', function() {
        let index = 3.3;
        let result = lookupChar('string', index);
        expect(result).to.be.undefined;
    });

    it('should return incorrect if index is invalid', function() {
        let string = 'string';
        let index = 6;
        let result = lookupChar(string, index);
        expect(result).to.equal('Incorrect index');
    });

    it('should return incorrect if index is invalid', function() {
        let string = 'string';
        let index = 10;
        let result = lookupChar(string, index);
        expect(result).to.equal('Incorrect index');
    });

    it('should return incorrect if index is invalid', function() {
        let string = 'string';
        let index = -3;
        let result = lookupChar(string, index);
        expect(result).to.equal('Incorrect index');
    });

    it('should return character', function() {
        let result = lookupChar('string', 3);
        expect(result).to.equal('i');
    });
});