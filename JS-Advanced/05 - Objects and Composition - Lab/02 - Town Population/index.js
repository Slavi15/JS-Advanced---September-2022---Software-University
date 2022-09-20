function townPopulation(arr) {
    const data = arr.map(item => item.split(' <-> '));
    const map = new Map();

    for (let [town, population] of data) {
        if (map.has(town) === false) {
            map.set(town, {
                population: Number(population)
            });
        } else {
            map.get(town).population += Number(population);
        };
    };

    map.forEach((value, key) => {
        console.log(`${key} : ${value.population}`);
    });
};

townPopulation(['Sofia <-> 1200000',
                'Montana <-> 20000',
                'New York <-> 10000000',
                'Washington <-> 2345000',
                'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
                'Honk Kong <-> 2100004',
                'Jerusalem <-> 2352344',
                'Mexico City <-> 23401925',
                'Istanbul <-> 1000']);