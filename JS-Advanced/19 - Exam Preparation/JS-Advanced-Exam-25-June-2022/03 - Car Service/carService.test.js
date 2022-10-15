const { assert } = require('chai');
const { carService } = require('./carService.js');

describe('carService', function() {
    describe('isItExpensive', function() {
        it('should check param -> issue', function() {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive('Headlights'), `The overall price will be a bit cheaper`);
        });
    });

    describe('discount', function() {
        it('should validate input', function() {
            assert.throws(() => { carService.discount('string', 'string') }, 'Invalid input');
            assert.throws(() => { carService.discount('string', 10) }, 'Invalid input');
            assert.throws(() => { carService.discount(10, 'string') }, 'Invalid input');
            assert.throws(() => { carService.discount([], true) }, 'Invalid input');
            assert.throws(() => { carService.discount(10, []) }, 'Invalid input');
            assert.throws(() => { carService.discount([], {}) }, 'Invalid input');
            assert.throws(() => { carService.discount({}, 'string') }, 'Invalid input');
        });

        it('should return correct value', function() {
            assert.equal(carService.discount(3, 10), `Discount applied! You saved 1.5$`);
            assert.equal(carService.discount(7, 10), `Discount applied! You saved 1.5$`);
            assert.equal(carService.discount(8, 10), `Discount applied! You saved 3$`);
            assert.equal(carService.discount(1, 10), 'You cannot apply a discount');
            assert.equal(carService.discount(2, 10), 'You cannot apply a discount');
        });
    });

    describe('partsToBuy', function() {
        it('should validate input', function() {
            assert.throws(() => { carService.partsToBuy([], {}) }, 'Invalid input');
            assert.throws(() => { carService.partsToBuy({}, []) }, 'Invalid input');
            assert.throws(() => { carService.partsToBuy('string', []) }, 'Invalid input');
            assert.throws(() => { carService.partsToBuy(10, 'string') }, 'Invalid input');
            assert.throws(() => { carService.partsToBuy('string', 10) }, 'Invalid input');
            assert.throws(() => { carService.partsToBuy(10, 10) }, 'Invalid input');
            assert.throws(() => { carService.partsToBuy(true, 'string') }, 'Invalid input');
        });

        it('should return total price', function() {
            let partsCatalog = [
                { part: 'engine', price: 1000 },
                { part: 'transmission', price: 750 }
            ];
            let neededParts = ['engine', 'coil springs'];
            let neededPartsTwo = ['engine', 'coil springs', 'transmission'];
    
            assert.equal(carService.partsToBuy([], neededParts), 0);
            assert.equal(carService.partsToBuy(partsCatalog, neededParts), 1000);
            assert.equal(carService.partsToBuy(partsCatalog, neededPartsTwo), 1750);
        });
    });
});