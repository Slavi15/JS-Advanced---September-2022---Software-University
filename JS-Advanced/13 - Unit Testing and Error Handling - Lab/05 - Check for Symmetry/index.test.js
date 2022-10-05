const { expect } = require('chai');
const { isSymmetric } = require('./index.js');

describe('isSymmetric', function() {
    it('should return false if input is not array', function() {
        let input = 'invalid';
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it('should return true if input is symmetric array', function() {
        let input = [1, 2, 3, 4, 3, 2, 1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it('should return true if input is symmetric array', function() {
        let input = [1, 2, 3, 3, 2, 1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it('should return false if input is not symmetric array', function() {
        let input = [1, 2, 3, 4, 3, 2];
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it('should check if symmetric with mixed values', function() {
        let input = [5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5];
        let result = isSymmetric(input);
        expect(result).to.be.true;

        // expect(isSymmetric([5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.be.true;
    });
});