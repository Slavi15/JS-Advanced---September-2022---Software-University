const { assert } = require('chai');
const { chooseYourCar } = require('./chooseYourCar.js');

describe('chooseYourCar', function() {
    describe('choosingType', function() {
        it('should validate input', function() {
            assert.throws(() => { chooseYourCar.choosingType('Sedan', 'black', 1899) }, 'Invalid Year!');
            assert.throws(() => { chooseYourCar.choosingType('Sedan', 'black', 2023) }, 'Invalid Year!');
            assert.throws(() => { chooseYourCar.choosingType('Hatchback', 'black', 2020) }, 'This type of car is not what you are looking for.');
            assert.throws(() => { chooseYourCar.choosingType('Hatchback', 'black', 2023) }, 'Invalid Year!');
        });

        it('should return correct picked car output', function() {
            const color = 'black';
            const type = 'Sedan';
            assert.equal(chooseYourCar.choosingType(type, color, 2010), `This ${color} ${type} meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType(type, color, 2016), `This ${color} ${type} meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType(type, color, 2009), `This ${type} is too old for you, especially with that ${color} color.`);
            assert.equal(chooseYourCar.choosingType(type, color, 2000), `This ${type} is too old for you, especially with that ${color} color.`);
        });
    });

    describe('brandName', function() {
        it('should validate input', function() {
            const brands = ['BMW', 'Toyota', 'Peugeot'];
            assert.throws(() => { chooseYourCar.brandName('string', 'string') }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName(10, 'string') }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName({}, 10) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName(brands, 'string') }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName(brands, {}) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName(brands, []) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName(brands, -1) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName(brands, 3) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.brandName(brands, true) }, 'Invalid Information!');
        });

        it('should return correct output of brands', function() {
            const brands = ['BMW', 'Toyota', 'Peugeot'];

            const indexOne = 2;
            const resultOne = ['BMW', 'Toyota'];
            const indexTwo = 1;
            const resultTwo = ['BMW', 'Peugeot'];

            assert.equal(chooseYourCar.brandName(brands, indexOne), resultOne.join(', '));
            assert.equal(chooseYourCar.brandName(brands, indexTwo), resultTwo.join(', '));
        });
    });

    describe('CarFuelConsumption', function() {
        it('should validate input', function() {
            assert.throws(() => { chooseYourCar.carFuelConsumption('string', 10) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption(10, 'string') }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption([], 10) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption(10, []) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption('string', 'string') }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption(10, -1) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption(-1, 10) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption(-1, -1) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption({}, 10) }, 'Invalid Information!');
            assert.throws(() => { chooseYourCar.carFuelConsumption(10, {}) }, 'Invalid Information!');
        });

        it('should calculate fuel consumption', function() {
            const litersOne = (50 / 30) * 100;
            const litersTwo = (1 / 20) * 100;
            const litersThree = (7 / 100) * 100;

            assert.equal(chooseYourCar.carFuelConsumption(30, 50), `The car burns too much fuel - ${litersOne.toFixed(2)} liters!`);
            assert.equal(chooseYourCar.carFuelConsumption(20, 1), `The car is efficient enough, it burns ${litersTwo.toFixed(2)} liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), `The car is efficient enough, it burns ${litersThree.toFixed(2)} liters/100 km.`);
        });
    });
});