const { expect } = require('chai');
const { mathEnforcer } = require('./index.js');

describe('mathEnforcer', function() {
    it('should return undefined if param is not number', function() {
        expect(mathEnforcer['addFive']('3')).to.be.undefined;
    });
    it('should return result', function() {
        expect(mathEnforcer['addFive'](5)).to.equal(10);
    });
    it('should return result', function() {
        expect(mathEnforcer['addFive'](5.6)).to.equal(10.6);
    });
    it('should return result', function() {
        expect(mathEnforcer['addFive'](-5)).to.equal(0);
    });
    it('should return result', function() {
        expect(mathEnforcer['addFive'](-2)).to.equal(3);
    });

    it('should return undefined if param is not number', function() {
        expect(mathEnforcer['subtractTen']('18')).to.be.undefined;
    });
    it('should return result', function() {
        expect(mathEnforcer['subtractTen'](18)).to.equal(8);
    });
    it('should return result', function() {
        expect(mathEnforcer['subtractTen'](18.8)).to.equal(8.8);
    });
    it('should return result', function() {
        expect(mathEnforcer['subtractTen'](-7.5)).to.equal(-17.5);
    });
    it('should return result', function() {
        expect(mathEnforcer['subtractTen'](7)).to.equal(-3);
    });
    it('should return result', function() {
        expect(mathEnforcer['subtractTen'](-7)).to.equal(-17);
    });
    it('should return result', function() {
        expect(mathEnforcer['subtractTen'](10)).to.equal(0);
    });

    it('should return undefined if param is not number', function() {
        expect(mathEnforcer['sum'](8, '7')).to.be.undefined;
    });
    it('should return undefined if param is not number', function() {
        expect(mathEnforcer['sum']('8', 7)).to.be.undefined;
    });
    it('should return undefined if param is not number', function() {
        expect(mathEnforcer['sum']('8', '7')).to.be.undefined;
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](5, 3)).to.equal(8);
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](5.5, 3)).to.equal(8.5);
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](5.5, -3)).to.equal(2.5);
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](5.5, 4.5)).to.equal(10);
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](-5.5, -4.5)).to.equal(-10);
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](-5, -3)).to.equal(-8);
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](5, -3)).to.equal(2);
    });
    it('should return result', function() {
        expect(mathEnforcer['sum'](-5, 3)).to.equal(-2);
    });
});