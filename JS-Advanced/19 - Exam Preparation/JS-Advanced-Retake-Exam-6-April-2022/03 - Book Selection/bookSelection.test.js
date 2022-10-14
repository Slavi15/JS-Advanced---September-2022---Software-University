const { assert, expect } = require('chai');
const { bookSelection } = require('./bookSelection.js');

describe('bookSelection', function() {
    describe('isGenreSuitable', function() {
        function concatString(genre, age) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        };

        it('should return not suitable', function() {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 10), concatString('Thriller', 10));
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), concatString('Thriller', 12));
            assert.equal(bookSelection.isGenreSuitable('Horror', 10), concatString('Horror', 10));
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), concatString('Horror', 12));
        });

        it('should return suitable', function() {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Comedy', 13), `Those books are suitable`);
        });
    });

    describe('isItAffordable', function() {
        function isAffordable(price, budget) {
            return `Book bought. You have ${budget - price}$ left`;
        };

        it('should return invalid input', function() {
            assert.throws(() => { bookSelection.isItAffordable('21', 42) }, 'Invalid input');
            assert.throws(() => { bookSelection.isItAffordable(21, '42') }, 'Invalid input');
            assert.throws(() => { bookSelection.isItAffordable('21', '42') }, 'Invalid input');
        });

        it('should calculate if money is enough', function() {
            assert.equal(bookSelection.isItAffordable(21, 42), isAffordable(21, 42));
            assert.equal(bookSelection.isItAffordable(3, 10), isAffordable(3, 10));
        });

        it('should calculate if money is enough', function() {
            let price = 42;
            let budget = 21;
            assert.equal(bookSelection.isItAffordable(price, budget), 'You don\'t have enough money');
        });
    });

    describe('suitableTitles', function() {
        it('should return invalid input', function() {
            assert.throws(() => { bookSelection.suitableTitles('string', 'valid') }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles(10, 'valid') }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles([], []) }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles([], 10) }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles('string', []) }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles({}, 'valid') }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles([], {}) }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles({}, {}) }, 'Invalid input');
            assert.throws(() => { bookSelection.suitableTitles(10, 10) }, 'Invalid input');
        });

        it('should return array', function() {
            let input = [
                { title: 'The Da Vinci Code', genre: 'Thriller' },
                { title: 'The Da Vinci Code2', genre: 'Thriller' },
                { title: 'The Da Vinci Code3', genre: 'Horror' },
            ];
            let result = ['The Da Vinci Code', 'The Da Vinci Code2'];
            let result2 = ['The Da Vinci Code3'];
            let result3 = [];

            assert.equal(bookSelection.suitableTitles(input, 'Thriller').join(' '), result.join(' '));
            assert.equal(bookSelection.suitableTitles(input, 'Horror').join(' '), result2.join(' '));
            assert.equal(bookSelection.suitableTitles(input, 'Comedy').join(' '), result3.join(' '));
        });
    });
});