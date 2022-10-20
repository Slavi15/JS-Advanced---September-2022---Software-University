const { assert } = require('chai');
const { flowerShop } = require('./flowersShop.js');

describe('flowerShop', function() {
    describe('calcPriceOfFlowers', function() {
        it('should validate input', function() {
            assert.throws(() => { flowerShop.calcPriceOfFlowers('string', 'string', 10) }, 'Invalid input!');
            assert.throws(() => { flowerShop.calcPriceOfFlowers('string', 10, 'string') }, 'Invalid input!');
            assert.throws(() => { flowerShop.calcPriceOfFlowers(10, 10, 10) }, 'Invalid input!');
            assert.throws(() => { flowerShop.calcPriceOfFlowers([], 10, 10) }, 'Invalid input!');
            assert.throws(() => { flowerShop.calcPriceOfFlowers('string', [], 10) }, 'Invalid input!');
            assert.throws(() => { flowerShop.calcPriceOfFlowers('string', 10, []) }, 'Invalid input!');
            assert.throws(() => { flowerShop.calcPriceOfFlowers({}, 10, 'string') }, 'Invalid input!');
        });

        it('should return correct result', function() {
            assert.equal(flowerShop.calcPriceOfFlowers('roses', 7, 10), `You need $${Number(70).toFixed(2)} to buy roses!`);
            assert.equal(flowerShop.calcPriceOfFlowers('roses', 7, 5), `You need $${Number(35).toFixed(2)} to buy roses!`);
        });
    });

    describe('checkFlowersAvailable', function() {
        it('should check if flower is present', function() {
            let gardenArr = ['Rose', 'Lily', 'Orchid'];

            let flowerOne = 'Rose';
            let flowerTwo = 'Orchid';
            let flowerThree = 'Tulip';

            assert.equal(flowerShop.checkFlowersAvailable(flowerOne, gardenArr),  `The ${flowerOne} are available!`);
            assert.equal(flowerShop.checkFlowersAvailable(flowerTwo, gardenArr),  `The ${flowerTwo} are available!`);
            assert.equal(flowerShop.checkFlowersAvailable(flowerThree, gardenArr),  `The ${flowerThree} are sold! You need to purchase more!`);
        });
    });

    describe('sellFlowers', function() {
        it('should validate input', function() {
            assert.throws(() => { flowerShop.sellFlowers([], 'string') }, 'Invalid input!');
            assert.throws(() => { flowerShop.sellFlowers('string', []) }, 'Invalid input!');
            assert.throws(() => { flowerShop.sellFlowers('string', 10) }, 'Invalid input!');
            assert.throws(() => { flowerShop.sellFlowers([], []) }, 'Invalid input!');
            assert.throws(() => { flowerShop.sellFlowers({}, 10) }, 'Invalid input!');
            assert.throws(() => { flowerShop.sellFlowers('string', 'string') }, 'Invalid input!');
            assert.throws(() => { flowerShop.sellFlowers('string', {}) }, 'Invalid input!');
        });

        it('should return modified array', function() {
            let gardenArr = ['Rose', 'Lily', 'Orchid'];

            assert.equal(flowerShop.sellFlowers(gardenArr, 1), `${['Rose', 'Orchid'].join(' / ')}`);
            assert.equal(flowerShop.sellFlowers(gardenArr, 2), `${['Rose', 'Lily'].join(' / ')}`);
        });
    });
});