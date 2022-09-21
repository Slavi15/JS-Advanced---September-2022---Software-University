function townsToJSON(arr) {
    const keys = arr.shift().split('|').slice(1, 4);
    const values = arr.map(el => el.split('|').slice(1, 4));

    let resultArray = [];
    
    for (let value of values) {
        const [town, latitude, longitude] = value;
        resultArray.push({
            "Town": town.slice(1, town.length - 1),
            "Latitude": Number(Number(latitude).toFixed(2)),
            "Longitude": Number(Number(longitude).toFixed(2))
        });
    };

    console.log(JSON.stringify(resultArray));
};

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);