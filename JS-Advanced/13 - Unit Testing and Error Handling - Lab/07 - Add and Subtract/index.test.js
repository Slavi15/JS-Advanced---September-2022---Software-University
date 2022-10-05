const { expect } = require('chai');
const { createCalculator } = require('./index.js');

describe('createCalculator', function() {
    it('should return a module object', function() {
        let result = createCalculator();
        expect(result).to.be.an('object');
    });

    it('should return an object with three functions', function() {
        let calculator = createCalculator();
        expect(Object.keys(calculator)).to.have.lengthOf(3);
    });

    it('should keep an internal sum', function() {
        let calculator = createCalculator();
        calculator['add'](3);
        let result = calculator['get']();

        expect(result).to.equal(3);
    });

    it('add() and subtract() take params', function() {
        let calculator = createCalculator();
        calculator['add']('5');
        calculator['subtract']('2');
        let result = calculator['get']();

        expect(result).to.equal(3);
    });

    it('should return internal sum', function() {
        let calculator = createCalculator();
        calculator['add'](5);
        calculator['subtract'](2);
        let result = calculator['get']();

        expect(result).to.equal(3);
    });
});