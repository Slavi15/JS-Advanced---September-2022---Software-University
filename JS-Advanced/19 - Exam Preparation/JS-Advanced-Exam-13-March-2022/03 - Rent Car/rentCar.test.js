const { assert } = require('chai');
const { rentCar } = require('./rentCar.js');

describe('rentCar', function() {
    describe('searchCar', function() {
        it('should validate input', function() {
            assert.throws(() => { rentCar.searchCar('string', 'string') }, 'Invalid input!');
            assert.throws(() => { rentCar.searchCar('string', []) }, 'Invalid input!');
            assert.throws(() => { rentCar.searchCar([], []) }, 'Invalid input!');
            assert.throws(() => { rentCar.searchCar([], 10) }, 'Invalid input!');
            assert.throws(() => { rentCar.searchCar({}, 'string') }, 'Invalid input!');
            assert.throws(() => { rentCar.searchCar('string', 10) }, 'Invalid input!');
            assert.throws(() => { rentCar.searchCar(10, {}) }, 'Invalid input!');
        });

        it('should return number of matching elements', function() {
            let shop = ['Volkswagen', 'BMW', 'Audi'];
            let shopTwo = ['Tesla', 'Mercedes', 'Ferrari', 'Tesla'];

            assert.equal(rentCar.searchCar(shop, 'BMW'), `There is 1 car of model BMW in the catalog!`);
            assert.equal(rentCar.searchCar(shopTwo, 'Tesla'), `There is 2 car of model Tesla in the catalog!`);
        });

        it('should throw error if no matcging elements', function() {
            let shop = ['Opel', 'Audi', 'Ford'];
            let shopTwo = [];

            assert.throws(() => { rentCar.searchCar(shop, 'Porsche') },  'There are no such models in the catalog!');
            assert.throws(() => { rentCar.searchCar(shopTwo, 'Lamborgini') },  'There are no such models in the catalog!');
        });
    });

    describe('calculatePriceOfCar', function() {
        it('should validate input', function() {
            assert.throws(() => { rentCar.calculatePriceOfCar('string', 'string') }, 'Invalid input!');
            assert.throws(() => { rentCar.calculatePriceOfCar(10, 10) }, 'Invalid input!');
            assert.throws(() => { rentCar.calculatePriceOfCar([], 'string') }, 'Invalid input!');
            assert.throws(() => { rentCar.calculatePriceOfCar('string', {}) }, 'Invalid input!');
            assert.throws(() => { rentCar.calculatePriceOfCar('string', []) }, 'Invalid input!');
            assert.throws(() => { rentCar.calculatePriceOfCar({}, 10) }, 'Invalid input!');
            assert.throws(() => { rentCar.calculatePriceOfCar([], 10) }, 'Invalid input!');
        });

        it('should return model and price', function() {
            let catalogue = {
                Volkswagen: 20,
                Audi: 36,
                Toyota: 40,
                BMW: 45,
                Mercedes: 50
            };

            assert.equal(rentCar.calculatePriceOfCar('Audi', 10), `You choose Audi and it will cost $360!`);
            assert.equal(rentCar.calculatePriceOfCar('Mercedes', 3), `You choose Mercedes and it will cost $150!`);
        });

        it('should throw error', function() {
            assert.throws(() => { rentCar.calculatePriceOfCar('Porsche', 7) }, 'No such model in the catalog!');
            assert.throws(() => { rentCar.calculatePriceOfCar('Ferrari', 8) }, 'No such model in the catalog!');
        });
    });

    describe('checkBudget', function() {
        it('should validate input', function() {
            assert.throws(() => { rentCar.checkBudget('string', 'string', 'string') }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget(10, 'string', {}) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget('string', 10, 'string') }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget(10, 'string', 10) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget([], 'string', true) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget(10, [], 'string') }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget('string', {}, []) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget({}, false, 'string') }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget([], {}, 'string') }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget([], 10, 8) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget(10, {}, 10) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget([], [], 10) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget('string', {}, true) }, 'Invalid input');
            assert.throws(() => { rentCar.checkBudget([], 10, {}) }, 'Invalid input');
        });

        it('should check budget', function() {
            assert.equal(rentCar.checkBudget(10, 3, 30), 'You rent a car!');
            assert.equal(rentCar.checkBudget(10, 3, 50), 'You rent a car!');
            assert.equal(rentCar.checkBudget(50, 7, 500), 'You rent a car!');
        });

        it('should return message if budget is not enough', function() {
            assert.equal(rentCar.checkBudget(10, 3, 25), 'You need a bigger budget!');
        });
    });
});