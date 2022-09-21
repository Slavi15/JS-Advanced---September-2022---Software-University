function storeCatalogue(arr) {
    const data = arr.map(el => el.split(' : '));

    // Solution One
    let object = {};

    for (let dataBlock of data) {
        const [product, price] = dataBlock;
        object[product] = Number(price);
    };

    let sortedObject = Object.keys(object)
                            .sort((a, b) => a.localeCompare(b))
                            .reduce(function (result, key) {
                                result[key] = object[key];
                                return result;
                            }, {});

    let groupLetter = '';
    for (let key in sortedObject) {
        if (key[0] !== groupLetter) {
            groupLetter = key[0];
            console.log(groupLetter.toUpperCase());
        };

        console.log(`  ${key}: ${sortedObject[key]}`);
    };

    // Solution Two
    // const map = new Map();
    
    // for (let dataBlock of data) {
    //     const [product, price] = dataBlock;

    //     map.set(product, {
    //         price: Number(price)
    //     });
    // };

    // const sortedMap = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    
    // let groupLetter = '';
    // for (let kvp of sortedMap) {
    //     if (groupLetter !== kvp[0][0]) {
    //         groupLetter = kvp[0][0];
    //         console.log(groupLetter.toUpperCase());
    //     };

    //     console.log(`  ${kvp[0]}: ${kvp[1].price}`);
    // };
};

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300', 
    'Apple : 1.25', 
    'Anti-Bug Spray : 15', 
    'T-Shirt : 10']);
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5', 
    'Raspberry P : 4999', 
    'Rolex : 100000', 
    'Rollon : 10', 
    'Rali Car : 2000000', 
    'Pesho : 0.000001', 
    'Barrel : 10']);