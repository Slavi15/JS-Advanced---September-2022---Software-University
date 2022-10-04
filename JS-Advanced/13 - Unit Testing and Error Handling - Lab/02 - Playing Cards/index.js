function playingCards(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face)) throw new Error('Error');
    if (!validSuits.includes(suit)) throw new Error('Error');

    switch (suit) {
        case 'S': suit = '\u2660'; break;
        case 'H': suit = '\u2665'; break;
        case 'D': suit = '\u2666'; break;
        case 'C': suit = '\u2663'; break;
    };

    return {
        face: face,
        suit: suit,
        toString: function() {
            return `${this.face}${this.suit}`;
        }
    };
};

console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));