function deckOfCards(arr) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    let result = [];

    arr.forEach(card => {
        let face = card.slice(0, card.length - 1);
        let suit = card[card.length - 1];

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            console.log(`Invalid card: ${face}${suit}`);
            result.length = 0;
            return -1;
        };

        switch (suit) {
            case 'S': suit = '\u2660'; break;
            case 'H': suit = '\u2665'; break;
            case 'D': suit = '\u2666'; break;
            case 'C': suit = '\u2663'; break;
        };

        result.push(`${card.slice(0, card.length - 1)}${suit}`);
    });

    if (result.length !== 0) console.log(result.join(' '));
};

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);