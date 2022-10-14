const { assert } = require('chai');
const { companyAdministration } = require('./companyAdministration.js');

describe('companyAdministration', function() {
    describe('hiringEmployee', function() {
        it('should throw error if position value is invalid', function() {
            assert.throws(() => { companyAdministration.hiringEmployee('Slavi', 'Coder', 7) }, 'We are not looking for workers for this position.');
        });

        it('should meet job requirements', function() {
            const name = 'Slavi';
            const position = 'Programmer';
            assert.equal(companyAdministration.hiringEmployee(name, position, 3), `${name} was successfully hired for the position ${position}.`);
            assert.equal(companyAdministration.hiringEmployee(name, position, 5), `${name} was successfully hired for the position ${position}.`);
        });

        it('should return error if requirements are not met', function() {
            const name = 'Slavi';
            const position = 'Programmer';
            assert.equal(companyAdministration.hiringEmployee(name, position, 2), `${name} is not approved for this position.`);
        });
    });

    describe('calculateSalary', function() {
        it('should check if input is valid', function() {
            assert.throws(() => { companyAdministration.calculateSalary('8') }, 'Invalid hours');
            assert.throws(() => { companyAdministration.calculateSalary(-3) }, 'Invalid hours');
        });

        it('should calculate salary', function() {
            assert.equal(companyAdministration.calculateSalary(3), 45);
            assert.equal(companyAdministration.calculateSalary(5), 75);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });
    });

    describe('firedEmployee', function() {
        it('should have valid input', function() {
            assert.throws(() => { companyAdministration.firedEmployee('string', 3) }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee({}, 3) }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee(10, 3) }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee([], -1) }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee([], '3') }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee([], {}) }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee([], []) }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee('string', []) }, 'Invalid input');
            assert.throws(() => { companyAdministration.firedEmployee(10, {}) }, 'Invalid input');
        });

        it('should remove element at given index', function() {
            let input = ['Slavi', 'Momchil', 'Kosio', 'Ivailo', 'Nikolay'];
            let index = 1;
            let result = ['Slavi', 'Kosio', 'Ivailo', 'Nikolay'];
            let indexTwo = 3;
            let resultTwo = ['Slavi', 'Momchil', 'Kosio', 'Nikolay'];

            assert.equal(companyAdministration.firedEmployee(input, index), result.join(', '));
            assert.equal(companyAdministration.firedEmployee(input, indexTwo), resultTwo.join(', '));
        });
    });
});