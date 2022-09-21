function heroicInventory(arr) {
    const data = arr.map(el => el.split(' / '));
    let resultArray = [];

    for (let dataBlock of data) {
        const [name, level, items] = dataBlock;

        resultArray.push({
            name: name,
            level: Number(level),
            items: items ? items.split(', ') : []
        });
    };

    return JSON.stringify(resultArray);
};

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));