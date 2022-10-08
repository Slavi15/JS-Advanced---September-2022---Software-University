const { assert } = require('chai');
const { PaymentPackage } = require('./index.js');

describe('PaymentPackage', function() {
    describe('create instance', function() {
        let paymentPackage;
        beforeEach(function() {
            paymentPackage = new PaymentPackage('Slavi', 80);
        });

        it('name should be correct', function() {
            assert.equal(paymentPackage._name, 'Slavi', 'name is correct');
        });

        it('value should be correct', function() {
            assert.equal(paymentPackage._value, 80, 'value is correct');
        });

        it('VAT should be correct', function() {
            assert.equal(paymentPackage._VAT, 20, 'default VAT value is correct');
            assert.equal(typeof paymentPackage._VAT, 'number', 'VAT is of correct type');
        });

        it('active should be correct', function() {
            assert.equal(paymentPackage._active, true, 'default active value is correct');
            assert.equal(typeof paymentPackage._active, 'boolean', 'active is of correct type');
        });
    });

    describe('test getters', function() {
        let paymentPackage;
        beforeEach(function() {
            paymentPackage = new PaymentPackage('Slavi', 80);
        });

        it('instance should return correct name', function() {
            assert.equal(paymentPackage.name, 'Slavi');
        });

        it('instance should return correct value', function() {
            assert.equal(paymentPackage.value, 80);
        });

        it('instance should return correct VAT', function() {
            assert.equal(paymentPackage.VAT, 20);
        });

        it('instance should return correct active value', function() {
            assert.equal(paymentPackage.active, true);
        });
    });

    describe('test setters', function() {
        let paymentPackage;
        beforeEach(function() {
            paymentPackage = new PaymentPackage('Slavi', 80);
        });

        it('name setter correct value', function() {
            assert.equal(paymentPackage.name, 'Slavi');
            paymentPackage.name = 'Stanislav';
            assert.equal(paymentPackage.name, 'Stanislav');
        });

        it('name setter incorrect type', function() {
            assert.throws(() => { new PaymentPackage(80, 80) }, 'Name must be a non-empty string');
        });

        it('name setter empty string', function() {
            assert.throws(() => { new PaymentPackage('', 80) }, 'Name must be a non-empty string');
        });

        it('value setter correct value', function() {
            assert.equal(paymentPackage.value, 80);
            paymentPackage.value = 70;
            assert.equal(paymentPackage.value, 70);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });

        it('value setter incorrect type', function() {
            assert.throws(() => { new PaymentPackage('Slavi', '80') }, 'Value must be a non-negative number');
        });

        it('value setter negative number', function() {
            assert.throws(() => { new PaymentPackage('Slavi', -1) }, 'Value must be a non-negative number');
        });

        it('VAT setter correct value', function() {
            assert.equal(paymentPackage.VAT, 20);
            paymentPackage.VAT = 30;
            assert.equal(paymentPackage.VAT, 30);
        });

        it('VAT setter incorrect type', function() {
            assert.throws(() => { paymentPackage.VAT = '20' }, 'VAT must be a non-negative number');
        });

        it('VAT setter negative number', function() {
            assert.throws(() => { paymentPackage.VAT = -1 }, 'VAT must be a non-negative number');
        });

        it('active setter correct value', function() {
            assert.equal(paymentPackage.active, true);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });

        it('active setter incorrect type', function() {
            assert.throws(() => { paymentPackage.active = 'true' }, 'Active status must be a boolean');
        });
    });

    describe('test toString()', function() {
        let paymentPackage;
        beforeEach(function() {
            paymentPackage = new PaymentPackage('Slavi', 80);
        });

        it('should return active state', function() {
            const output = [
                `Package: Slavi`, 
                `- Value (excl. VAT): 80`,
                `- Value (VAT 20%): ${80 * (1 + 20 / 100)}`
            ].join('\n');
            assert.equal(paymentPackage.toString(), output);
        });

        it('should return inactive state', function() {
            const output = [
                `Package: Slavi (inactive)`, 
                `- Value (excl. VAT): 80`,
                `- Value (VAT 20%): ${80 * (1 + 20 / 100)}`
            ].join('\n');
            paymentPackage.active = false;
            assert.equal(paymentPackage.toString(), output);
        });
    });
});