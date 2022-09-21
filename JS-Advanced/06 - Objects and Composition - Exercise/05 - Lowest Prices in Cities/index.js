function lowestPricesCities(arr) {
    const data = arr.map(el => el.split(' | '));
    const map = new Map();

    for (let dataBlock of data) {
        const [town, product, price] = dataBlock;

        if (map.has(product) === false) {
            map.set(product, {
                price: Number(price),
                town: town
            });
        } else if (map.has(product) === true) {
            if (map.get(product).price > Number(price)) {
                map.get(product).price = Number(price);
                map.get(product).town = town;
            };
        };
    };

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1].price} (${kvp[1].town})`);
    };
};

lowestPricesCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
lowestPricesCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);