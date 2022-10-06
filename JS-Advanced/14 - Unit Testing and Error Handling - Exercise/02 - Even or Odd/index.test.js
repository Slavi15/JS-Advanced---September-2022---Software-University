const { expect } = require('chai');
const { isOddOrEven } = require('./index.js');

describe('isOddOrEven', function() {
    it('should return undefined if not string', function() {
        let input = [1, 2, 3];
        let result = isOddOrEven(input);
        expect(result).to.be.undefined;
    });

    it('should return even', function() {
        let input = 'even';
        let result = isOddOrEven(input);
        expect(result).to.equal('even');
    });

    it('should return odd', function() {
        let input = 'odd';
        let result = isOddOrEven(input);
        expect(result).to.equal('odd');
    });
});