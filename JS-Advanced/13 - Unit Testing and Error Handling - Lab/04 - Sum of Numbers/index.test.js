const { expect } = require('chai');
const { sumNumbers } = require('./index.js');

describe('sumNumbers', function() {
    it('should take an array of numbers as args', function() {
        let array = [1, 2, 3];
        expect(array).to.be.an('array');
    });

    it('should return sum of values inside array', function() {
        let array = [1, 2, 3];
        let result = sumNumbers(array);
        expect(result).to.be.equal(6);
    });

    it('should return sum of mixed element types', function() {
        let array = [1, '2', true];
        let result = sumNumbers(array);
        expect(result).to.be.equal(4);
    });
});