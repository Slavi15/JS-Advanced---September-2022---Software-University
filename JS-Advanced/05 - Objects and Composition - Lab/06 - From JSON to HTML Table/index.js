function jsonToHTMLTable(str) {
    const jsonData = JSON.parse(str);
    let keysArray = [];
    let valuesArray = [];

    for (let item of jsonData) {
        const keys = Object.keys(item);
        const values = Object.values(item);

        let keyResult = '';
        for (let key of keys) {
            keyResult += `<th>${key}</th>`
        };
        keysArray.push(keyResult);

        let valueResult = '';
        for (let value of values) {
            valueResult += `<td>${value}</td>`;
        };
        valuesArray.push(valueResult);
    };

    let finalValuesArray = [];

    for (let value of valuesArray) {
        finalValuesArray.push(`<tr>${value}</tr>`);
    };

    let finalKeysArray =`<tr>${keysArray[0]}</tr>`;
    let finalArray = ['<table>', finalKeysArray, finalValuesArray.join('\n'), '</table>']

    console.log(finalArray.join('\n'));
};

jsonToHTMLTable(`[{"Name":"Stamat",
                    "Score":5.5},
                    {"Name":"Rumen",
                    "Score":6}]`);
jsonToHTMLTable(`[{"Name":"Pesho",
                    "Score":4,
                    " Grade":8},
                    {"Name":"Gosho",
                    "Score":5,
                    " Grade":8},
                    {"Name":"Angel",
                    "Score":5.50,
                    " Grade":10}]`);